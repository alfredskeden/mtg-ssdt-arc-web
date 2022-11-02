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
import { AiOutlineArrowDown } from "react-icons/ai";

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
        <Flex
          alignItems="center"
          gap={2}
          justifyContent={["center", "center", "start"]}
        >
          <AiOutlineArrowDown />
          <u>{header}</u>
          <AiOutlineArrowDown />
        </Flex>
      </Heading>
      <Box mt="2">{children}</Box>
    </Box>
  );
};

const Information = () => {
  return (
    <Flex mt="4" mb="8" flexDirection="column" gap={4}>
      <InfoSections header="Information">
        <Flex direction="column" gap={4}>
          <Flex direction="column" mt={2}>
            <Heading as="h3" size="md">
              <u>Location</u>
            </Heading>
            <Text>
              Mäster Samuelsgatan 56, Stockholm. When you entered the building
              take the elevator to the RIGHT, floor 5. If there is any confusion
              or you having trouble getting in, call any of the listed
              organisers.
            </Text>
          </Flex>
          <Flex direction="column" mt={2}>
            <Heading as="h3" size="md">
              <u>Entry fee</u>
            </Heading>
            <Text>300 sek</Text>
            <Text>
              <i>* You will get 6 draft boosters. Food and drinks.</i>
            </Text>
          </Flex>
          <Flex direction="column">
            <Heading as="h3" size="md">
              <u>Time</u>
            </Heading>
            <b>Date: 19/11 at ARC.</b>
          </Flex>
          <Flex direction="column">
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
          </Flex>
          <Flex>
            <Text>
              <i>10 minutes changeover between each game.</i>
            </Text>
          </Flex>
          <Flex direction="column">
            <Text>
              <b>50</b> min Swiss round 1
            </Text>
            <Text>
              <b>50</b> min Swiss round 2
            </Text>
            <Text>
              <b>50</b> min Swiss round 3
            </Text>
          </Flex>
          <Flex>
            <Text>
              <b>17:30</b> Food. (Pizzas and beer, will vegan alternatives)
            </Text>
          </Flex>
          <Flex direction="column">
            <Text>
              <b>50</b> min Semi finals
            </Text>
            <Text>
              <b>50</b> min 3’rd Place Game
            </Text>
            <Text>
              <b>50</b> min <b>FINALS</b>
            </Text>
          </Flex>
          <Flex direction="column" mt={2}>
            <Heading as="h3" size="md">
              <u>Formats</u>
            </Heading>
            <Text>
              The formats for the UMAIN Super Sealed Magic Championship is
              Brother’s War Sealed Draft Boosters.
            </Text>
          </Flex>
          <Flex direction="column" mt={2}>
            <Heading as="h3" size="md">
              <u>Deck submission</u>
            </Heading>
            <Text>
              Players must have a deck ready no later than exactly when
              game-time starts (14:00). Failure to do so will mean either play
              with what you have at the time, or concede. No changes except for
              side-boarding are allowed to a player’s deck past the deadline.
            </Text>
          </Flex>
          <Flex direction="column" mt={2}>
            <Heading as="h3" size="md">
              <u>Tournament Structure</u>
            </Heading>
            <Flex direction="column" gap={4}>
              <Text>
                The event will be divided into two (2) parts, first a Swiss
                style tournament in three 50 rounds, each round being a beat of
                three.
              </Text>
              <Text>
                The second part will be a single elimination bracket for the
                four highest scoring players from the Swiss style tournament.
              </Text>
              <Text>The Finals will be single elimination best of three.</Text>
              <Text>
                All rounds of competition and scores must be registered on the
                Magic companion app.
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
              <Text>
                <b>
                  A player has the right to concede and leave the tournament at
                  any time.
                </b>
              </Text>
            </Flex>
          </Flex>
          <Flex direction="column">
            <Heading as="h3" size="md">
              <u>Outside Assistance</u>
            </Heading>
            <Text>
              During matches, players may not seek play advice from spectators
              and spectators may not give play advice to players. Reports of
              players receiving outside assistance will be investigated and
              penalties will be assigned, up to and including disqualification.
              Players who receive unsolicited outside assistance from another
              player or spectator are expected to report the incident to
              tournament officials and submit any supporting evidence of attempt
              to provide outside assistance.
            </Text>
          </Flex>
          <Flex direction="column">
            <Heading as="h3" size="md">
              <u>Disclaimer</u>
            </Heading>
            <Text>
              UMAIN and/or the event organisers reserves the right, at its sole
              discretion, to suspend, modify, and change this document or the
              program it supports at any time and for any reason without notice.
            </Text>
          </Flex>
          <Flex direction="column" gap={4} mb={4}>
            <Heading as="h3" size="md">
              <u>Organizers</u>
            </Heading>
            <Flex direction="column">
              <Heading as="h4" size="sm">
                General event info
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
            </Flex>
            <Flex direction="column">
              <Heading as="h4" size="sm">
                Tournament specific info
              </Heading>
              <Text>Dante Cosentino</Text>
            </Flex>
            <Flex direction="column">
              <Heading as="h4" size="sm">
                GDPR info
              </Heading>
              <Text>Nellie Stenman</Text>
            </Flex>
          </Flex>
        </Flex>
      </InfoSections>
      <InfoSections header="Important Links">
        <LinkPDF href="/SealedTournament_Info.pdf" label="Information" />
        <LinkPDF href="/Rules.pdf" label="Rules" />
        <LinkPDF href="/BuildADeck.pdf" label="Build a Deck" />
      </InfoSections>
    </Flex>
  );
};

export default Information;
