import { Heading } from "@chakra-ui/react";

const FullInfo = () => {
  return (
    <Heading as="h2" size="xl">
      All spots has been taken.
      <br />
      If you want to be on the reserve list please contact
      <br />
      <a href="mail:robin.ellingsen@umain.com">
        <u>robin.ellingsen@umain.com</u>
      </a>{" "}
      <br />
      or
      <br />
      <a href="mail:alfred.skedeback@umain.com">
        <u>alfred.skedeback@umain.com</u>
      </a>
    </Heading>
  );
};

export default FullInfo;
