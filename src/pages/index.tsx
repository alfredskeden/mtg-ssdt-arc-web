import { Flex, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

// import SignUpForm from "lib/components/SignUpForm";

const Home = () => {
  // return (
  //   <Flex>
  //     <NextSeo title="UMAIN Mtg Club - Qualifiers" />
  //   </Flex>
  // );

  return (
    <Flex
      direction="column"
      minHeight="70vh"
      // backgroundImage="url('/smoke.png')"
      // backgroundPosition="top"
      // backgroundRepeat="no-repeat"
    >
      <NextSeo title="UMAIN MTG Club" />
      <Flex
        display="flex"
        flexDir="column"
        alignItems="center"
        mx="1.5rem"
        my="auto"
        gap="1.2rem"
      >
        <Text as="h1" fontSize="4rem" fontWeight={600} lineHeight="2rem">
          Under construction
        </Text>
        {/* <SignUpForm /> */}
      </Flex>
    </Flex>
  );
};

export default Home;
