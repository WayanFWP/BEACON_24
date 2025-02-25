import { registerCompetitionType } from "@/contracts/register-competition.schema"
import { Box, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text } from "@chakra-ui/react"
import { Control, UseFormRegister } from "react-hook-form"
import UploadFile from "../UploadFile"

const FormMembers = ({
	number,
	control,
    errors,
    register,
}: { 
	number: number,
	control: Control<registerCompetitionType>,
    errors: any, 
    register: UseFormRegister<registerCompetitionType>, 
}) => {
	const errorMember = number === 1 ? errors.memberOne : errors.memberTwo
	const member = number === 1 ? "memberOne" : "memberTwo";

    return (
        <>
			<Heading mt={10}>{number === 1 ? "First" : "Second"} Member</Heading>
            <FormControl
				isRequired
				isInvalid={!!errorMember?.name}
				my={7}
			>
				<FormLabel htmlFor={`${member}.name`}>Member {number === 1 ? "1" : "2"} Name</FormLabel>
				<Input
					_placeholder={{
						color: '#ebebeb'
					}}
					py={6}
					id={`${member}.name`}
					placeholder='Member Name'
					{...register(`${member}.name`)}
				/>
				<FormErrorMessage
					color="#FFFFFF"
				>{errorMember?.name?.message}</FormErrorMessage>
			</FormControl>
			<FormControl
				isRequired
				isInvalid={!!errorMember?.email}
				my={7}
			>
				<FormLabel htmlFor={`${member}.email`}>Email</FormLabel>
				<Input
					_placeholder={{
						color: '#ebebeb'
					}}
					py={6}
					id={`${member}.email`}
					placeholder='Email'
					{...register(`${member}.email`)}
				/>
				<FormErrorMessage
					color="#FFFFFF"
				>{errorMember?.email?.message}</FormErrorMessage>
			</FormControl>
            <FormControl
				isRequired
				isInvalid={!!errorMember?.phone}
				my={7}
			>
				<FormLabel htmlFor={`${member}.phone`}>Phone Number</FormLabel>
				<Input
					_placeholder={{
						color: '#ebebeb'
					}}
					py={6}
					id={`${member}.phone`}
					placeholder='Phone Number'
					{...register(`${member}.phone`)}
				/>
				<FormErrorMessage
					color="#FFFFFF"
				>{errorMember?.phone?.message}</FormErrorMessage>
			</FormControl>
			<FormControl
				isRequired
				isInvalid={!!errorMember?.line}
				my={7}
			>
				<FormLabel htmlFor={`${member}.line`}>Line ID</FormLabel>
				<Input
					_placeholder={{
						color: '#ebebeb'
					}}
					py={6}
					id={`${member}.line`}
					placeholder='Line ID'
					{...register(`${member}.line`)}
				/>
				<FormErrorMessage
					color="#FFFFFF"
				>{errorMember?.line?.message}</FormErrorMessage>
			</FormControl>
			<UploadFile
				errors={errorMember?.identityCard}
				name={`${member}.identityCard`}
				text="Identity Card"
				control={control}
			/>
        </>
    )
}

export default FormMembers;