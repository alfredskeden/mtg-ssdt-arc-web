import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import type {
  FieldError,
  UseFormRegister,
  ValidationRule,
} from "react-hook-form";

import type { FormValuesStrings } from "lib/utils";
import { capitalizeFirstLetter, requiredText } from "lib/utils";
import type { FormValues } from "pages/api/sign-up";

type InputMTGProps = {
  label: FormValuesStrings;
  register: UseFormRegister<FormValues>;
  error: FieldError | undefined;
  errorMessage: string | undefined;
  isRequired?: boolean;
  pattern?: ValidationRule<RegExp>;
};

const InputMTG = ({
  label,
  register,
  error,
  errorMessage,
  isRequired = true,
  pattern,
}: InputMTGProps) => {
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel htmlFor={label}>{capitalizeFirstLetter(label)}</FormLabel>
      <Input
        size="lg"
        id={label}
        type={label}
        borderColor="white"
        placeholder={label}
        {...register(label, {
          required: isRequired ? requiredText : undefined,
          pattern,
        })}
      />
      <Text color="red.400">{error && errorMessage}</Text>
    </FormControl>
  );
};

export default InputMTG;
