import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Banner = ({
  purpose,
  imageUrl,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
}) => (
  <Flex flex="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
      </Text>
      <Text color="grey.700" fontSize="sm" paddingTop="3" paddingBottom="3">
        {desc1}
      </Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={{ linkName }}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home() {
  return (
    <div>
      Deez nutz
      <Banner purpose="RENT A HOME"
              title1="Rental homes for" 
              desc1="Explore Apartments, Villas, homes"
              desc2="and more"
              buttonText="Explore Renting"
              linkName="/search?p"
              />
      <Banner 
              purpose='BUY A HOME'
              title1=' Find, Buy & Own Your'
              title2='Dream Home'
              desc1=' Explore from Apartments, land, builder floors,'
              desc2=' villas and more'
              buttonText='Explore Buying'
              linkName='/search?purpose=for-sale'
              imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
            />
    </div>
  );
}
