import { Flex, Text } from "@chakra-ui/react";
import type { User } from "@prisma/client";

import prisma from "lib/clients/prisma";

type Props = {
  data: Array<User>;
};

const Info = ({ data }: Props) => {
  return (
    <Flex direction="column" minHeight="70vh" gap={2} w="full">
      {data.map((user) => {
        return (
          <Text key={user.id}>
            {user.id} - {user.paid.toString()}
          </Text>
        );
      })}
    </Flex>
  );
};

export async function getServerSideProps() {
  const data = await prisma.user.findMany({
    select: {
      id: true,
      paid: true,
    },
  });

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Info;
