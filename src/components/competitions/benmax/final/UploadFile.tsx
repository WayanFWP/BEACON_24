"use client";

import { finalBenmaxType } from "@/contracts/register-competition.schema";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { IconUpload, IconFileFilled } from "@tabler/icons-react";
import { useState } from "react";
import { Control, Controller } from "react-hook-form";

const FinalBenmaxUploadFile = ({
  errors,
  name,
  text,
  description,
  control,
  isRequired = true,
}: {
  errors: any;
  name: any;
  text: string;
  description?: string,
  control: Control<finalBenmaxType>;
  isRequired?: boolean;
}) => {
  const [filename, setFilename] = useState<FileList | null>(null);

  return (
    <FormControl
      isRequired={isRequired}
      position="relative"
      isInvalid={!!errors}
      mb={5}
    >
      <FormLabel htmlFor={name}>{text} {!isRequired && "(optional)"}</FormLabel>
      <Text>
        {name === "discount" && (
          <span>
            {description}
          </span>
        )}
      </Text> 
      <Text color="#ebebeb" fontSize="sm" mb={3}>
        Only accept image and PDF files with
        max. 5 MB
      </Text>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <Box
              backgroundColor="transparent"
              p={8}
              borderRadius="lg"
              fontWeight="bold"
              border="1px solid white"
              display="flex"
              flexDirection="column"
              gap={3}
              className="justify-center items-center"
            >
              <IconUpload size={30} />
              {filename?.length === 1 ? (
                <Flex gap={1} className="justify-center items-center">
                  <IconFileFilled /> {filename[0].name}
                </Flex>
              ) : (
                "Select a file"
              )}
            </Box>
            <Input
              _placeholder={{
                color: "#ebebeb",
              }}
              type="file"
              id={name}
              onChange={(e) => {
                field.onChange(e.target.files);
                setFilename(e.target.files);
              }}
              py={16}
              opacity={0}
              position="absolute"
              left={0}
              bottom={0}
              cursor="pointer"
              zIndex={999}
            />
          </>
        )}
      />
      <FormErrorMessage color="#FFFFFF">{errors?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default FinalBenmaxUploadFile;
