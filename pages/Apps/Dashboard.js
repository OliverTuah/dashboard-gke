import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Navbar from "@/Component/Navbar";
import DataSaldo from "@/Component/DataSaldo";
import ChartJS from "@/Component/ChartJS";

function Dashboard() {
  return (
    <>
      <Flex bg="#F0F6F9">
        <Navbar />
        <Box w="100%" overflow="hidden">
          <Flex direction="column" overflowY="auto" height="100vh">
            <DataSaldo />
            <ChartJS />
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default Dashboard;
