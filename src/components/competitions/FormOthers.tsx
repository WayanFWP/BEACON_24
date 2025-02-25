import { RegisterCompetitionRegion } from "@/contracts/register-competition-enum.contract"
import { registerCompetitionType } from "@/contracts/register-competition.schema"
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text } from "@chakra-ui/react"
import { Fragment, useState } from "react"
import { Control, Controller, FieldErrors, UseFormRegister } from "react-hook-form"
import UploadFile from "../UploadFile"

const FormOthers = ({
    isSubmitting,
	control,
    errors,
    register,
}: { 
    isSubmitting: boolean,
	control: Control<registerCompetitionType>,
    errors: any, 
    register: UseFormRegister<registerCompetitionType>, 
}) => {
	const [filename, setFilename] = useState<FileList | null>(null);

    return (
        <>
            <Heading mt={10}>Refferal & Payment Proof</Heading>
            <FormControl
				my={7}
			>
				<FormLabel htmlFor='others.refferal'>Refferal Code (optional)</FormLabel>
				<Input
                    _placeholder={{
                        color: '#ebebeb'
                    }}
					py={6}
					id='others.refferal'
					placeholder='Refferal Code'
					{...register('others.refferal')}
				/>
			</FormControl>
            <FormControl
				my={7}
			>
				<FormLabel htmlFor='others.promo'>Promo Code (optional)</FormLabel>
				<Input
                    _placeholder={{
                        color: '#ebebeb'
                    }}
					py={6}
					id='others.promo'
					placeholder='Promo Code'
					{...register('others.promo')}
				/>
			</FormControl>
            <UploadFile
				errors={errors.others?.invoice}
				name="others.invoice"
				text="Payment Proof"
				control={control}
			/>
            <Button
				py={6}
				mt={4}
				colorScheme='saturationRed'
                _hover={{
                    bgColor: 'saturationRed.800'
                }}
				isLoading={isSubmitting}
				type='submit'
				w="100%"
			>
				Register
			</Button>
        </>
    )
}

export default FormOthers;