import { Flex } from "@chakra-ui/react";
import Image from "next/image";

const Footer = () => {
  return (
    <Flex
      as="footer"
      flexDirection="column"
      align="center"
      mt="auto"
      p="4.5rem"
    >
      <Flex flexDirection="column" align="center" gap="3.3rem">
        <Image
          src="/arc_mtg_Logo.png"
          alt="ARC MTG Club logo"
          width={84}
          height={138}
          priority
        />
        <Image
          src="/umain_logo.png"
          alt="UMAIN white logo"
          width={112}
          height={20}
        />
      </Flex>
    </Flex>
  );
};

export default Footer;
