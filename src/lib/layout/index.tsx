import { Flex, useMediaQuery } from "@chakra-ui/react";
import { SkipNavContent } from "@chakra-ui/skip-nav";
import type { ReactNode } from "react";

import SwishPayment from "lib/components/SwishPayment";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [desktop] = useMediaQuery("(min-width: 920px)");

  // return (
  //   <Flex
  //     flexDirection="column"
  //     sx={{
  //       p: "4rem",
  //     }}
  //   >
  //     <Text fontSize="6xl">Page is updating. Please wait.</Text>
  //     <Text fontSize="6xl">Best Regards MTG Club</Text>
  //     <Footer />
  //   </Flex>
  // );

  return (
    <Flex
      flexDirection="column"
      // backgroundImage="linear-gradient(169.49deg, rgba(0, 0, 0, 0) 8%, #000000 19%), url('/background_full.png')"
      // backgroundPosition="top"
      // backgroundRepeat="no-repeat"
    >
      <Flex
        flexDirection={desktop ? "row" : "column"}
        justifyContent="center"
        gap="3.6rem"
      >
        <Header />
        <SkipNavContent as="main" maxW={420} mx={desktop ? "" : "auto"}>
          {children}
        </SkipNavContent>
      </Flex>
      <SwishPayment />
      <Footer />
    </Flex>
  );
};

export default Layout;
