import { Box, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";

function DataSaldo() {
  return (
    <>
      <Flex w={"90vw"}>
        <Flex direction={"column"} gap={"50px"}>
          <Text
            mx={"40px"}
            mt={"30px"}
            fontSize={"24px"}
            textColor={"#333333"}
            fontWeight={"medium"}>
            Dashboard
          </Text>
          <Wrap mx={"40px"} spacing={"50px"}>
            <WrapItem
              width={(null, null, "30%", "50%", "250px")}
              height={(null, null, "30%", "50%", "130px")}
              bg={"white"}
              px={"20px"}
              py={"20px"}
              shadow={"0px 5px 27px #5B47BC30 "}
              rounded={"12px"}>
              <Flex direction={"column"} gap={"20px"}>
                <Text
                  fontSize={(null, null, "12px", "14px", "16px")}
                  textColor={"#828282"}
                  fontWeight={"medium"}>
                  Saldo
                </Text>
                <Text
                  fontSize={(null, null, "14px", "16px", "20px")}
                  textColor={"#4F4F4F"}
                  fontWeight={"Bold"}>
                  Rp100.000.000
                </Text>
              </Flex>
            </WrapItem>
            <WrapItem
              w={(null, null, "30%", "50%", "320px")}
              h={"auto"}
              bg={"white"}
              px={"20px"}
              py={"20px"}
              shadow={"0px 5px 27px #5B47BC30 "}
              rounded={"12px"}>
              <Flex direction={"column"} gap={"20px"}>
                <Text
                  fontSize={(null, null, "12px", "14px", "16px")}
                  textColor={"#828282"}
                  fontWeight={"medium"}>
                  Pemasukan
                </Text>
                <Text
                  fontSize={(null, null, "14px", "16px", "20px")}
                  textColor={"#4F4F4F"}
                  fontWeight={"Bold"}>
                  Rp10.000.000
                </Text>
                <Flex align={"center"} gap={"20px"}>
                  <Text
                    fontSize={(null, null, "12px", "14px", "16px")}
                    textColor={"#828282"}
                    fontWeight={"medium"}>
                    Pemasukan minggu ini
                  </Text>
                  <Box
                    width={"auto"}
                    height={"auto"}
                    bg={"#21965320"}
                    textAlign={"center"}
                    px={"10px"}
                    py={"10px"}
                    fontSize={(null, null, "12px", "14px", "16px")}
                    textColor={"#219653"}
                    fontWeight={"medium"}
                    borderRadius={"12px"}>
                    <Text>+18%</Text>
                  </Box>
                </Flex>
              </Flex>
            </WrapItem>
            <WrapItem
              w={(null, null, "30%", "50%", "320px")}
              h={"auto"}
              bg={"white"}
              px={"20px"}
              py={"20px"}
              shadow={"0px 5px 27px #5B47BC30 "}
              rounded={"12px"}>
              <Flex direction={"column"} gap={"20px"}>
                <Text
                  fontSize={(null, null, "12px", "14px", "16px")}
                  textColor={"#828282"}
                  fontWeight={"medium"}>
                  Pengeluaran
                </Text>
                <Text
                  fontSize={(null, null, "14px", "16px", "20px")}
                  textColor={"#4F4F4F"}
                  fontWeight={"Bold"}>
                  Rp5.000.000
                </Text>
                <Flex align={"center"} gap={"20px"}>
                  <Text
                    fontSize={(null, null, "12px", "14px", "16px")}
                    textColor={"#828282"}
                    fontWeight={"medium"}>
                    Pengeluaran minggu ini
                  </Text>
                  <Box
                    width={"auto"}
                    height={"auto"}
                    bg={"#EB575720"}
                    textAlign={"center"}
                    px={"10px"}
                    py={"10px"}
                    fontSize={(null, null, "12px", "14px", "16px")}
                    textColor={"#EB5757"}
                    fontWeight={"medium"}
                    borderRadius={"12px"}>
                    <Text>-18%</Text>
                  </Box>
                </Flex>
              </Flex>
            </WrapItem>
          </Wrap>
        </Flex>
      </Flex>
    </>
  );
}

export default DataSaldo;
