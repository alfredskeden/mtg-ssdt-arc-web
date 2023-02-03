import { Box, Flex } from "@chakra-ui/react";
// import axios from "axios";
import { NextSeo } from "next-seo";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

import prisma from "lib/clients/prisma";
import FullInfo from "lib/components/FullInfo";
// import Information from "lib/components/Information";
// import SignUpForm from "lib/components/SignUpForm";
// import type { FormValues } from "pages/api/sign-up";

type Props = {
  full: boolean;
};

const Home = ({ full }: Props) => {
  // const {
  //   handleSubmit,
  //   // register,
  //   reset,
  //   // watch,
  //   // formState: { errors, isSubmitting, isValid },
  // } = useForm<FormValues>({ mode: "onBlur" });
  // const toast = useToast();
  // const [QRCode, setQRCode] = useState<string>();

  // const onSubmit = handleSubmit(async (formData) => {
  //   const response = await axios.post("/api/sign-up", formData);

  //   if (response.data.code === "P2002") {
  //     toast({
  //       title: "Already signed up",
  //       description: "Please contact organizers if you need help.",
  //       status: "warning",
  //       duration: 6000,
  //       isClosable: true,
  //       position: "top",
  //     });
  //     return;
  //   }

  //   if (response.status === 200) {
  //     reset();
  //     setQRCode(undefined);
  //     toast({
  //       title: "Signed up! Nice!",
  //       status: "success",
  //       duration: 6000,
  //       isClosable: true,
  //       position: "top",
  //     });
  //     return;
  //   }

  //   toast({
  //     title: "Sign up failed.",
  //     status: "error",
  //     duration: 9000,
  //     isClosable: true,
  //     position: "top",
  //   });
  // });

  // const generateQRcode = async () => {
  //   const response = await axios.post(
  //     "https://api.swish.nu/qr/v2/prefilled",
  //     {
  //       payee: process.env.NEXT_PUBLIC_PAYMENT_NUMBER,
  //       amount: {
  //         value: Number(process.env.NEXT_PUBLIC_PAYMENT_PRICE),
  //       },
  //       message: {
  //         value: watch("name"),
  //       },
  //       size: 200,
  //     },
  //     {
  //       responseType: "blob",
  //     }
  //   );

  //   setQRCode(URL.createObjectURL(response.data));
  // };

  return (
    <Flex direction="column" minHeight="70vh" gap={6} w="full" mb={24}>
      <NextSeo title="ARC - UMAIN - Super Sealed Tournament 19/11" />
      <Box maxWidth={800} margin="0 auto" w="100%">
        {full && <FullInfo />}
        <span>More information to come</span>
        {/* <Information />
        {!full && (
          <form onSubmit={onSubmit} id="form">
            <Flex flexDirection="column" gap={6}>
              <SignUpForm
                register={register}
                errors={errors}
                isValid={isValid}
                // generateQRcode={generateQRcode}
                watch={watch}
                QRCode={QRCode}
                isSubmitting={isSubmitting}
              />
            </Flex>
          </form>
        )} */}
      </Box>
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
    props: { full: data.length >= 32 }, // will be passed to the page component as props
  };
}

export default Home;
