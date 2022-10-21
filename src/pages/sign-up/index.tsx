import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  FormErrorMessage,
  Box,
  useToast,
  Heading,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";

const requiredText = "This is required";

type FormValues = {
  name: string;
  email: string;
  phone: string;
};

const SignUp = () => {
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
      <Box>
        <Heading as="h2" size="md">
          <u>Information</u>
        </Heading>
        <Text>Information goes here!</Text>
      </Box>
      <form onSubmit={onSubmit}>
        <Box display="flex" flexDirection="column" gap={7}>
          <FormControl isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="name"
              placeholder="name"
              {...register("name", {
                required: requiredText,
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="email"
              {...register("email", {
                required: requiredText,
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input
              id="phone"
              type="tel"
              placeholder="phone"
              {...register("phone", {
                required: requiredText,
              })}
            />
            <FormErrorMessage>
              {errors.phone && errors.phone.message}
            </FormErrorMessage>
          </FormControl>
        </Box>
        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
          isLoading={isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Flex>
  );
};

export default SignUp;
