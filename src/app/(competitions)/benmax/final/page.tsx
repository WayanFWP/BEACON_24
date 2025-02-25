"use client";

import FinalBenmaxFormTeam from "@/components/competitions/benmax/final/FormTeam";
import FinalBenmaxUploadFile from "@/components/competitions/benmax/final/UploadFile";
import {
  finalBenmaxSchema,
  finalBenmaxType,
} from "@/contracts/register-competition.schema";
import { app } from "@/lib/firebase/firebase.config";
import { Box, Button, Link, Text, useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UploadResult,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const storage = getStorage(app);

export default function BenmaxFinalPage() {
  const [teamName, setTeamName] = useState<string>("");

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<finalBenmaxType>({
    mode: "all",
    resolver: zodResolver(finalBenmaxSchema),
    defaultValues: {
      discount: null
    }
  });

  const toast = useToast();

  const onSubmit = async (data: finalBenmaxType) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/competition/benmax/full-paper`,
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (res.status === 200) {
        const dateTime = (new Date().toLocaleDateString('id-ID') + ' ' + new Date().toLocaleTimeString())
                          .replaceAll("/", "-");
        
        if (data.paper) {
          const fileRef = ref(
            storage,
            `benmax_final/team-${data.team}/${dateTime}-paper`
          );

          await uploadBytes(fileRef, data.paper[0]).then(
            (entry: UploadResult) => {
              getDownloadURL(entry.ref).then((url: string) => {
                data.paper[0].url = url;
              });
            }
          );
        }

        if (data.discount) {
          const fileRef = ref(
            storage,
            `benmax_final/team-${data.team}/${dateTime}-discount-proof`
          );

          await uploadBytes(fileRef, data.discount[0]).then(
            (entry: UploadResult) => {
              getDownloadURL(entry.ref).then((url: string) => {
                data.discount[0].url = url;
              });
            }
          );
        }

        if (data.payment) {
          const fileRef = ref(
            storage,
            `benmax_final/team-${data.team}/${dateTime}-payment-proof`
          );

          await uploadBytes(fileRef, data.payment[0]).then(
            (entry: UploadResult) => {
              getDownloadURL(entry.ref).then((url: string) => {
                data.payment[0].url = url;
              });
            }
          );
        }

        toast({
          title: "BENMAX Submission Success!",
          description:
            "Thank you for your submission! Do not forget to stay tune in the group and check our social media for more information!",
          status: "success",
          duration: 12000,
          isClosable: true,
        });
      } else {
        toast({
          title: "BENMAX Submission Error!",
          description:
            "Please contact us if you have any problems",
          status: "error",
          duration: 7000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "BENMAX Submission Error!",
        description: "Please try again later",
        status: "error",
        duration: 7000,
        isClosable: true,
      });
    }
  };

  const handleTeamChange = (team: string) => {
    setValue("team", team);
    setTeamName(team);
  };

  return (
    <Box>
      <Box
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
        <Text my={3}>Hello BENMAX 2024&apos;s participants!</Text>
        <Text my={3}>
          Congratulations to all participants who have successfully passed the
          abstract selection process for BENMAX 2024. For those who have passed
          the abstract selection process, please fill the form below to proceed
          to the full paper stage.
        </Text>
        <Text mt={3}>
          You can pay the fee to:
        </Text>
        <Text
          fontWeight="bold"
        >
          Bank Mandiri 1400023974885 on behalf of KHAIRUNA MARSYA
        </Text>
        <Box my={3}>
          <Text>
            Regular Price:{" "}
              <span className="font-bold">
                IDR 120,000.00
              </span>
          </Text>
          <Text>
            Webinar Participant Price:{" "}
            <span className="font-bold">
              IDR 100,000.00
            </span>
            {" "}(Please upload the proof of discount)
          </Text>
        </Box>
        <FinalBenmaxFormTeam
          errors={errors}
          teamName={teamName}
          handleTeamChange={handleTeamChange}
        />
        <FinalBenmaxUploadFile
          name="paper"
          text="Paper"
          control={control}
          errors={errors.paper}
        />
        <FinalBenmaxUploadFile
          name="discount"
          text="Discount"
          description="For example: Webinar BENMAX certificate"
          control={control}
          errors={errors.discount}
          isRequired={false}
        />
        <FinalBenmaxUploadFile
          name="payment"
          text="Payment Proof"
          control={control}
          errors={errors.payment}
        />
        <Button
          py={6}
          mt={4}
          colorScheme="saturationRed"
          _hover={{
            bgColor: "saturationRed.800",
          }}
          isLoading={isSubmitting}
          type="submit"
          w="100%"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
