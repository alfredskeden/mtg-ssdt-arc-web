import { Flex, Link as LinkChakra, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center" mt="auto">
      <Text fontSize="sm" color="gray.500">
        {new Date().getFullYear()} -{" "}
        <Link href="https://umain.com/" passHref>
          <LinkChakra isExternal rel="noopener noreferrer">
            Umain
          </LinkChakra>
        </Link>{" "}
        -{" "}
        <Link href="https://arc.inc/" passHref>
          <LinkChakra isExternal rel="noopener noreferrer">
            ARC
          </LinkChakra>
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
