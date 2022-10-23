import {
  Heading,
  Flex,
  Box,
  ListItem,
  OrderedList,
  Text,
  Link as LinkChakra,
} from "@chakra-ui/react";
import Link from "next/link";

import LinkPDF from "./LinkPDF";

const InfoSections = ({
  header,
  children,
}: {
  header: string;
  children: React.ReactNode;
}) => {
  return (
    <Box>
      <Heading as="h2" size="lg">
        <u>{header}</u>
      </Heading>
      <Box mt="2">{children}</Box>
    </Box>
  );
};

const Information = () => {
  return (
    <Flex mt="4" mb="8" flexDirection="column" gap={4}>
      <InfoSections header="Information">
        Here goes information about the event
      </InfoSections>
      <InfoSections header="Prices">
        <OrderedList>
          <ListItem>Giftcard* 1400 kr</ListItem>
          <ListItem>Giftcard* 500 kr</ListItem>
          <ListItem>Playmat</ListItem>
        </OrderedList>
        <Text fontSize="xs" mt="4">
          * Giftcards at{" "}
          <Link href="https://alphaspel.se/" passHref>
            <LinkChakra>alphaspel.se</LinkChakra>
          </Link>
        </Text>
      </InfoSections>
      <InfoSections header="Links">
        <LinkPDF href="/Rules.pdf" label="Rules" />
        <LinkPDF href="/BuildADeck.pdf" label="Build a Deck" />
      </InfoSections>
    </Flex>
  );
};

export default Information;
