import { registerBenmaxType } from "@/contracts/register-competition.schema"
import { Box, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select, Text } from "@chakra-ui/react"
import { Control, UseFormRegister } from "react-hook-form"
import BenmaxUploadFile from "./UploadFile"
import { RegisterCompetitionRegion } from "@/contracts/register-competition-enum.contract"
import { Fragment } from "react"

const BenmaxFormMembers = ({
	number,
	control,
    errors,
    register,
}: { 
	number: number,
	control: Control<registerBenmaxType>,
    errors: any, 
    register: UseFormRegister<registerBenmaxType>, 
}) => {
	const errorMember = number === 1 ? errors.memberOne : errors.memberTwo
	const member = number === 1 ? "memberOne" : "memberTwo";

    return (
        <>
			<Heading mt={10}>{number === 1 ? "First" : "Second"} Member (Optional)</Heading>
            <FormControl
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
			</FormControl>
			<FormControl
				my={7}
			>
				<FormLabel htmlFor={`${member}.nim`}>NIM</FormLabel>
				<Input
					_placeholder={{
						color: '#ebebeb'
					}}
					py={6}
					id={`${member}.nim`}
					placeholder='NIM'
					{...register(`${member}.nim`)}
				/>
			</FormControl>
			<FormControl
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
			</FormControl>
            <FormControl
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
			</FormControl>
			<FormControl
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
			</FormControl>
			<FormControl
				my={7}
			>
				<FormLabel htmlFor={`${member}.school`}>School</FormLabel>
				<Input
					_placeholder={{
						color: '#ebebeb'
					}}
					py={6}
					id={`${member}.school`}
					placeholder='School'
					{...register(`${member}.school`)}
				/>
			</FormControl>
            <FormControl
				my={7}
			>
				<FormLabel htmlFor={`${member}.schoolAddress`}>School Address</FormLabel>
				<Input
					_placeholder={{
						color: '#ebebeb'
					}}
					py={6}
					id={`${member}.schoolAddress`}
					placeholder='School Address'
					{...register(`${member}.schoolAddress`)}
				/>
			</FormControl>
            <FormControl
				my={7}
			>
				<FormLabel htmlFor={`${member}.region`}>Region</FormLabel>
				<Select
					id={`${member}.region`}
					placeholder='Region'
					{...register(`${member}.region`)}
				>
                {Object.entries(RegisterCompetitionRegion).map(([region, value], index) => {
                    return (
                        <Fragment key={index}>
                            <option className="text-black bg-transparent" value={value}>{value}</option>
                        </Fragment>
                    )
                })}
                </Select>
			</FormControl>
			<BenmaxUploadFile
				errors={errorMember?.identityCard}
				name={`${member}.identityCard`}
				text="Identity Card"
				control={control}
				isRequired={false}
			/>
        </>
    )
}

export default BenmaxFormMembers;