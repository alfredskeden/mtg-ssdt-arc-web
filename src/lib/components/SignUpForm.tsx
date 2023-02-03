import { Box, Button, Heading } from "@chakra-ui/react";
import type {
  FieldErrorsImpl,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

import InputMTG from "lib/components/InputMTG";
import type { FormValues } from "pages/api/sign-up";

type SignUpFormProps = {
  register: UseFormRegister<FormValues>;
  errors: Partial<
    FieldErrorsImpl<{
      name: string;
      email: string;
      phone: string;
      accept: boolean;
    }>
  >;
  isValid: boolean;
  // generateQRcode: () => Promise<void>;
  isSubmitting: boolean;
  watch: UseFormWatch<FormValues>;
  QRCode: string | undefined;
};

const SignUpForm = ({
  register,
  errors,
  isValid,
  isSubmitting,
  watch,
  QRCode,
}: SignUpFormProps) => {
  return (
    <Box maxWidth={800} margin="0 auto" w="100%">
      <Heading as="h2" size="lg" mb="8">
        Sign up
      </Heading>
      <Box>
        <InputMTG
          label="name"
          register={register}
          error={errors.name}
          errorMessage={errors.name?.message}
        />
        <InputMTG
          label="email"
          register={register}
          error={errors.email}
          errorMessage={errors.email?.message}
          pattern={{
            value:
              // eslint-disable-next-line no-useless-escape
              /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/,
            message: "Please enter a valid email.",
          }}
        />
        <InputMTG
          label="phone"
          register={register}
          error={errors.phone}
          errorMessage={errors.phone?.message}
          pattern={{
            value: /^(([+]46)\s*(7)|07)[02369]\s*(\d{4})\s*(\d{3})$/,
            message: "Please provide a valid Swedish number.",
          }}
        />
      </Box>
      {/* <Button
        mt={8}
        colorScheme="teal"
        size="lg"
        disabled={!isValid}
        onClick={generateQRcode}
        alignSelf="flex-start"
        width={{ base: "100%", md: "auto" }}
      >
        Generate Payment QR Code
      </Button>
      {QRCode && isValid && (
        <Box
          display="flex"
          flexDirection={["column", "column", "row"]}
          gap={6}
          mt={8}
        >
          <Box alignSelf="center">
            <Text>Payment information:</Text>
            <Text>To: {process.env.NEXT_PUBLIC_PAYMENT_NUMBER}</Text>
            <Text>Name: {process.env.NEXT_PUBLIC_PAYMENT_NAME}</Text>
            <Text>Entry fee: {process.env.NEXT_PUBLIC_PAYMENT_PRICE} kr</Text>
            <Text>Message: {watch("name")}</Text>
            <Text>Or Scan QR Code</Text>
          </Box>
          <Box>
            <Image
              src={QRCode}
              alt="qr code for paying the entry fee"
              boxSize="200px"
            />
          </Box>
        </Box>
      )} */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="end"
        mt={8}
        flexDirection={{ base: "column", md: "row" }}
      >
        {/* <Checkbox {...register("accept")}>
          I have paid and I accept the rules for the tournament provided below.
        </Checkbox> */}
        <Button
          ml={{ base: "0px", md: "32px" }}
          mt={{ base: "24px", md: "0px" }}
          colorScheme="teal"
          type="submit"
          disabled={!watch("accept") || !isValid || !QRCode}
          isLoading={isSubmitting}
          size="lg"
          alignSelf="flex-start"
        >
          SIGN UP!
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpForm;
