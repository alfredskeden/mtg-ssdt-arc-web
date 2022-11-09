import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function CallToActionWithMedia() {
  const scrollToForm = () => {
    const form = document.querySelector("#form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Container maxW="6xl">
      <Stack
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text as="p" position="relative">
              Magic the Gathering
            </Text>

            <Text as="span" color="red.400">
              Super Sealed Tournament
            </Text>
          </Heading>
          <UnorderedList listStyleType="none">
            <ListItem>
              <Text color="gray.500" as="span">
                What -
              </Text>{" "}
              Magic the Gathering sealed tournament
            </ListItem>
            <ListItem>
              <Text color="gray.500" as="span">
                Where -
              </Text>{" "}
              Mäster Samuelsgatan 56, Stockholm
            </ListItem>
            <ListItem>
              <Text color="gray.500" as="span">
                When -
              </Text>{" "}
              19/11/2022
            </ListItem>
            <ListItem>
              <Text color="gray.500" as="span">
                How much -
              </Text>{" "}
              300kr
            </ListItem>
          </UnorderedList>
          {/* <Text as="span" mt={4}>
            <Text color="gray.500" as="span">
              What -
            </Text>{" "}
            Magic the Gathering sealed tournament
          </Text> */}

          {/* <Text as="span">
            <Text color="gray.500" as="span">
              Where -
            </Text>{" "}
            Mäster Samuelsgatan 56, Stockholm
          </Text> */}

          {/* <Text as="span">
            <Text color="gray.500" as="span">
              When -
            </Text>{" "}
            19/11/2022
          </Text>

          <Text as="span">
            <Text color="gray.500" as="span">
              How much -
            </Text>{" "}
            300kr
          </Text> */}
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded="full"
              size="lg"
              fontWeight="normal"
              px={6}
              colorScheme="red"
              bg="red.400"
              _hover={{ bg: "red.500" }}
              onClick={scrollToForm}
            >
              Sign up
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify="center"
          align="center"
          position="relative"
          w="full"
        >
          <Box
            position="relative"
            height="300px"
            rounded="2xl"
            boxShadow="2xl"
            width="full"
            overflow="hidden"
          >
            <Image
              alt="Hero Image"
              fit="cover"
              align="center"
              w="100%"
              h="100%"
              src="https://images.ctfassets.net/s5n2t79q9icq/1KaNwfysdygZiZqe5ZSthE/9077c88e093ba4698df10f0963168c0a/uK0KJKJRDE_2.jpg"
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
