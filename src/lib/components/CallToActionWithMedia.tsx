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
          src="/MTGWOE_EN_Bstr_Drft_01_02.png"
          alt="Wilds of Eldraine booster"
          width="225"
          height="403"
          priority
          style={{
            transform:
              "perspective(400px) rotate3d(1, -1, 0, calc(var(--i, 1) * 8deg))",
          }}
        />
      </Link>
      <Box display="flex" flexDir="column" gap={4} textAlign="center" mt="4">
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
