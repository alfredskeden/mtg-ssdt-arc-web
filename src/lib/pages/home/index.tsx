import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { NextSeo } from "next-seo";
import { useState } from "react";
import type { FieldError, UseFormRegister } from "react-hook-form";
import { useForm } from "react-hook-form";

import type { FormValues } from "pages/api/sign-up";

const requiredText = "This is required";

type FormValuesStrings = "name" | "email";

type InputMTGProps = {
  label: FormValuesStrings;
  register: UseFormRegister<FormValues>;
  error: FieldError | undefined;
  errorMessage: string | undefined;
  isRequired?: boolean;
};

const InputMTG = ({
  label,
  register,
  error,
  errorMessage,
  isRequired = true,
}: InputMTGProps) => {
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel htmlFor={label}>{label}</FormLabel>
      <Input
        size="lg"
        id={label}
        type={label}
        borderColor="white"
        placeholder={label}
        {...register(label, {
          required: requiredText,
        })}
      />
      <Text color="red.400">{error && errorMessage}</Text>
    </FormControl>
  );
};

const Home = () => {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormValues>({ mode: "onBlur" });
  const toast = useToast();
  const [QRCode, setQRCode] = useState<string>();

  const onSubmit = handleSubmit(async (data) => {
    const response = await axios.post("/api/sign-up", data);

    if (response.data.code === "P2002") {
      toast({
        title: "Already signed up",
        description: "Please contact organizers if you need help.",
        status: "warning",
        duration: 6000,
        isClosable: true,
      });
      return;
    }

    if (response.status === 200) {
      reset();
      setQRCode(undefined);
      toast({
        title: "Signed up! Nice!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: "Sign up failed.",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  });

  const generateQRcode = async () => {
    const response = await axios.post(
      "https://api.swish.nu/qr/v2/prefilled",
      {
        payee: process.env.NEXT_PUBLIC_PAYMENT_NUMBER,
        amount: {
          value: Number(process.env.NEXT_PUBLIC_PAYMENT_PRICE),
        },
        message: {
          value: watch("name"),
        },
        size: 150,
      },
      {
        responseType: "blob",
      }
    );

    setQRCode(URL.createObjectURL(response.data));
  };

  return (
    <Flex direction="column" minHeight="70vh" gap={4} mb={8} w="full">
      <NextSeo title="Home" />

      <form onSubmit={onSubmit}>
        <Box display="flex" flexDirection="column" gap={4}>
          <Box
            display="flex"
            flexDirection="column"
            gap={7}
            w={["100%", "50%"]}
          >
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
            />
            <FormControl isRequired>
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <Input
                size="lg"
                id="phone"
                type="phone"
                borderColor="white"
                placeholder="phone"
                {...register("phone", {
                  required: requiredText,
                  pattern: {
                    value: /^(([+]46)\s*(7)|07)[02369]\s*(\d{4})\s*(\d{3})$/,
                    message: "Please provide a valid Swedish number.",
                  },
                })}
              />
              <Text color="red.400">
                {errors.phone && errors.phone.message}
              </Text>
            </FormControl>
          </Box>
          <Button
            mt={4}
            colorScheme="teal"
            size="lg"
            disabled={!isValid}
            onClick={generateQRcode}
            alignSelf="flex-start"
          >
            Generate Payment QR Code
          </Button>
          {QRCode && isValid && (
            <>
              <Text>Payment information:</Text>
              <Text>To: {process.env.NEXT_PUBLIC_PAYMENT_NAME}</Text>
              <Text>Number: {process.env.NEXT_PUBLIC_PAYMENT_NUMBER}</Text>
              <Text>
                Amount: {process.env.NEXT_PUBLIC_PAYMENT_PRICE} kr (13 % discont
                for 6 packs)
              </Text>
              <Text>Message: {watch("name")}</Text>
              <Text>Or Scan QR Code</Text>
              <Image
                src={QRCode}
                alt="qr code for paying the fee"
                boxSize="200px"
              />
            </>
          )}
          <Checkbox {...register("accept")} alignSelf="flex-start">
            I have paied and accept the rules of the tournament provided below.
          </Checkbox>
          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            disabled={!watch("accept") || !isValid}
            isLoading={isSubmitting}
            size="lg"
            alignSelf="flex-start"
          >
            SIGN UP!
          </Button>
        </Box>
      </form>

      <Box mt="8">
        <Heading as="h2" size="lg">
          <u>Information</u>
        </Heading>
        <Text>Information goes here!</Text>
      </Box>
    </Flex>
  );
};

export default Home;
