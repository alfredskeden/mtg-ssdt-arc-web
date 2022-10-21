import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Image from "next/future/image";

const Home = () => {
  return (
    <Flex direction="column" minHeight="70vh" gap={4} mb={8} w="full">
      <NextSeo title="Home" />
      <Image
        src="/EventPoster_Draft1.jpg"
        alt="Poster for the event. Saying: Magic the Gathering. Date: 11/19/2022. Super Sealed Draft Tournament. Hosted by ARC and all its companies!"
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </Flex>
  );
};

export default Home;
