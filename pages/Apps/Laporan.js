import { Flex, Box, Text, Icon, Button } from "@chakra-ui/react";
import Navbar from "@/Component/Navbar";
import DatePicker from "@/Component/DatePicker";
import Rekap from "@/Component/Rekapitulas";
import ButtonCetak from "@/Component/ButtonCetak";
import TableAnt from "@/Component/TableAnt";

function Laporan() {
  return (
    <>
      <Flex bg="#F0F6F9">
        <Navbar />
        <Box w="100%" overflow="hidden">
          <Flex direction="column" overflowY="auto" height="100vh">
            <Flex py={"40px"} px={"30px"} direction={"column"} gap={"40px"}>
              <Text
                fontSize={(null, "12px", "14px", "16px", "24px")}
                fontWeight={"medium"}
                color={"#333333"}>
                Laporan
              </Text>
              <Flex gap={"30px"}>
                <DatePicker />
                <ButtonCetak />
              </Flex>
              <Rekap />
              <TableAnt />
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default Laporan;
