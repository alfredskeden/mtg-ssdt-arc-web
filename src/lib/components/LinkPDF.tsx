import { Text, Link as LinkChakra } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineFilePdf } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";

const LinkPDF = ({ href, label }: { href: string; label: string }) => {
  return (
    <Text display="flex" gap={2} mt="2">
      <Link href={href} passHref>
        <LinkChakra
          isExternal
          display="flex"
          alignItems="center"
          gap={2}
          textDecoration="underline"
        >
          {label}
          <GoLinkExternal />
          <AiOutlineFilePdf />
        </LinkChakra>
      </Link>
    </Text>
  );
};

export default LinkPDF;
