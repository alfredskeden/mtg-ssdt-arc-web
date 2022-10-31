import { Flex, Heading, Link as LinkChakra } from "@chakra-ui/react";
import { SkipNavLink } from "@chakra-ui/skip-nav";
import Link from "next/link";

const hoverStyle = { _hover: { textDecoration: "underline" } };

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" mb="8">
      <SkipNavLink>Skip to content</SkipNavLink>
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
