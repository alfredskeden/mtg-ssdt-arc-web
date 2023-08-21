import { Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import type {
  FieldError,
  UseFormRegister,
  ValidationRule,
} from "react-hook-form";

import type { FormValuesStrings, FormValuesTypes } from "lib/utils";
import { requiredText } from "lib/utils";
import type { FormValues } from "pages/api/sign-up";

type InputMTGProps = {
  label: FormValuesStrings;
  inputType: FormValuesTypes;
  register: UseFormRegister<FormValues>;
  error: FieldError | undefined;
  errorMessage: string | undefined;
  isRequired?: boolean;
  pattern?: ValidationRule<RegExp>;
};

const InputMTG = ({
  label,
  inputType,
  register,
  error,
  errorMessage,
  isRequired = true,
  pattern,
}: InputMTGProps) => {
  return (
    <FormControl>
      <Flex flexDir="column">
        <FormLabel htmlFor={label} fontSize="1.6rem" fontWeight={700}>
          {label}
        </FormLabel>
        <Input
          height="4.8rem"
          id={label}
          type={label}
          background="white"
          border="0"
          borderRadius="0"
          color="black"
          fontSize="1.6rem"
          fontWeight={700}
          placeholder={label}
          {...register(inputType, {
            required: isRequired ? requiredText : undefined,
            pattern,
          })}
        />
        <Text
          color="red.400"
          fontSize="1.2rem"
          fontWeight={700}
          minHeight="1.8rem"
          mt="0.3rem"
        >
          {error && errorMessage}
        </Text>
      </Flex>
    </FormControl>
  );
};

export default InputMTG;
