import { RegisterCompetitionRegion } from "@/contracts/register-competition-enum.contract"
import { registerCompetitionType } from "@/contracts/register-competition.schema"
import { Box, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text } from "@chakra-ui/react"
import { Fragment, useState } from "react"
import { Control, Controller, FieldErrors, UseFormRegister } from "react-hook-form"
import UploadFile from "../UploadFile"

const FormLeader = ({
	control,
    errors,
    register,
}: { 
	control: Control<registerCompetitionType>,
    errors: any, 
    register: UseFormRegister<registerCompetitionType>, 
}) => {
	const [filename, setFilename] = useState<FileList | null>(null);

    return (
        <>
			<Heading mt={10}>Leader</Heading>
            <FormControl
				isRequired
				isInvalid={!!errors.leader?.name}
				my={7}
			>
				<FormLabel htmlFor='leader.name'>Leader Name</FormLabel>
				<Input
					_placeholder={{
						color: '#ebebeb'
					}}
					py={6}
					id='leader.name'
					placeholder='Leader Name'
					{...register('leader.name')}
				/>
				<FormErrorMessage
					color="#FFFFFF"
				>{errors.leader?.name?.message}</FormErrorMessage>
			</FormControl>
			<FormControl
				isRequired
				isInvalid={!!errors.leader?.email}
				my={7}
			>
				<FormLabel htmlFor='leader.email'>Email</FormLabel>
				<Input
					_placeholder={{
						color: '#ebebeb'
					}}
					py={6}
					id='leader.email'
					placeholder='Email'
					{...register('leader.email')}
				/>
				<FormErrorMessage
					color="#FFFFFF"
				>{errors.leader?.email?.message}</FormErrorMessage>
			</FormControl>
            <FormControl
				isRequired
				isInvalid={!!errors.leader?.phone}
				my={7}
			>
				<FormLabel htmlFor='leader.phone'>Phone Number</FormLabel>
				<Input
					_placeholder={{
						color: '#ebebeb'
					}}
					py={6}
					id='leader.phone'
					placeholder='Phone Number'
					{...register('leader.phone')}
				/>
				<FormErrorMessage
					color="#FFFFFF"
				>{errors.leader?.phone?.message}</FormErrorMessage>
			</FormControl>
			<FormControl
				isRequired
				isInvalid={!!errors.leader?.line}
				my={7}
			>
				<FormLabel htmlFor='leader.line'>Line ID</FormLabel>
				<Input
					_placeholder={{
						color: '#ebebeb'
					}}
					py={6}
					id='leader.line'
					placeholder='Line ID'
					{...register('leader.line')}
				/>
				<FormErrorMessage
					color="#FFFFFF"
				>{errors.leader?.line?.message}</FormErrorMessage>
			</FormControl>
			<UploadFile
				errors={errors.leader?.identityCard}
				name="leader.identityCard"
				text="Identity Card"
				control={control}
			/>
        </>
    )
}

export default FormLeader;