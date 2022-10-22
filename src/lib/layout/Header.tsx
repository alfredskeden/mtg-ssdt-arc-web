import { Flex, Heading, Link as LinkChakra } from "@chakra-ui/react";
import Link from "next/link";

const hoverStyle = { _hover: { textDecoration: "underline" } };

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" mb="8">
      <Link href="/" passHref>
        <LinkChakra>
          <Heading size="md" sx={hoverStyle}>
            Magic the Gathering - Super Sealed Draft Tournament <br />
            ARC - UMAIN
          </Heading>
        </LinkChakra>
      </Link>
    </Flex>
  );
};

export default Header;
