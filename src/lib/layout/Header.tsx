import { Flex, Text } from "@chakra-ui/react";
import { SkipNavLink } from "@chakra-ui/skip-nav";

import CallToActionWithMedia from "../components/CallToActionWithMedia";

const Header = () => {
  // const [Desktop] = useMediaQuery("(min-width: 920px)");
  return (
    <Flex as="header" align="center" flexDir="column" gap="3.6rem" my="auto">
      <SkipNavLink>Skip to content</SkipNavLink>
      <CallToActionWithMedia />
      <Flex flexDir="column" gap="1.8rem" maxW="42rem" textAlign="center">
        <Text
          as="h2"
          textTransform="uppercase"
          fontSize="3.2rem"
          lineHeight="3.8rem"
          fontWeight={900}
        >
          Draft tournament
        </Text>
        <Text fontSize="1.6rem" fontWeight={600} lineHeight="2rem">
          Signup for the ultimate showdown at the ARC: Magic the Gathering draft
          tournament. Channel, your mana, summon your creatures and cast your
          spells to seize victory and win prizes.
        </Text>
        <Text
          fontSize="2rem"
          fontWeight={600}
          lineHeight="2rem"
          textDecoration="underline"
        >
          NEW DATE
        </Text>
        <Text fontSize="2rem" fontWeight={600} lineHeight="2rem">
          Date: 14 October - Doors open time: 11:30-12:00
        </Text>
        <Text fontSize="2rem" fontWeight={600} lineHeight="2rem">
          Adress: Mäster samuelsgatan 56
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
