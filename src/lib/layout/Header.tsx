import { Flex } from "@chakra-ui/react";
import { SkipNavLink } from "@chakra-ui/skip-nav";

import CallToActionWithMedia from "../components/CallToActionWithMedia";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" mb="8">
      <SkipNavLink>Skip to content</SkipNavLink>
      <CallToActionWithMedia />
    </Flex>
  );
};

export default Header;
