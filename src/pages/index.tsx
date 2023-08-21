import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import SignUpForm from "lib/components/SignUpForm";

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
      <NextSeo title="ARC MTG Club - Wilds of Eldraine draft" />
      <Flex
        display="flex"
        flexDir="column"
        alignItems="center"
        mx="1.5rem"
        my="auto"
        gap="1.2rem"
      >
        <SignUpForm />
      </Flex>
    </Flex>
  );
};

export default Home;
