import React from "react";
import {
  Flex,
  Box,
  Text,
  Icon,
  Spacer,
  Select,
  HStack,
} from "@chakra-ui/react";

import {
  Chart as Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js/auto";

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  Title,
  Filler
);

import { Doughnut, Line } from "react-chartjs-2";

import { BsWallet2, BsPrinter, BsCash } from "react-icons/Bs";

function Rekap() {
  const OptionDI = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        align: "center",
        display: "true",
      },
    },
    element: {
      arc: {
        weight: 0.5,
        borderwidth: 5,
      },
    },

    Cutout: 150,
  };

  const OptionDO = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        align: "center",
        display: "true",
      },
    },
    element: {
      arc: {
        weight: 0.5,
        borderwidth: 5,
      },
    },

    Cutout: 150,
  };

  const dataDI = {
    labels: ["Inventaris", "Sumbangan", "Kolekte"],
    datasets: [
      {
        label: "Pemasukan",
        data: [20, 40, 20],
        backgroundColor: ["#3366FF", "#FF960C", "#44BDFF"],
        hoverOffset: 4,
      },
    ],
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "May"],
    datasets: [
      {
        label: "Saldo",
        data: [10000, 50000, 1000000, 500000],
        fill: true,
        backgroundColor: "#6C60FF30",
        borderColor: "#6C60FF", //LINE
        tension: "0.4",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        align: "end",
        labels: {
          boxWidth: 20,
          boxHeight: 0,
          font: {
            size: "14px",
            style: "bold",
          },
        },
        display: true,
      },
    },
    elements: {
      point: {
        radius: 4,
        hitRadius: 2,
        pointBackgroundColor: "#FFFF",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
    Tooltip: {
      enabled: true,
    },
  };
  return (
    <>
      <Flex
        bg={"white"}
        h={"fit-content"}
        boxShadow={"0 2px 5px #5B47BC30"}
        rounded={"12px"}
        px={"20px"}
        py={"20px"}
        gap={"20px"}
        align={"center"}>
        <Text fontSize={"18px"} fontWeight={"medium"} color={"#333333"}>
          Rekapitulasi
        </Text>
        <Spacer />
        <Select width={"200px"}>
          <option value="option1">Bulan</option>
          <option value="option2">Minggu</option>
        </Select>
      </Flex>
      <Flex justify={"space-between"}>
        <Flex
          px={"20px"}
          py={"20px"}
          h={"fit-content"}
          bg={"white"}
          rounded={"12px"}
          boxShadow={"0 2px 5px #5B47BC30"}
          direction={"column"}
          gap={"20px"}>
          <Flex direction={"column"} gap={"10px"}>
            <Text
              fontSize={(null, null, "10px", "16px", "18px")}
              textColor={"#828282"}
              fontWeight={"Medium"}
              textAlign={"left"}>
              Saldo
            </Text>
            <Flex align={"center"} gap={"20px"}>
              <Text
                fontSize={(null, null, "10px", "16px", "18px")}
                textColor={"#39434F"}
                fontWeight={"Bold"}
                textAlign={"left"}>
                Rp.100.000.000
              </Text>
              <Box
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
          <Box w={"350px"}>
            <Line data={data} options={options}></Line>
          </Box>
        </Flex>
        <Flex
          px={"20px"}
          py={"20px"}
          h={"fit-content"}
          bg={"white"}
          rounded={"12px"}
          boxShadow={"0 2px 5px #5B47BC30"}
          direction={"column"}
          gap={"30px"}>
          <Flex direction={"column"} gap={"10px"}>
            <Text
              fontSize={(null, null, "10px", "16px", "18px")}
              textColor={"#828282"}
              fontWeight={"Medium"}
              textAlign={"left"}>
              Pemasukan
            </Text>
            <Flex align={"center"} gap={"20px"}>
              <Text
                fontSize={(null, null, "10px", "16px", "18px")}
                textColor={"#39434F"}
                fontWeight={"Bold"}
                textAlign={"left"}>
                Rp.90.000.000
              </Text>
              <Box
                bg={"#21965320"}
                textAlign={"center"}
                px={"10px"}
                py={"10px"}
                fontSize={(null, null, "12px", "14px", "16px")}
                textColor={"#219653"}
                fontWeight={"medium"}
                borderRadius={"12px"}>
                <Text>+10%</Text>
              </Box>
            </Flex>
          </Flex>
          <Box w={"auto"}>
            <Doughnut data={dataDI} options={OptionDI} />
          </Box>
          <Flex direction={"column"} gap={"30px"}>
            <HStack width="full" spacing={"20px"}>
              <Flex
                px={"18px"}
                py={"18px"}
                bg={"#21965320"}
                align={"center"}
                borderRadius={"xl"}>
                <Icon as={BsPrinter} boxSize={"20px"} color={"#219653"} />
              </Flex>
              <Flex direction={"Column"} gap={"5px"}>
                <Text
                  w={"fit-content"}
                  fontSize={"16px"}
                  fontWeight={"medium"}
                  color={"#333333"}>
                  Pemberian Printer
                </Text>
                <Text
                  w={"fit-content"}
                  fontSize={"14px"}
                  fontWeight={"medium"}
                  color={"#828282"}>
                  Inventaris
                </Text>
              </Flex>
              <Spacer />
              <Flex direction={"Column"} alignItems={"end"} gap={"5px"}>
                <Text
                  w={"fit-content"}
                  fontSize={"16px"}
                  fontWeight={"Bold"}
                  color={"#333333"}>
                  +5.000.000
                </Text>
                <Text
                  w={"fit-content"}
                  fontSize={"14px"}
                  fontWeight={"medium"}
                  color={"#828282"}>
                  Kemarin
                </Text>
              </Flex>
            </HStack>
            <Flex w={"full"} h={"auto"} direction={"column"} gap={"20px"}>
              <HStack width="full" spacing={"20px"}>
                <Flex
                  px={"18px"}
                  py={"18px"}
                  bg={"#21965320"}
                  align={"center"}
                  borderRadius={"xl"}>
                  <Icon as={BsWallet2} boxSize={"20px"} color={"#219653"} />
                </Flex>
                <Flex direction={"Column"} gap={"5px"}>
                  <Text
                    w={"fit-content"}
                    fontSize={"16px"}
                    fontWeight={"medium"}
                    color={"#333333"}>
                    Persembahan Minggu
                  </Text>
                  <Text
                    w={"fit-content"}
                    fontSize={"14px"}
                    fontWeight={"medium"}
                    color={"#828282"}>
                    Kolekte
                  </Text>
                </Flex>
                <Spacer />
                <Flex direction={"Column"} alignItems={"end"} gap={"5px"}>
                  <Text
                    w={"fit-content"}
                    fontSize={"16px"}
                    fontWeight={"Bold"}
                    color={"#333333"}>
                    +5.000.000
                  </Text>
                  <Text
                    w={"fit-content"}
                    fontSize={"14px"}
                    fontWeight={"medium"}
                    color={"#828282"}>
                    Kemarin
                  </Text>
                </Flex>
              </HStack>
            </Flex>
            <Flex w={"full"} h={"auto"} direction={"column"} gap={"20px"}>
              <HStack width="full" spacing={"20px"}>
                <Flex
                  px={"18px"}
                  py={"18px"}
                  bg={"#21965320"}
                  align={"center"}
                  borderRadius={"xl"}>
                  <Icon as={BsCash} boxSize={"20px"} color={"#219653"} />
                </Flex>
                <Flex direction={"Column"} gap={"5px"}>
                  <Text
                    w={"fit-content"}
                    fontSize={"16px"}
                    fontWeight={"medium"}
                    color={"#333333"}>
                    Kolekte
                  </Text>
                  <Text
                    w={"fit-content"}
                    fontSize={"14px"}
                    fontWeight={"medium"}
                    color={"#828282"}>
                    Persembahan
                  </Text>
                </Flex>
                <Spacer />
                <Flex direction={"Column"} alignItems={"end"} gap={"5px"}>
                  <Text
                    w={"fit-content"}
                    fontSize={"16px"}
                    fontWeight={"Bold"}
                    color={"#333333"}>
                    +5.000.000
                  </Text>
                  <Text
                    w={"fit-content"}
                    fontSize={"14px"}
                    fontWeight={"medium"}
                    color={"#828282"}>
                    Minggu Lalu
                  </Text>
                </Flex>
              </HStack>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          px={"20px"}
          py={"20px"}
          h={"fit-content"}
          bg={"white"}
          rounded={"12px"}
          boxShadow={"0 2px 5px #5B47BC30"}
          direction={"column"}
          gap={"30px"}>
          <Flex direction={"column"} gap={"10px"}>
            <Text
              fontSize={(null, null, "10px", "16px", "18px")}
              textColor={"#828282"}
              fontWeight={"Medium"}
              textAlign={"left"}>
              Pengeluaran
            </Text>
            <Flex align={"center"} gap={"20px"}>
              <Text
                fontSize={(null, null, "10px", "16px", "18px")}
                textColor={"#39434F"}
                fontWeight={"Bold"}
                textAlign={"left"}>
                Rp.20.000.000
              </Text>
              <Box
                bg={"#EB575720"}
                textAlign={"center"}
                px={"10px"}
                py={"10px"}
                fontSize={(null, null, "12px", "14px", "16px")}
                textColor={"#EB5757"}
                fontWeight={"medium"}
                borderRadius={"12px"}>
                <Text>-10%</Text>
              </Box>
            </Flex>
          </Flex>
          <Box w={"auto"}>
            <Doughnut data={dataDI} options={OptionDO} />
          </Box>
          <Flex direction={"column"} gap={"30px"}>
            <HStack width="full" spacing={"20px"}>
              <Flex
                px={"18px"}
                py={"18px"}
                align={"center"}
                bg={"#EB575720"}
                borderRadius={"xl"}>
                <Icon as={BsPrinter} boxSize={"20px"} color={"#EB5757"} />
              </Flex>
              <Flex direction={"Column"} gap={"5px"}>
                <Text
                  w={"fit-content"}
                  fontSize={"16px"}
                  fontWeight={"medium"}
                  color={"#333333"}>
                  Pemberian Printer
                </Text>
                <Text
                  w={"fit-content"}
                  fontSize={"14px"}
                  fontWeight={"medium"}
                  color={"#828282"}>
                  Inventaris
                </Text>
              </Flex>
              <Spacer />
              <Flex direction={"Column"} alignItems={"end"} gap={"5px"}>
                <Text
                  w={"fit-content"}
                  fontSize={"16px"}
                  fontWeight={"Bold"}
                  color={"#333333"}>
                  +5.000.000
                </Text>
                <Text
                  w={"fit-content"}
                  fontSize={"14px"}
                  fontWeight={"medium"}
                  color={"#828282"}>
                  Kemarin
                </Text>
              </Flex>
            </HStack>
            <Flex w={"full"} h={"auto"} direction={"column"} gap={"20px"}>
              <HStack width="full" spacing={"20px"}>
                <Flex
                  px={"18px"}
                  py={"18px"}
                  bg={"#EB575720"}
                  align={"center"}
                  borderRadius={"xl"}>
                  <Icon as={BsWallet2} boxSize={"20px"} color={"#EB5757"} />
                </Flex>
                <Flex direction={"Column"} gap={"5px"}>
                  <Text
                    w={"fit-content"}
                    fontSize={"16px"}
                    fontWeight={"medium"}
                    color={"#333333"}>
                    Persembahan Minggu
                  </Text>
                  <Text
                    w={"fit-content"}
                    fontSize={"14px"}
                    fontWeight={"medium"}
                    color={"#828282"}>
                    Kolekte
                  </Text>
                </Flex>
                <Spacer />
                <Flex direction={"Column"} alignItems={"end"} gap={"5px"}>
                  <Text
                    w={"fit-content"}
                    fontSize={"16px"}
                    fontWeight={"Bold"}
                    color={"#333333"}>
                    +5.000.000
                  </Text>
                  <Text
                    w={"fit-content"}
                    fontSize={"14px"}
                    fontWeight={"medium"}
                    color={"#828282"}>
                    Kemarin
                  </Text>
                </Flex>
              </HStack>
            </Flex>
            <Flex w={"full"} h={"auto"} direction={"column"} gap={"20px"}>
              <HStack width="full" spacing={"20px"}>
                <Flex
                  px={"18px"}
                  py={"18px"}
                  align={"center"}
                  bg={"#EB575720"}
                  borderRadius={"xl"}>
                  <Icon as={BsCash} boxSize={"20px"} color={"#EB5757"} />
                </Flex>
                <Flex direction={"Column"} gap={"5px"}>
                  <Text
                    w={"fit-content"}
                    fontSize={"16px"}
                    fontWeight={"medium"}
                    color={"#333333"}>
                    Kolekte
                  </Text>
                  <Text
                    w={"fit-content"}
                    fontSize={"14px"}
                    fontWeight={"medium"}
                    color={"#828282"}>
                    Persembahan
                  </Text>
                </Flex>
                <Spacer />
                <Flex direction={"Column"} alignItems={"end"} gap={"5px"}>
                  <Text
                    w={"fit-content"}
                    fontSize={"16px"}
                    fontWeight={"Bold"}
                    color={"#333333"}>
                    +5.000.000
                  </Text>
                  <Text
                    w={"fit-content"}
                    fontSize={"14px"}
                    fontWeight={"medium"}
                    color={"#828282"}>
                    Minggu Lalu
                  </Text>
                </Flex>
              </HStack>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Rekap;
