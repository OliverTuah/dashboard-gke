import React from "react";
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import EditDeleteB from "./EditDeleteB";

function TableLaporan() {
  const data = [
    {
      name: "Pantek",
      category: "Bantuan",
      date: "15-07-2023",
      amount: "Rp2.000.000",
    },
    {
      name: "Pantek",
      category: "Bantuan",
      date: "15-07-2023",
      amount: "Rp2.000.000",
    },
    {
      name: "Pantek",
      category: "Bantuan",
      date: "15-07-2023",
      amount: "Rp2.000.000",
    },
    {
      name: "Pantek",
      category: "Bantuan",
      date: "15-07-2023",
      amount: "Rp2.000.000",
    },
  ];
  return (
    <>
      <Flex w={"full"}>
        <TableContainer
          w={"full"}
          boxShadow={"0px 5px 27px #5B47BC30 "}
          rounded={"12px"}
          bg={"white"}>
          <Table>
            <Thead>
              <Tr>
                <Td fontSize={"16px"} textColor={"#555555"} fontWeight={"bold"}>
                  Nama
                </Td>
                <Td fontSize={"16px"} textColor={"#555555"} fontWeight={"bold"}>
                  Jenis
                </Td>
                <Td fontSize={"16px"} textColor={"#555555"} fontWeight={"bold"}>
                  Tanggal
                </Td>
                <Td fontSize={"16px"} textColor={"#555555"} fontWeight={"bold"}>
                  Nominal
                </Td>
                <Td
                  w={"100px"}
                  fontSize={"16px"}
                  textColor={"#555555"}
                  fontWeight={"bold"}>
                  Action
                </Td>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.name}</Td>
                  <Td>{item.category}</Td>
                  <Td>{item.date}</Td>
                  <Td>{item.amount}</Td>
                  <Td>
                    <EditDeleteB />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
}

export default TableLaporan;
