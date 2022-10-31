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
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      <Box margin="8">
        <Header />
        <SkipNavContent as="main">{children}</SkipNavContent>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
