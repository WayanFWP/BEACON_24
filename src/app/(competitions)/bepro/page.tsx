"use client"

import FormLeader from "@/components/competitions/FormLeader";
import FormMembers from "@/components/competitions/FormMembers";
import FormOthers from "@/components/competitions/FormOthers";
import FormTeam from "@/components/competitions/FormTeam";
import { membersNameSchema, otherFieldsSchema, teamNameSchema } from "@/contracts/register-competition.schema";
import { app } from "@/lib/firebase/firebase.config";
import { Box, Text, useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UploadResult, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

const storage = getStorage(app);

const registerCompetitionSchema = z.object({
    team: teamNameSchema,
    leader: membersNameSchema,
    memberOne: membersNameSchema,
    memberTwo: z.object({
		name: z.string(),
		email: z.string(),
		phone: z.string(),
		line: z.string(),
	}),
    others: otherFieldsSchema,
});

type registerCompetitionType = z.infer<typeof registerCompetitionSchema>;

export default function BeproPage() {
	const toast = useToast()

	const { 
		control,
		register, 
		handleSubmit, 
		formState: { errors, isSubmitting },
	} = useForm<registerCompetitionType>({
		mode: 'all',
		resolver: zodResolver(registerCompetitionSchema),
		defaultValues: {
			memberTwo: {
				name: '',
				email: '',
				line: '',
				phone: '',
			}
		}
	});

	const onSubmit = async (data: registerCompetitionType) => {
		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/competition/bepro/register`, {
				method: 'POST',
				body: JSON.stringify(data)
			})
	
			if(res.status === 200) {
				if (data.leader.identityCard) {
					const fileRef = ref(storage, `images/team-${data.team.teamName}/identity/leader-${data.leader.name}`)
	
					await uploadBytes(fileRef, data.leader.identityCard[0])
					.then((entry: UploadResult) => {
						getDownloadURL(entry.ref)
						.then((url: string) => {
							data.leader.identityCard[0].url = url
						})
					})
				}
	
				if (data.memberOne.identityCard) {
					const fileRef = ref(storage, `images/team-${data.team.teamName}/identity/member-1-${data.memberOne.name}`)
	
					await uploadBytes(fileRef, data.memberOne.identityCard[0])
					.then((entry: UploadResult) => {
						getDownloadURL(entry.ref)
						.then((url: string) => {
							data.memberOne.identityCard[0].url = url
						})
					})
				}
				
				if (data.others.invoice) {
					const fileRef = ref(storage, `images/team-${data.team.teamName}/invoice/invoice-${data.team.teamName}`)
	
					await uploadBytes(fileRef, data.others.invoice[0])
					.then((entry: UploadResult) => {
						getDownloadURL(entry.ref)
						.then((url: string) => {
							data.others.invoice[0].url = url
						})
					})
				}

				toast({
					title: "BEPRO Registration Success!",
					description: "We will verify your data. Good luck!",
					status: 'success',
					duration: 7000,
					isClosable: true,
				})
			}
			else {
				toast({
					title: "BEPRO Registration Error!",
					description: "Looks like you have registered to BEPRO. Please contact us if you have any problems",
					status: 'error',
					duration: 7000,
					isClosable: true,
				})
			}
		} catch (error) {
			toast({
				title: "BEPRO Registration Error!",
				description: "Please try again later",
				status: 'error',
				duration: 7000,
				isClosable: true,
			})
		}
    }

    return (
        <Box>
            {/* <Box
                w={{
                    base: "200px",
                    lg: "250px"
                }}
                h="100px"
                position="relative"
                m="auto"
            >
                <Image
                    fill
                    src="/images/bepro/logo.png"
                    alt="bepro"
					sizes={undefined}
                    className="absolute"
                    loading="lazy"
                />
            </Box>
            <form
                className="mt-16"
                onSubmit={handleSubmit(onSubmit)}
            >
				<Text my={3}>
					Hello Future BEPRO 2024 Participants!
				</Text>
				<Text my={3}>
					If you&apos;re interested in joining the Biomedical Engineering Prime Competition 2024, please register using this form. Ensure that all your details match your personal identification.
				</Text>
				<Text my={3}>
					For those ready to sign up, you can pay the registration fee to:
				</Text>
				<Text fontWeight="bold">
					Mandiri 1400023974885 a.n. Khairuna Marsya
				</Text>
				<FormTeam
					errors={errors}
					register={register}
				/>
				<FormLeader
					control={control}
					errors={errors}
					register={register}
				/>
				<FormMembers
					number={1}
					control={control}
					errors={errors}
					register={register}
				/>
				<FormOthers
					isSubmitting={isSubmitting}
					control={control}
					errors={errors}
					register={register}
				/>
            </form> */}

			BEPRO Registration is closed. Thank you for your interest in
			joining BEPRO. See you next year!
        </Box>
    )
}