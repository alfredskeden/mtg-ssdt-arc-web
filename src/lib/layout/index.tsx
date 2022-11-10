import { Box } from "@chakra-ui/react";
import { SkipNavContent } from "@chakra-ui/skip-nav";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={1280} transition="0.5s ease-out">
      <Box ml="8" mr="8">
        <Header />
        <SkipNavContent as="main">{children}</SkipNavContent>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
