import { Flex, useMediaQuery } from "@chakra-ui/react";
import { SkipNavLink } from "@chakra-ui/skip-nav";

import CallToActionWithMedia from "../components/CallToActionWithMedia";

const Header = () => {
  const [Desktop] = useMediaQuery("(min-width: 920px)");
  return (
    <Flex as="header" width={Desktop ? "70%" : "full"} align="center">
      <SkipNavLink>Skip to content</SkipNavLink>
      <CallToActionWithMedia />
    </Flex>
  );
};

export default Header;
