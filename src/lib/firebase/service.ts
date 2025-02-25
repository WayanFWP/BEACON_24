import {
  collection,
  doc,
  getDocs,
  addDoc,
  getDoc,
  getFirestore,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { app, auth } from "./firebase.config";
import { TRegister } from "@/contracts/register.contract";
import {
  TFullPaperBenmax,
  TRegisterCompetition,
  TRegisterCompetitionBenmax,
} from "@/contracts/register-competition.contract";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { signIn } from "next-auth/react";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function register(data: TRegister) {
  try {
    await createUserWithEmailAndPassword(auth, data.email, data.password).then(
      async (userCredential) => {
        sendEmailVerification(userCredential.user);
        await addDoc(collection(firestore, "users"), {
          email: data.email,
          fullname: data.fullname,
        });
      }
    );

    return {
      status: true,
      statusCode: 200,
      message: "Registration success! Check your email for verification",
    };
  } catch (error) {
    console.error(error);
    return {
      status: false,
      statusCode: 400,
      message: `${error}`,
    };
  }
}

export async function login(data: { email: string; password: string }) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    if (userCredential) {
      if (!userCredential.user.emailVerified) {
        await signOut(auth);

        return null;
      }

      const q = query(
        collection(firestore, "users"),
        where("email", "==", data.email)
      );

      const snapshot = await getDocs(q);
      const user = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      await signOut(auth);

      if (user) {
        return user[0];
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function registerBenmax(data: TRegisterCompetitionBenmax) {
  try {
    const q = query(
      collection(firestore, "benmax_teams"),
      where("leader.email", "==", data.leader.email)
    );

    const snapshot = await getDocs(q);
    const teams = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (teams.length > 0) {
      return {
        status: false,
        message: "this account already registered benmax competition",
        statusCode: 400,
      };
    }
    try {
      const date = new Date();
      data.others.dateCreated = date.toLocaleString();
      await addDoc(collection(firestore, "benmax_teams"), data);

      const user = query(
        collection(firestore, "users"),
        where("email", "==", data.leader.email)
      );

      const snapshot = await getDocs(user);
      const userFind = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (userFind.length > 0) {
        const userRef = await doc(firestore, "users", userFind[0].id);

        await updateDoc(userRef, {
          benmax: true,
        });
      }

      return {
        status: true,
        statusCode: 200,
        message: "competition register success",
      };
    } catch (err) {
      return {
        status: false,
        statusCode: 400,
        message: "competition register failed",
      };
    }
  } catch (err) {
    console.error("Error in register function:", err);
    return {
      status: false,
      statusCode: 500,
      message: "Internal Server Error (unexpected)",
    };
  }
}

export async function registerBepro(data: TRegisterCompetition) {
  try {
    const q = query(
      collection(firestore, "bepro_teams"),
      where("leader.email", "==", data.leader.email)
    );

    const snapshot = await getDocs(q);
    const teams = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (teams.length > 0) {
      return {
        status: false,
        message: "this account already registered bepro competition",
        statusCode: 400,
      };
    }
    try {
      const date = new Date();
      data.others.dateCreated = date.toLocaleString();
      await addDoc(collection(firestore, "bepro_teams"), data);

      return {
        status: true,
        statusCode: 200,
        message: "competition register success",
      };
    } catch (err) {
      return {
        status: false,
        statusCode: 400,
        message: "competition register failed",
      };
    }
  } catch (err) {
    console.error("Error in register function:", err);
    return {
      status: false,
      statusCode: 500,
      message: "Internal Server Error (unexpected)",
    };
  }
}

export async function getTeamByEmail(email: string, category: string) {
  const leaderQuery = await query(
    collection(firestore, `${category}_teams`),
    where("leader.email", "==", email)
  );

  const leaderSnapshot = await getDocs(leaderQuery);
  const leaderData = leaderSnapshot.docs.map((doc) => ({
    teamName: doc.data().team?.teamName,
  }));

  if (leaderData.length > 0) {
    return leaderData[0].teamName;
  }

  const memberOneQuery = await query(
    collection(firestore, `${category}_teams`),
    where("memberOne.email", "==", email)
  );

  const memberOneSnapshot = await getDocs(memberOneQuery);
  const memberOneData = memberOneSnapshot.docs.map((doc) => ({
    teamName: doc.data().team?.teamName,
  }));

  if (memberOneData.length > 0) {
    return memberOneData[0].teamName;
  }

  const memberTwoQuery = await query(
    collection(firestore, `${category}_teams`),
    where("memberTwo.email", "==", email)
  );

  const memberTwoSnapshot = await getDocs(memberTwoQuery);
  const memberTwoData = memberTwoSnapshot.docs.map((doc) => ({
    teamName: doc.data().team?.teamName,
  }));

  if (memberTwoData.length > 0) {
    return memberTwoData[0].teamName;
  }

  return [];
}

export async function submitFullPaperBenmax(data: TFullPaperBenmax) {
  try {
    const date = new Date();
    data.dateCreated = date.toLocaleString();
    await addDoc(collection(firestore, "benmax_final"), data);

    return {
      status: true,
      statusCode: 200,
      message: "competition register success",
    };
  } catch (err) {
    return {
      status: false,
      statusCode: 400,
      message: "competition register failed",
    };
  }
}
