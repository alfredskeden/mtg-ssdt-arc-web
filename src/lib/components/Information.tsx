import {
  Heading,
  Flex,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Link as LinkChakra,
} from "@chakra-ui/react";
import Link from "next/link";

import LinkPDF from "./LinkPDF";

const Information = () => {
  return (
    <Flex direction="column">
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={2}>
          What?
        </Heading>
        <Text>
          Umain is hosting a sealed event with the new Magic the Gathering set:
          Brother&apos;s War! We welcome enthousiasts to join, play with us and
          get to know each other.
        </Text>
      </Box>
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={2}>
          When?
        </Heading>
        <p>Date: 19/11 at ARC.</p>
      </Box>
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={2}>
          Where?
        </Heading>
        <Text>
          Mäster Samuelsgatan 56, Stockholm. When you entered the building take
          the elevator to the RIGHT, floor 5. If there is any confusion or you
          having trouble getting in, call any of the listed organisers.
        </Text>
      </Box>
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={2}>
          How much?
        </Heading>
        <p>300 SEK. You will get 6 draft boosters. Food and drinks as well.</p>
      </Box>
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={2}>
          Schedule
        </Heading>
        <Text>
          <i>All times except Doors are approximately.</i>
        </Text>
        <Text>
          <b>11:30</b> Doors open!
        </Text>
        <Text>
          <b>12:00</b> Booster handout - Presentation / Rules.
        </Text>
        <Text>
          <b>13:00</b> Deck building
        </Text>
        <Text>
          <b>14:00</b> Tournament Start.
        </Text>
        <Text mt={4} mb={4}>
          <i>10 minutes changeover between each game.</i>
        </Text>
        <Text>
          <b>50</b> min Swiss round 1
        </Text>
        <Text>
          <b>50</b> min Swiss round 2
        </Text>
        <Text>
          <b>50</b> min Swiss round 3
        </Text>
        <Text mt={4} mb={4}>
          <b>17:30</b> Food. (Pizzas and beer, will have vegan alternatives)
        </Text>
        <Text>
          <b>50</b> min Semi finals
        </Text>
        <Text>
          <b>50</b> min 3’rd Place Game
        </Text>
        <Text>
          <b>50</b> min <b>FINALS</b>
        </Text>
      </Box>
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={2}>
          Decks
        </Heading>
        <Text>
          Players must have a deck ready no later than exactly when game-time
          starts (14:00). Failure to do so will mean either play with what you
          have at the time, or concede. No changes except for side-boarding are
          allowed to a player’s deck past the deadline.
        </Text>
      </Box>
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={2}>
          Tournament structure and rules
        </Heading>
        <Text>
          The formats for the UMAIN Super Sealed Magic Championship is Brother’s
          War Sealed Draft Boosters.
        </Text>
        <Text>
          The event will be divided into two (2) parts, first a Swiss style
          tournament in three 50 rounds, each round being a beat of three.
        </Text>
        <Text>
          The second part will be a single elimination bracket for the four
          highest scoring players from the Swiss style tournament.
        </Text>
        <Text>The Finals will be single elimination best of three.</Text>
        <Text>
          All rounds of competition and scores must be registered on the Magic
          companion app.
        </Text>
        <UnorderedList>
          <ListItem>
            <b>Deck build starts</b>
          </ListItem>
          <ListItem>
            <b>Timers are on</b>
          </ListItem>
          <ListItem>
            <b>Matches are best two-out-of-three games</b>
          </ListItem>
        </UnorderedList>
        <Text mt={2}>
          <b>
            A player has the right to concede and leave the tournament at any
            time.
          </b>
        </Text>
      </Box>
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={2}>
          Outside Assistance
        </Heading>
        <Text>
          During matches, players may not seek play advice from spectators and
          spectators may not give play advice to players. Reports of players
          receiving outside assistance will be investigated and penalties will
          be assigned, up to and including disqualification. Players who receive
          unsolicited outside assistance from another player or spectator are
          expected to report the incident to tournament officials and submit any
          supporting evidence of attempt to provide outside assistance.
        </Text>
      </Box>
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={2}>
          Disclaimer
        </Heading>
        <Text>
          UMAIN and/or the event organisers reserves the right, at its sole
          discretion, to suspend, modify, and change this document or the
          program it supports at any time and for any reason without notice.
        </Text>
      </Box>
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={2}>
          Questions?
        </Heading>
        <Heading as="h3" size="md">
          General info
        </Heading>
        <Flex gap={1}>
          <Text>Robin Ellingsen -</Text>
          <Link href="tel:+46702000892" passHref>
            <LinkChakra display="flex">070 200 08 92</LinkChakra>
          </Link>
        </Flex>
        <Flex gap={1}>
          <Text>Alfred Skedebäck - </Text>
          <Link href="tel:+46738104761" passHref>
            <LinkChakra display="flex">073 81 04 761</LinkChakra>
          </Link>
        </Flex>
        <Flex direction="column" mt={2}>
          <Heading as="h3" size="md">
            Tournament specific info
          </Heading>
          <Text>Dante Cosentino</Text>
        </Flex>
        <Flex direction="column" mt={2}>
          <Heading as="h3" size="md">
            GDPR info
          </Heading>
          <Text>Nellie Stenman</Text>
        </Flex>
      </Box>
      <Box mb={8}>
        <Heading as="h2" size="lg">
          Important links
        </Heading>
        <LinkPDF href="/SealedTournament_Info.pdf" label="Information" />
        <LinkPDF href="/Rules.pdf" label="Rules" />
        <LinkPDF href="/BuildADeck.pdf" label="Build a Deck" />
      </Box>
    </Flex>
  );
};

export default Information;
