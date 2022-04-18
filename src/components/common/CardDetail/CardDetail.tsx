import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Select,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import React, { useState } from "react";
import "./CardDetail.css";
import { StarIcon } from "@chakra-ui/icons";
import { FiShoppingCart } from "react-icons/fi";
import { Avatar } from "@chakra-ui/react";
import { FavouriteButton } from "../Favourite";

type CardProps = {
  name?: string;
  description?: string;
  count?: number;
  sizeCount?: {
    xs: number;
    s: number;
    md: number;
    l: number;
    xl: number;
  };
  categoryName?: string;
  ingredients?: string[];
  images?: string[];
  price?: number;
  discount?: number;
  offer?: boolean;
  reviews?: {
    userName: string;
    comment: string;
    rate: number;
  }[];
  color?: string;
  buttonName: string;
};

export default function Simple({
  name = "Watch ",
  description,
  count = 0,
  sizeCount = {
    xs: 0,
    s: 0,
    md: 0,
    l: 0,
    xl: 0,
  },
  categoryName,
  ingredients,
  images = ["mm"],
  price = 0,
  discount = 0,
  offer = true,
  reviews,
  color,
  buttonName,
}: CardProps) {
  function countLimit(count: number) {
    let countList = [];
    for (let i = 0; i < count; i++) {
      console.log(i);
      countList.push(<option>{i + 1}</option>);

    }
    return countList;
  }
  const [userCount, setUserCount] = useState(0);
  const [userSize, setUserSize] = useState("");

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={
              // images[0]
              "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080"
            }
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {name}
            </Heading>
            <Text
              color={useColorModeValue("gray.500", "gray.400")}
              fontSize={"2xl"}
              fontWeight={"300"}
              textAlign={"left"}
            >
              {categoryName}
            </Text>
            <Box display="flex" alignItems="baseline" mt={0}>
              {offer && (
                <Badge borderRadius="full" colorScheme="teal" marginTop="0">
                  offer
                </Badge>
              )}
            </Box>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
              className={discount > 0 ? "discout" : " "}
            >
              ${price} USD
            </Text>
            {discount > 0 && (
              <Text color={"gray.900"} fontWeight={300} fontSize={"xl"}>
                {" "}
                ${price - (price * discount) / 100} USD
              </Text>
            )}
          </Box>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <Text fontSize={"lg"}>{description}</Text>

            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {ingredients?.map((ingred) => {
                  return (
                    <List spacing={2}>
                      <ListItem>{ingred}</ListItem>{" "}
                    </List>
                  );
                })}
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>
              <Text
                color={useColorModeValue("black", "white")}
                fontSize={"l"}
                fontWeight={"300"}
                textAlign={"left"}
                display="inline-block"
                mr={4}
              >
                Color:
              </Text>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"s"}
                fontWeight={"300"}
                textAlign={"left"}
                display="inline-block"
              >
                {color}
              </Text>
              <Text
                color={useColorModeValue("black", "white")}
                fontSize={"l"}
                fontWeight={"300"}
                textAlign={"left"}
              >
                Size
              </Text>
              <List spacing={2}>
                <ListItem>
                  {sizeCount?.xl > 0 && (
                    // eslint-disable-next-line no-sequences
                    <Button ml={1} onClick={() => [setUserCount(sizeCount.xl), setUserSize("XL")]}>
                      XL
                    </Button>
                  )}
                  {sizeCount?.l > 0 && (
                    <Button ml={1} onClick={() =>[ setUserCount(sizeCount.l), setUserSize("L")]}>
                      L
                    </Button>
                  )}
                  {sizeCount?.md > 0 && (
                    <Button ml={1} onClick={() =>[ setUserCount(sizeCount.md), setUserSize("md")]}>
                      md
                    </Button>
                  )}
                  {sizeCount?.s > 0 && (
                    <Button ml={1} onClick={() =>[ setUserCount(sizeCount.s), setUserSize("s")]}>
                      S
                    </Button>
                  )}
                  {sizeCount?.xs > 0 && (
                    <Button ml={1} onClick={() =>[ setUserCount(sizeCount.xs), setUserSize("xs")]}>
                      XS
                    </Button>
                  )}
                </ListItem>
                <Text
                  color={useColorModeValue("black", "white")}
                  fontSize={"l"}
                  fontWeight={"300"}
                  textAlign={"left"}
                  display="inline-block"
                  mr={4}
                >
                  Count
                </Text>
                <Select
                  onChange={(event) => {
                    count = Number(event.target.value);
                    price = count * price;
                  }}
                  width="20%"
                >
                  {countLimit(userCount)}
                </Select>
              </List>
            </Box>
          </Stack>
          <FavouriteButton
            position="absolute"
            top="4"
            right="4"
            aria-label={`Add ${name} to your favourites`}
          />
          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={() =>
              console.log(
                images[0],
                name,
                categoryName,
                count,
                price,
                color,
                userSize
              )
            }
          >
            <chakra.a href={"#"} display={"flex"}>
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
            </chakra.a>{" "}
            {buttonName}
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <List>
          <ListItem>
            <Text
              as={"span"}
              fontSize={{ base: "16px", lg: "18px" }}
              color={useColorModeValue("yellow.500", "yellow.300")}
              fontWeight={"500"}
              textTransform={"uppercase"}
              mb={"4"}
            >
              Reviews:
            </Text>{" "}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {reviews?.length} reviews
            </Box>
            {reviews?.map((review) => {
              return (
                <List spacing={2} mt={4}>
                  <Avatar
                    src="https://bit.ly/broken-link"
                    size="sm"
                    display="inline-block"
                  />
                  <Text fontWeight={"bold"} display="inline-block" ml="2">
                    {review?.userName}
                  </Text>
                  <List spacing={2}>
                    <ListItem ml="10">
                      {Array(5)
                        .fill("")
                        .map((_, i) => (
                          <StarIcon
                            key={i}
                            color={i > review?.rate ? "gray.300" : "blue.400"}
                          />
                        ))}
                    </ListItem>
                  </List>
                  <ListItem margin={10}>{review?.comment}</ListItem>{" "}
                </List>
              );
            })}
          </ListItem>
        </List>
      </SimpleGrid>
    </Container>
  );
}
