import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { NextSeo } from "next-seo";
import type { FieldError, UseFormRegister } from "react-hook-form";
import { useForm } from "react-hook-form";

import type { FormValues } from "pages/api/sign-up";

const requiredText = "This is required";

type FormValuesStrings = "name" | "email" | "phone";

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
      <FormErrorMessage>{error && errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

const Home = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const toast = useToast();

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

  return (
    <Flex direction="column" minHeight="70vh" gap={4} mb={8} w="full">
      <NextSeo title="Home" />

      <form onSubmit={onSubmit}>
        <Box display="flex" flexDirection="column" gap={7} w={["100%", "50%"]}>
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
          <InputMTG
            label="phone"
            register={register}
            error={errors.phone}
            errorMessage={errors.phone?.message}
          />
        </Box>
        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
          isLoading={isSubmitting}
          size="lg"
        >
          SIGN UP!
        </Button>
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
