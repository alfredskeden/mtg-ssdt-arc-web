import { Container, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function CallToActionWithMedia() {
  return (
    <Container
      maxW="xl"
      display="flex"
      flexDir="column"
      alignItems="center"
      pt="4rem"
    >
      <Link href="/" passHref>
        <Image
          src="/header_image.png"
          alt="Company clash championship qualifiers image"
          width="370"
          height="300"
        />
      </Link>
      <Box display="flex" flexDir="column" gap={4} textAlign="center" mt="-4">
        <Text
          as="h1"
          fontWeight={700}
          fontSize="1.2rem"
          textTransform="uppercase"
        >
          Powered by
        </Text>
        <Image
          src="/umain_logo.png"
          alt="logo of umain"
          width="132"
          height="24"
        />
      </Box>
    </Container>
  );
}
