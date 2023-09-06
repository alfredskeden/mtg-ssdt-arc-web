import {
  useToast,
  Text,
  Flex,
  Checkbox,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

import InputMTG from "lib/components/InputMTG";
import { emailRegex, phoneRegex } from "lib/utils/regex";
import type { FormValues } from "pages/api/sign-up";

const SignUpForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: "onBlur" });
  const [Desktop] = useMediaQuery("(min-width: 920px)");
  const [signed, setSigned] = useState(false);
  const toast = useToast();
  const router = useRouter();
  const disabledForm = !watch("accept") || !isValid || signed;

  const onSubmit = handleSubmit(async (formData) => {
    const response = await axios.post("/api/sign-up", formData);

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
      toast({
        title: "Signed up! Nice!",
        status: "success",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
      setSigned(true);
      router.push("/#swish-payment");
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

  return (
    <form onSubmit={onSubmit} id="form">
      <Flex
        flexDir={Desktop ? "row" : "column"}
        gap="4.8rem"
        px="1.6rem"
        mt="2.4rem"
        background="rgba(0, 0, 0, 0.2)"
        border="1px solid rgba(0, 0, 0, 0.1)"
        backdropFilter="blur(10px)"
        maxWidth={420}
      >
        <Flex flexDir="column" maxWidth={Desktop ? "100%" : "full"}>
          <Text
            as="h2"
            fontSize="2.4rem"
            display="flex"
            gap={4}
            lineHeight="2.9rem"
            fontWeight={700}
            alignItems="center"
            my="3.2rem"
            flexDirection={Desktop ? "row-reverse" : "row"}
            justifyContent={Desktop ? "space-between" : ""}
          >
            <Image
              src="/icon_planeswalker.png"
              alt="Planeswalker icon"
              width="22"
              height="40"
            />
            <Text>Sign up</Text>
          </Text>
          <Flex flexDir="column" gap="1.6rem">
            <InputMTG
              label="First name"
              inputType="firstName"
              register={register}
              error={errors.firstName}
              errorMessage={errors.firstName?.message}
            />
            <InputMTG
              label="Last name"
              inputType="lastName"
              register={register}
              error={errors.lastName}
              errorMessage={errors.lastName?.message}
            />
            <InputMTG
              label="Email"
              inputType="email"
              register={register}
              error={errors.email}
              errorMessage={errors.email?.message}
              pattern={{
                value: emailRegex,
                message: "Please enter a valid email.",
              }}
            />
            <InputMTG
              label="Phone"
              inputType="phone"
              register={register}
              error={errors.phone}
              errorMessage={errors.phone?.message}
              pattern={{
                value: phoneRegex,
                message: "Please provide a valid Swedish phone number.",
              }}
            />
            <Flex gap="2.4rem" mb="2.4rem">
              <Box>
                <Checkbox
                  {...register("accept")}
                  border="0"
                  background="white"
                  mt="0.4rem"
                  size="lg"
                />
              </Box>
              <Flex flexDir="column" gap="1.2rem" lineHeight="1.4rem">
                <Text fontSize="1.2rem" color="#FF0000" fontWeight={500}>
                  I understand that if I do not make a swish payment with the
                  right amount the same day as upon registration I will lose my
                  place in the draft.
                </Text>
                <Text fontSize="1.2rem" fontWeight={500}>
                  I do also understand that my contact information will be saved
                  and used by ARC MTG Club if needed.
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Box
            as="button"
            type="submit"
            disabled={disabledForm}
            alignSelf="center"
            fontWeight={900}
            fontSize="3.2rem"
            textTransform="uppercase"
            p="1.6rem"
            mb="3.2rem"
            w="100%"
            border={disabledForm ? "1px solid grey" : "1px solid red"}
            background={disabledForm ? "" : "rgba(255, 0, 0, 0.7)"}
          >
            {signed ? "Registered" : "Sign up"}
          </Box>
        </Flex>
      </Flex>
    </form>
  );
};

export default SignUpForm;
