import { RegisterCompetitionRegion } from "@/contracts/register-competition-enum.contract"
import { registerBenmaxType } from "@/contracts/register-competition.schema"
import { FormControl, FormErrorMessage, FormLabel, Heading, Input, Select } from "@chakra-ui/react"
import { Fragment } from "react"
import { FieldErrors, UseFormRegister } from "react-hook-form"

const BenmaxFormTeam = ({
    errors,
    register,
}: { 
    errors: FieldErrors<registerBenmaxType>, 
    register: UseFormRegister<registerBenmaxType>, 
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
        </>
    )
}

export default BenmaxFormTeam;