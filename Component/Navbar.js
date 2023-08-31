import { Inter } from "next/font/google";
import { Button, Icon, Stack, Flex, Box, Text } from "@chakra-ui/react";
import { BiSolidDashboard, BiSolidReport, BiSolidData } from "react-icons/bi";
import { FaCalculator } from "react-icons/fa";
import { HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <>
      <Flex
        bg={"white"}
        direction={"column"}
        width={(null, null, "50px", "70px", "200px")}
        height={(null, null, "50vh", "70vh", "100vh")}
        align={"center"}
        px={"20px"}
        py={"50px"}
        color={"rgba(255, 255, 255, 1)"}
        boxShadow={"0 2px 5px #5B47BC30"}
        position={"sticky"}>
        <Flex flex={1} direction={"column"} gap={"50px"}>
          <Box
            boxSize="76px"
            display="flex"
            alignSelf="center"
            justifyItems="center">
            <Image src="\Logo GKE.png" alt="Logo GKE" />
          </Box>
          <Flex direction={"column"} h={"full"} justify={"space-between"}>
            <Stack spacing={"20px"}>
              <Button
                _hover={{
                  color: "#21965333",
                  variant: "solid",
                  textColor: "rgba(33, 150, 83, 1)",
                  fontWeight: "Bold",
                }}
                color={"#FFFFFF"}
                variant="solid"
                textColor={"#828282"}
                width={"164px"}
                height={"44px"}
                px={"10px"}
                py={"20px"}>
                <Flex ms="20px" me="20px" mt="10px" mb="10px" w="full">
                  <HStack width="full" spacing={"15px"}>
                    <Icon as={BiSolidDashboard} boxSize={"24px"} />
                    <Text
                      align={"left"}
                      w={"90px"}
                      fontSize={"16px"}
                      fontWeight={"Regular"}>
                      Dashboard
                    </Text>
                  </HStack>
                </Flex>
              </Button>
              <Button
                _hover={{
                  color: "#21965320",
                  variant: "solid",
                  textColor: "rgba(33, 150, 83, 1)",
                  fontWeight: "Bold",
                }}
                color={"#FFFFFF"}
                variant="solid"
                textColor={"#828282"}
                width={"164px"}
                height={"44px"}
                px={"10px"}
                py={"20px"}>
                <Flex ms="20px" me="20px" mt="10px" mb="10px" w="full">
                  <HStack width="full" spacing={"15px"}>
                    <Icon as={BiSolidReport} boxSize={"24px"} />
                    <Text
                      align={"left"}
                      w={"90px"}
                      fontSize={"16px"}
                      fontWeight={"Regular"}>
                      Laporan
                    </Text>
                  </HStack>
                </Flex>
              </Button>
              <Button
                _hover={{
                  color: "#21965320",
                  variant: "solid",
                  textColor: "rgba(33, 150, 83, 1)",
                  fontWeight: "Bold",
                }}
                color={"#FFFFFF"}
                variant="solid"
                textColor={"#828282"}
                width={"164px"}
                height={"44px"}>
                <Flex ms="20px" me="20px" mt="10px" mb="10px" w="full">
                  <HStack width="full" spacing={"15px"}>
                    <Icon as={FaCalculator} boxSize={"20px"} />
                    <Text
                      align={"left"}
                      w={"90px"}
                      fontSize={"16px"}
                      fontWeight={"Regular"}>
                      Keuangan
                    </Text>
                  </HStack>
                </Flex>
              </Button>
              <Button
                _hover={{
                  color: "#21965320",
                  variant: "solid",
                  textColor: "rgba(33, 150, 83, 1)",
                  fontWeight: "Bold",
                }}
                color={"#FFFFFF"}
                variant="solid"
                textColor={"#828282"}
                width={"164px"}
                height={"44px"}>
                <Flex ms="20px" me="20px" mt="10px" mb="10px" w="full">
                  <HStack width="full" spacing={"15px"}>
                    <Icon as={BiSolidData} boxSize={"24px"} />
                    <Text
                      align={"left"}
                      w={"90px"}
                      fontSize={"16px"}
                      fontWeight={"Regular"}>
                      Data Jemaat
                    </Text>
                  </HStack>
                </Flex>
              </Button>
            </Stack>
            <Stack boxSize="50px" alignSelf="center">
              <Avatar size={"55px"} name="Sam" src="\avatar profile.png" />
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
