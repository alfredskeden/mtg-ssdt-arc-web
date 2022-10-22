import { Box, Text } from "@chakra-ui/react";
import type { User } from "@prisma/client";

import prisma from "lib/clients/prisma";

type Props = {
  data: Array<User>;
};

const Info = ({ data }: Props) => {
  return (
    <Box>
      {data.map((user) => {
        return (
          <Text>
            {user.id} - {user.paid.toString()}
          </Text>
        );
      })}
    </Box>
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
