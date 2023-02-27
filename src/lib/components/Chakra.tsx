import { ChakraProvider } from "@chakra-ui/react";
import type { ReactNode } from "react";

import customTheme from "lib/styles/theme";

type Props = {
  children: ReactNode;
};

export const Chakra = ({ children }: Props) => {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
};
