import { Flex, useMediaQuery } from "@chakra-ui/react";
import { SkipNavContent } from "@chakra-ui/skip-nav";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [Desktop] = useMediaQuery("(min-width: 920px)");

  return (
    <Flex
      flexDirection="column"
      maxWidth={1280}
      // backgroundImage="linear-gradient(169.49deg, rgba(0, 0, 0, 0) 8%, #000000 19%), url('/background_full.png')"
      // backgroundPosition="top"
      // backgroundRepeat="no-repeat"
    >
      <Flex flexDirection={Desktop ? "row" : "column"}>
        <Header />
        <SkipNavContent as="main">{children}</SkipNavContent>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;
