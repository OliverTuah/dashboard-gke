import React from "react";
import FlexibleShape from "@/Component/FlexibleShape";
import UpdatePenjualan from "@/Component/UpdatePenjualan";
import ProductRecap from "@/Component/ProductRecap";
import { Flex, Text, Box } from "@chakra-ui/react";
import { IoShirtOutline } from "react-icons/io5";
import { PiHoodieLight, PiBaseballCap } from "react-icons/Pi";
import LineCharts from "@/Component/LineCharts";
import DataTable from "@/Component/DataTable";

function Dashboard() {
  return (
    <>
      <Flex>
        <Flex mt={"50px"} direction={"column"}>
          <Box w="100%" overflow="hidden">
            <Flex
              gap={"20px"}
              direction="column"
              overflowY="auto"
              height="905px">
              <Text
                fontSize={"24px"}
                fontWeight={"medium"}
                textColor={"#333333"}>
                Dashboard
              </Text>
              <Flex direction={"row"} gap={"20px"}>
                <FlexibleShape
                  w="353px"
                  h="124px"
                  px="20px"
                  py="20px"
                  direc="row"
                  color="white"
                  shadow="0px 0px 10px #4147D520"
                  round="12px"
                  content={
                    <UpdatePenjualan
                      text1="Total Sales"
                      text2="Rp10.000"
                      text3="+5% compared to last month"
                      colorMain="#219653"
                    />
                  }
                />
                <FlexibleShape
                  w="353px"
                  h="124px"
                  px="20px"
                  py="20px"
                  direc="row"
                  color="white"
                  shadow="0px 0px 10px #4147D520"
                  round="12px"
                  content={
                    <UpdatePenjualan
                      text1="Average Order Value"
                      text2="Rp150.000"
                      text3="-2% compared to last month"
                      colorMain="#219653"
                    />
                  }
                />
                <FlexibleShape
                  w="353px"
                  h="124px"
                  px="20px"
                  py="20px"
                  direc="row"
                  color="white"
                  shadow="0px 0px 10px #4147D520"
                  round="12px"
                  content={
                    <UpdatePenjualan
                      text1="Conversion Rate"
                      text2="Rp20.000"
                      text3="+1% compared to last month"
                      colorMain="#333333"
                    />
                  }
                />
              </Flex>
              <Flex direction={"row"} gap={"20px"} w="1100px">
                <FlexibleShape
                  w="fit-content"
                  h="full"
                  px="20px"
                  py="20px"
                  direc="column"
                  color="white"
                  shadow="0px 0px 10px #4147D520"
                  round="12px"
                  gap="20px"
                  content={
                    <>
                      <Text
                        fontSize="16px"
                        fontWeight="Bold"
                        textColor="#333333">
                        Most Product View
                      </Text>
                      <ProductRecap
                        BgColor="#EB575710"
                        IconColor="#EB5757"
                        SrcIcon={IoShirtOutline}
                        TextProduct="T-Shirt GKE LOVE U"
                        TextType="T-Shirt"
                        JumlahProduct="100pcs"
                      />
                      <ProductRecap
                        BgColor="#F2C94C10"
                        IconColor="#F2C94C"
                        SrcIcon={PiHoodieLight}
                        TextProduct="Hoodie Salt & Joy"
                        TextType="Hoodie"
                        JumlahProduct="100pcs"
                      />
                      <ProductRecap
                        BgColor="#2F80ED10"
                        IconColor="#2F80ED"
                        SrcIcon={PiBaseballCap}
                        TextProduct="Caps Jesus Good"
                        TextType="Caps"
                        JumlahProduct="100pcs"
                      />
                      <ProductRecap
                        BgColor="#EB575710"
                        IconColor="#EB5757"
                        SrcIcon={IoShirtOutline}
                        TextProduct="T-Shirt GKE LOVE U"
                        TextType="T-Shirt"
                        JumlahProduct="100pcs"
                      />
                      <ProductRecap
                        BgColor="#F2C94C10"
                        IconColor="#F2C94C"
                        SrcIcon={PiHoodieLight}
                        TextProduct="Hoodie Salt & Joy"
                        TextType="Hoodie"
                        JumlahProduct="100pcs"
                      />
                    </>
                  }
                />
                <FlexibleShape
                  w="full"
                  h="fit-content"
                  px="20px"
                  py="20px"
                  direc="column"
                  color="white"
                  shadow="0px 0px 10px #4147D520"
                  round="12px"
                  gap="20px"
                  content={
                    <>
                      <Text
                        fontSize="16px"
                        fontWeight="Bold"
                        textColor="#333333">
                        Statistic Product
                      </Text>
                      <LineCharts />
                    </>
                  }
                />
              </Flex>
              <DataTable />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default Dashboard;
