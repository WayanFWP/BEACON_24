import { RegisterCompetitionRegion } from "@/contracts/register-competition-enum.contract"
import { registerBenmaxType } from "@/contracts/register-competition.schema"
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text } from "@chakra-ui/react"
import { Fragment, useState } from "react"
import { Control, Controller, FieldErrors, UseFormRegister } from "react-hook-form"
import BenmaxUploadFile from "./UploadFile"

const BenmaxFormOthers = ({
    isSubmitting,
	control,
    errors,
    register,
}: { 
    isSubmitting: boolean,
	control: Control<registerBenmaxType>,
    errors: any, 
    register: UseFormRegister<registerBenmaxType>, 
}) => {
    return (
        <>
            <Heading mt={10}>Abstract</Heading>
            <BenmaxUploadFile
				errors={errors.others?.abstract}
				name="others.abstract"
				text="Upload your abstract file in PDF"
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

export default BenmaxFormOthers;