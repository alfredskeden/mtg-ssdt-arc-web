import {
  Button,
  Flex,
  Text,
  Image,
  useClipboard,
  useMediaQuery,
} from "@chakra-ui/react";
import { FiCopy } from "react-icons/fi";

const SwishPayment = () => {
  const [Desktop] = useMediaQuery("(min-width: 920px)");
  const { onCopy, setValue, hasCopied } = useClipboard("");

  return (
    <Flex flexDir="column" mt="2.4rem" gap="2.4rem">
      <Text
        textAlign="center"
        fontSize="1.6rem"
        fontWeight={700}
        textTransform="uppercase"
      >
        Do not forget to make the payment ↓
      </Text>
      <Flex
        flexDirection="column"
        alignItems="center"
        background="rgba(0, 0, 0, 0.2)"
        border="1px solid rgba(255, 255, 255, 0.1);"
        backdropFilter="blur(10px)"
        py="3.2rem"
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          gap="1.6rem"
          fontSize="1.6rem"
          fontWeight={700}
          lineHeight="1.9rem"
        >
          <Image
            src="/swishlogo.png"
            alt="The swish logo"
            width="79"
            height="24"
          />

          <Text>Pay with swish.</Text>
          <Flex flexDirection="column">
            <Text>Alfred Skedebäck</Text>
            <Text>150:-</Text>
          </Flex>
          <Button
            height="5.6rem"
            fontSize="1.6rem"
            gap="1.6rem"
            rounded="lg"
            px="1.6rem"
            onClick={() => {
              onCopy();
              setValue("+46738104761");
            }}
          >
            <Text>+46738104761</Text>{" "}
            <FiCopy color={hasCopied ? "green" : ""} />
          </Button>
          {Desktop && (
            <Image
              src="/qr_swish_screenshot.png"
              alt="QR Swishkod för betalning"
              width="240"
              height="286"
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SwishPayment;
