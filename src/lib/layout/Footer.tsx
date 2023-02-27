import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

const Footer = () => {
  const [Desktop] = useMediaQuery("(min-width: 920px)");
  return (
    <Flex
      as="footer"
      flexDirection="column"
      align="center"
      mt="auto"
      p="7.5rem"
    >
      {!Desktop && (
        <Flex flexDirection="column" align="center" gap="3.3rem">
          <Image
            src="/umain_frog_logo.png"
            alt="UMAIN MTG Club frog logo"
            width={84}
            height={80}
          />
          <Image
            src="/umain_logo.png"
            alt="UMAIN white logo"
            width={223}
            height={40}
          />
        </Flex>
      )}
      <Text fontWeight={700} fontSize="1.2rem" mt="8.5rem">
        © UMAIN 2023
      </Text>
    </Flex>
  );
};

export default Footer;
