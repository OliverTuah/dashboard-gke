import { Box, Flex, Text, Select, Spacer } from "@chakra-ui/react";
import { BsPrinter, BsCash } from "react-icons/Bs";
import { HStack, Icon } from "@chakra-ui/react";

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

import { Line, Doughnut } from "react-chartjs-2";

function ChartJS() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "May"],
    datasets: [
      {
        label: "Pemasukan",
        data: [20, 40, 20, 50],
        backgroundColor: "transparent",
        borderColor: "#6C60FF", //LINE
        tension: "0.4",
      },
      {
        label: "Pengeluaran",
        data: [50, 20, 30, 10],
        backgroundColor: "transparent",
        borderColor: "#CE2A96", //Line
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
          color: "#333333",
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
        radius: 0,
        hitRadius: 0,
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

  const dataDO = {
    labels: ["Inventaris", "Sumbangan", "Kolekte"],
    datasets: [
      {
        label: "Pemasukan",
        data: [20, 40, 20],
        backgroundColor: ["#3366FF", "#4FE03C", "#44BDFF"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Flex w={"70vw"} mx={"50px"} my={"50px"} direction={"column"} gap={"50px"}>
      <Flex
        bg={"#ffff"}
        borderRadius={"xl"}
        direction="column"
        w={"inherit"}
        h={"50vh"}
        shadow={"0px 5px 27px #5B47BC30 "}>
        <Flex py={"30px"} px={"30px"} align={"center"}>
          <Text fontSize={"18px"} textColor={"#4F4F4F"} fontWeight={"Bold"}>
            RIWAYAT KEUANGAN MJ GKE SELAT 2023
          </Text>
          <Spacer />
          <Select width={"200px"}>
            <option value="option1">Bulan</option>
            <option value="option2">Minggu</option>
          </Select>
        </Flex>
        <Box px="50px" py="20px" h={"inherit"} w={"full"} align={"center"}>
          <Line data={data} options={options}></Line>
        </Box>
      </Flex>
      <Flex gap={"20px"}>
        <Flex
          bg={"#ffff"}
          borderRadius={"xl"}
          direction="column"
          w={"full"}
          shadow={"0px 5px 27px #5B47BC30 "}
          gap={"20px"}
          py={"50px"}
          px={"50px"}>
          <Text
            fontSize={(null, null, "10px", "16px", "18px")}
            textColor={"#4F4F4F"}
            fontWeight={"Bold"}
            textAlign={"center"}>
            RIWAYAT PEMASUKAN GKE PER KATEGORI
          </Text>
          <Box width={"full"} height={"full"}>
            <Doughnut data={dataDI} options={OptionDI} />
          </Box>
        </Flex>
        <Flex
          direction={"column"}
          gap={"5px"}
          bg={"white"}
          px={"50px"}
          py={"50px"}
          w={"full"}
          h={"fit-content"}
          borderRadius={"xl"}
          shadow={"0px 5px 27px #5B47BC30 "}>
          <Flex w={"full"} h={"auto"} direction={"column"} gap={"20px"}>
            {/* <Text
              fontSize={("10px", "10px", "12px", "14px", "18px")}
              textColor={"#4F4F4F"}
              fontWeight={"Bold"}>
              REKAPAN BELANJA
            </Text> */}
            <Flex direction={"column"} gap={"30px"}>
              <Flex w={"full"} h={"auto"} direction={"column"} gap={"20px"}>
                <HStack width="full" spacing={"20px"}>
                  <Flex
                    width={"59px"}
                    height={"59px"}
                    px={"17.5px"}
                    py={"17.5px"}
                    bg={"#21965320"}
                    borderRadius={"xl"}>
                    <Icon as={BsPrinter} boxSize={"24px"} color={"#219653"} />
                  </Flex>
                  <Flex direction={"Column"} gap={"5px"}>
                    <Text
                      w={"fit-content"}
                      fontSize={"18px"}
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
                      fontSize={"18px"}
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
                    width={"59px"}
                    height={"59px"}
                    px={"17.5px"}
                    py={"17.5px"}
                    bg={"#21965320"}
                    borderRadius={"xl"}>
                    <Icon as={BsPrinter} boxSize={"24px"} color={"#219653"} />
                  </Flex>
                  <Flex direction={"Column"} gap={"5px"}>
                    <Text
                      w={"fit-content"}
                      fontSize={"18px"}
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
                      fontSize={"18px"}
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
                    width={"59px"}
                    height={"59px"}
                    px={"17.5px"}
                    py={"17.5px"}
                    bg={"#21965320"}
                    borderRadius={"xl"}>
                    <Icon as={BsCash} boxSize={"24px"} color={"#219653"} />
                  </Flex>
                  <Flex direction={"Column"} gap={"5px"}>
                    <Text
                      w={"fit-content"}
                      fontSize={"18px"}
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
                      fontSize={"18px"}
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
      </Flex>
      <Flex gap={"20px"}>
        <Flex
          bg={"#ffff"}
          borderRadius={"xl"}
          direction="column"
          w={"full"}
          shadow={"0px 5px 27px #5B47BC30 "}
          gap={"20px"}
          py={"50px"}
          px={"50px"}>
          <Text
            fontSize={(null, null, "10px", "16px", "18px")}
            textColor={"#4F4F4F"}
            fontWeight={"Bold"}
            textAlign={"center"}>
            RIWAYAT PEMASUKAN GKE PER KATEGORI
          </Text>
          <Box width={"full"} height={"full"}>
            <Doughnut data={dataDI} options={OptionDI} />
          </Box>
        </Flex>
        <Flex
          direction={"column"}
          gap={"5px"}
          bg={"white"}
          px={"50px"}
          py={"50px"}
          w={"full"}
          h={"fit-content"}
          borderRadius={"xl"}
          shadow={"0px 5px 27px #5B47BC30 "}>
          <Flex w={"full"} h={"auto"} direction={"column"} gap={"20px"}>
            <Flex direction={"column"} gap={"30px"}>
              <Flex w={"full"} h={"auto"} direction={"column"} gap={"20px"}>
                <HStack width="full" spacing={"20px"}>
                  <Flex
                    width={"59px"}
                    height={"59px"}
                    px={"17.5px"}
                    py={"17.5px"}
                    bg={"#EB575720"}
                    borderRadius={"xl"}>
                    <Icon as={BsPrinter} boxSize={"24px"} color={"#EB5757"} />
                  </Flex>
                  <Flex direction={"Column"} gap={"5px"}>
                    <Text
                      w={"fit-content"}
                      fontSize={"18px"}
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
                      fontSize={"18px"}
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
                    width={"59px"}
                    height={"59px"}
                    px={"17.5px"}
                    py={"17.5px"}
                    bg={"#EB575720"}
                    borderRadius={"xl"}>
                    <Icon as={BsPrinter} boxSize={"24px"} color={"#EB5757"} />
                  </Flex>
                  <Flex direction={"Column"} gap={"5px"}>
                    <Text
                      w={"fit-content"}
                      fontSize={"18px"}
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
                      fontSize={"18px"}
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
                    width={"59px"}
                    height={"59px"}
                    px={"17.5px"}
                    py={"17.5px"}
                    bg={"#EB575720"}
                    borderRadius={"xl"}>
                    <Icon as={BsCash} boxSize={"24px"} color={"#EB5757"} />
                  </Flex>
                  <Flex direction={"Column"} gap={"5px"}>
                    <Text
                      w={"fit-content"}
                      fontSize={"18px"}
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
                      fontSize={"18px"}
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
      </Flex>
    </Flex>
  );
}
export default ChartJS;
