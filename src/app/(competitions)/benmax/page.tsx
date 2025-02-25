"use client";

import BenmaxFormLeader from "@/components/competitions/benmax/FormLeader";
import BenmaxFormMembers from "@/components/competitions/benmax/FormMembers";
import BenmaxFormOthers from "@/components/competitions/benmax/FormOthers";
import BenmaxFormTeam from "@/components/competitions/benmax/FormTeam";
import { RouteURL } from "@/consts/route";
import {
  membersNameSchema,
  registerBenmaxSchema,
  registerBenmaxType,
  teamNameSchema,
} from "@/contracts/register-competition.schema";
import { app } from "@/lib/firebase/firebase.config";
import { retrieveDataById } from "@/lib/firebase/service";
import { authOptions } from "@/utils/authOptions";
import { Box, Button, Link, Text, useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UploadResult,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const storage = getStorage(app);

interface userInterface {
  email: string;
  fullname: string;
  benmax: boolean;
}

export default function BenmaxPage() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const [me, setMe] = useState<userInterface>();
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    fetch("http://localhost:1337/api/me?id=" + session?.user?.id)
      .then((res) => res.json())
      .then((data) => {
        setMe(data.data);
      });
  }, [session]);

  const toast = useToast();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<registerBenmaxType>({
    mode: "all",
    resolver: zodResolver(registerBenmaxSchema),
    defaultValues: {
      memberOne: {
        region: null,
        identityCard: null,
      },
      memberTwo: {
        region: null,
        identityCard: null,
      },
    },
  });

  const onSubmit = async (data: registerBenmaxType) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/competition/benmax/register`,
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (res.status === 200) {
        if (data.leader.identityCard) {
          const fileRef = ref(
            storage,
            `benmax/team-${data.team.teamName}/identity/leader-${data.leader.name}`
          );

          await uploadBytes(fileRef, data.leader.identityCard[0]).then(
            (entry: UploadResult) => {
              getDownloadURL(entry.ref).then((url: string) => {
                data.leader.identityCard[0].url = url;
              });
            }
          );
        }

        if (data.memberOne.identityCard) {
          const fileRef = ref(
            storage,
            `benmax/team-${data.team.teamName}/identity/member-1-${data.memberOne.name}`
          );

          await uploadBytes(fileRef, data.memberOne.identityCard[0]).then(
            (entry: UploadResult) => {
              getDownloadURL(entry.ref).then((url: string) => {
                data.memberOne.identityCard[0].url = url;
              });
            }
          );
        }

        if (data.memberTwo.identityCard) {
          const fileRef = ref(
            storage,
            `benmax/team-${data.team.teamName}/identity/member-2-${data.memberTwo.name}`
          );

          await uploadBytes(fileRef, data.memberTwo.identityCard[0]).then(
            (entry: UploadResult) => {
              getDownloadURL(entry.ref).then((url: string) => {
                data.memberTwo.identityCard[0].url = url;
              });
            }
          );
        }

        if (data.others.abstract) {
          const fileRef = ref(
            storage,
            `benmax/team-${data.team.teamName}/abstract/abstract-${data.team.teamName}`
          );

          await uploadBytes(fileRef, data.others.abstract[0]).then(
            (entry: UploadResult) => {
              getDownloadURL(entry.ref).then((url: string) => {
                data.others.abstract[0].url = url;
              });
            }
          );
        }

        setSubmitted(true);

        toast({
          title: "BENMAX Registration Success!",
          description:
            "Thank you for your interest! Do not forget to join the group and check our social media for more information!",
          status: "success",
          duration: 12000,
          isClosable: true,
        });
      } else {
        toast({
          title: "BENMAX Registration Error!",
          description:
            "Looks like you have registered to BENMAX. Please contact us if you have any problems",
          status: "error",
          duration: 7000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "BENMAX Registration Error!",
        description: "Please try again later",
        status: "error",
        duration: 7000,
        isClosable: true,
      });
    }
  };

  // if (submitted) {
  //   return (
  //     <Text fontWeight="bold">
  //       Thank you for your interests! Please join the group through this link:{" "}
  //       <Link href={RouteURL.whatsappGroup} color="secondaryBlue.100">
  //         {RouteURL.whatsappGroup}
  //       </Link>
  //     </Text>
  //   );
  // }

  return (
    <Box>
      {/* <Box
        w={{
          base: "250px",
          lg: "300px",
        }}
        h="100px"
        position="relative"
        m="auto"
      >
        <Image
          fill
          src="/images/benmax/logo.png"
          alt="benmax"
          sizes={undefined}
          className="absolute"
          loading="lazy"
        />
      </Box>
      <form className="mt-16" onSubmit={handleSubmit(onSubmit)}>
        {me?.benmax === true && (
          <Text fontWeight="bold" color="saturationRed.200">
            Looks like you have registered to BENMAX. Please join the group
            through this link:{" "}
            <Link href={RouteURL.whatsappGroup} color="secondaryBlue.100">
              {RouteURL.whatsappGroup}
            </Link>
          </Text>
        )}
        <Text my={3}>Hello BENMAX 2024&apos;s participants!</Text>
        <Text my={3}>
          To those who are interested and want to be part of BENMAX 2024
          participants, please register yourself through this form. Make sure to
          enter the data according to your real identity.
        </Text>
        <BenmaxFormTeam errors={errors} register={register} />
        <BenmaxFormLeader
          control={control}
          errors={errors}
          register={register}
        />
        <BenmaxFormMembers
          number={1}
          control={control}
          errors={errors}
          register={register}
        />
        <BenmaxFormMembers
          number={2}
          control={control}
          errors={errors}
          register={register}
        />
        <BenmaxFormOthers
          isSubmitting={isSubmitting}
          control={control}
          errors={errors}
          register={register}
        />
      </form> */}
			BENMAX Registration is closed. Thank you for your interest in
			joining BENMAX. See you next year!
    </Box>
  );
}
