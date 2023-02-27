import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import SignUpForm from "lib/components/SignUpForm";

const Home = () => {
  const [Desktop] = useMediaQuery("(min-width: 920px)");
  return (
    <Flex
      direction="column"
      minHeight="70vh"
      gap={6}
      w="full"
      mb="2.4rem"
      // backgroundImage="url('/smoke.png')"
      // backgroundPosition="top"
      // backgroundRepeat="no-repeat"
    >
      <NextSeo title="UMAIN Mtg Club - Qualifiers" />
      <Flex
        display="flex"
        flexDir="column"
        alignItems="center"
        mt="5.6rem"
        mx="1.5rem"
        gap="1.2rem"
      >
        {!Desktop && (
          <Flex flexDir="column" gap="1.2rem" mr="3.2rem">
            <Text
              as="h2"
              textTransform="uppercase"
              fontSize="3.2rem"
              lineHeight="3.8rem"
              fontWeight={900}
            >
              Join and qualify
            </Text>
            <Text fontSize="1.6rem" fontWeight={400} lineHeight="2rem">
              The top 8 players at the end of the event will receive invitations
              to compete in the Company Clash Championship held in the second
              quarter of 2023.
            </Text>
          </Flex>
        )}
        <SignUpForm />
      </Flex>
    </Flex>
  );
};

export default Home;
