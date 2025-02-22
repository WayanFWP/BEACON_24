import { RegisterCompetitionRegion } from "@/contracts/register-competition-enum.contract"
import { registerBenmaxType } from "@/contracts/register-competition.schema"
import { Box, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select, Text } from "@chakra-ui/react"
import { Fragment, useState } from "react"
import { Control, Controller, FieldErrors, UseFormRegister } from "react-hook-form"
import BenmaxUploadFile from "./UploadFile"

const BenmaxFormLeader = ({
	control,
    errors,
    register,
}: { 
	control: Control<registerBenmaxType>,
    errors: any, 
    register: UseFormRegister<registerBenmaxType>, 
}) => {

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
				isInvalid={!!errors.leader?.nim}
				my={7}
			>
				<FormLabel htmlFor='leader.nim'>Leader NIM</FormLabel>
				<Input
					_placeholder={{
						color: '#ebebeb'
					}}
					py={6}
					id='leader.nim'
					placeholder='Leader NIM'
					{...register('leader.nim')}
				/>
				<FormErrorMessage
					color="#FFFFFF"
				>{errors.leader?.nim?.message}</FormErrorMessage>
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
			<FormControl
				isRequired
				isInvalid={!!errors.leader?.school}
				my={7}
			>
				<FormLabel htmlFor='leader.school'>School</FormLabel>
				<Input
					_placeholder={{
						color: '#ebebeb'
					}}
					py={6}
					id='leader.school'
					placeholder='School'
					{...register('leader.school')}
				/>
				<FormErrorMessage
					color="#FFFFFF"
				>{errors.leader?.school?.message}</FormErrorMessage>
			</FormControl>
            <FormControl
				isRequired
				isInvalid={!!errors.leader?.schoolAddress}
				my={7}
			>
				<FormLabel htmlFor='leader.schoolAddress'>School Address</FormLabel>
				<Input
					_placeholder={{
						color: '#ebebeb'
					}}
					py={6}
					id='leader.schoolAddress'
					placeholder='School Address'
					{...register('leader.schoolAddress')}
				/>
				<FormErrorMessage
					color="#FFFFFF"
				>{errors.leader?.schoolAddress?.message}</FormErrorMessage>
			</FormControl>
            <FormControl
				isRequired
				isInvalid={!!errors.leader?.region}
				my={7}
			>
				<FormLabel htmlFor='leader.region'>Region</FormLabel>
				<Select
					id='leader.region'
					placeholder='Region'
					{...register('leader.region')}
				>
                {Object.entries(RegisterCompetitionRegion).map(([region, value], index) => {
                    return (
                        <Fragment key={index}>
                            <option className="text-black bg-transparent" value={value}>{value}</option>
                        </Fragment>
                    )
                })}
                </Select>
				<FormErrorMessage
					color="#FFFFFF"
				>{errors.leader?.region?.message}</FormErrorMessage>
			</FormControl>
			<BenmaxUploadFile
				errors={errors.leader?.identityCard}
				name="leader.identityCard"
				text="Identity Card"
				control={control}
			/>
        </>
    )
}

export default BenmaxFormLeader;