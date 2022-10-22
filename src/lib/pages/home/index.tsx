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
import { useForm } from "react-hook-form";

import InputMTG from "lib/components/InputMTG";
import { requiredText } from "lib/utils";
import type { FormValues } from "pages/api/sign-up";

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
        position: "top",
      });
      return;
    }

    if (response.status === 200) {
      reset();
      setQRCode(undefined);
      toast({
        title: "Signed up! Nice!",
        status: "success",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    toast({
      title: "Sign up failed.",
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top",
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
        size: 200,
      },
      {
        responseType: "blob",
      }
    );

    setQRCode(URL.createObjectURL(response.data));
  };

  return (
    <Flex direction="column" minHeight="70vh" gap={6} w="full">
      <NextSeo title="ARC - UMAIN - Super Sealed Draft Tournament" />

      <form onSubmit={onSubmit}>
        <Box display="flex" flexDirection="column" gap={6}>
          <Box
            display="flex"
            flexDirection="column"
            gap={6}
            w={["100%", "100%", "50%"]}
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
            <Box
              display="flex"
              flexDirection={["column", "column", "row"]}
              gap={6}
            >
              <Box alignSelf="center">
                <Text>Payment information:</Text>
                <Text>To: {process.env.NEXT_PUBLIC_PAYMENT_NUMBER}</Text>
                <Text>Name: {process.env.NEXT_PUBLIC_PAYMENT_NAME}</Text>
                <Text>
                  Entry fee: {process.env.NEXT_PUBLIC_PAYMENT_PRICE} kr
                </Text>
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
          )}
          <Checkbox {...register("accept")} alignSelf="flex-start">
            I have paid and I accept the rules for the tournament provided
            below.
          </Checkbox>
          <Button
            mt={4}
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
