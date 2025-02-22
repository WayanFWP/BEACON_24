import { RegisterCompetitionRegion } from "@/contracts/register-competition-enum.contract"
import { registerCompetitionType } from "@/contracts/register-competition.schema"
import { FormControl, FormErrorMessage, FormLabel, Heading, Input, Select } from "@chakra-ui/react"
import { Fragment } from "react"
import { FieldErrors, UseFormRegister } from "react-hook-form"

const FormTeam = ({
    errors,
    register,
}: { 
    errors: FieldErrors<registerCompetitionType>, 
    register: UseFormRegister<registerCompetitionType>, 
}) => {
    return (
        <>
			<Heading mt={10}>Team</Heading>
            <FormControl
				isRequired
				isInvalid={!!errors.team?.teamName}
				my={7}
			>
				<FormLabel htmlFor='team.teamName'>Team Name</FormLabel>
				<Input
					_placeholder={{
						color: '#ebebeb'
					}}
					py={6}
					id='team.teamName'
					placeholder='Team Name'
					{...register('team.teamName')}
				/>
				<FormErrorMessage
					color="#FFFFFF"
				>{errors.team?.teamName?.message}</FormErrorMessage>
			</FormControl>
			<FormControl
				isRequired
				isInvalid={!!errors.team?.school}
				my={7}
			>
				<FormLabel htmlFor='school'>School</FormLabel>
				<Input
					_placeholder={{
						color: '#ebebeb'
					}}
					py={6}
					id='school'
					placeholder='School'
					{...register('team.school')}
				/>
				<FormErrorMessage
					color="#FFFFFF"
				>{errors.team?.school?.message}</FormErrorMessage>
			</FormControl>
            <FormControl
				isRequired
				isInvalid={!!errors.team?.schoolAddress}
				my={7}
			>
				<FormLabel htmlFor='schoolAddress'>School Address</FormLabel>
				<Input
					_placeholder={{
						color: '#ebebeb'
					}}
					py={6}
					id='schoolAddress'
					placeholder='School Address'
					{...register('team.schoolAddress')}
				/>
				<FormErrorMessage
					color="#FFFFFF"
				>{errors.team?.schoolAddress?.message}</FormErrorMessage>
			</FormControl>
            <FormControl
				isRequired
				isInvalid={!!errors.team?.region}
				my={7}
			>
				<FormLabel htmlFor='region'>Region</FormLabel>
				<Select
					id='region'
					placeholder='Region'
					{...register('team.region')}
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
				>{errors.team?.region?.message}</FormErrorMessage>
			</FormControl>
        </>
    )
}

export default FormTeam;