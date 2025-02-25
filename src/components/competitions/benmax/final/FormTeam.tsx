import { FinalBenmax } from "@/contracts/register-competition-enum.contract";
import { finalBenmaxType } from "@/contracts/register-competition.schema";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

const FinalBenmaxFormTeam = ({
  errors,
  teamName,
  handleTeamChange,
}: {
  errors: FieldErrors<finalBenmaxType>;
  teamName: string;
  handleTeamChange: (teamName: string) => void;
}) => {


  return (
    <>
      <Heading mt={10}>Team</Heading>
      <FormControl isRequired isInvalid={!!errors.team} my={7}>
        <FormLabel htmlFor="team">Team Name</FormLabel>
        <Select
          id="team"
          placeholder="Select your team"
          value={teamName}
          onChange={e => handleTeamChange(e.target.value)}
        >
          {FinalBenmax.map(
            (value, index) => {
              return (
                <Fragment key={index}>
                  <option className="text-black bg-transparent" value={value}>
                    {value}
                  </option>
                </Fragment>
              );
            }
          )}
        </Select>
        <FormErrorMessage color="#FFFFFF">
          {errors.team?.message}
        </FormErrorMessage>
      </FormControl>
    </>
  );
};

export default FinalBenmaxFormTeam;
