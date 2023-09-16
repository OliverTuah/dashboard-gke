import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Icon,
  Button,
} from "@chakra-ui/react";
import CompButton from "./CompButton";
import FlexibleShape from "./FlexibleShape";
import { AiOutlineFolderAdd } from "react-icons/ai";

function DataTable(data, limit) {
  const datatable = [
    {
      id: "#1403",
      name: "Hoodie Jesus",
      quantity: 200,
      price: "Rp400.000",
      bgShape: "#F2C94C10",
      colorStock: "#F2C94C",
      text: "Medium-Stock",
    },
    {
      id: "#1404",
      name: "Cap Love GKE",
      quantity: 200,
      price: "Rp400.000",
      bgShape: "#27AE6010",
      colorStock: "#27AE60",
      text: "Full-Stock",
    },
    {
      id: "#1405",
      name: "Stay With Me",
      quantity: 200,
      price: "Rp20.000",
      bgShape: "#EB575710",
      colorStock: "#EB5757",
      text: "Low-Stock",
    },
  ];
  return (
    <>
      <Flex direction={"column"}>
        <FlexibleShape
          w="1100px"
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
                px={"20px"}
                fontSize={"16px"}
                fontWeight={"Bold"}
                textColor={"#333333"}>
                Product Status
              </Text>
              <TableContainer h="100%" w="100%" maxH="100%" maxW="100%">
                <Table variant="simple">
                  <Thead color="#333333">
                    <Tr>
                      <Th>Product ID</Th>
                      <Th>Product Name</Th>
                      <Th>Quantity</Th>
                      <Th>Price</Th>
                      <Th>Status</Th>
                      <Th>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody color="#333333" fontWeight="regular">
                    {datatable.map((item) => (
                      <Tr key={item.id}>
                        <Td>{item.id}</Td>
                        <Td>{item.name}</Td>
                        <Td>{item.quantity}</Td>
                        <Td>{item.price}</Td>
                        <Td>
                          <CompButton
                            ColorB={item.bgShape}
                            TextColor={item.colorStock}
                            SizeText="16px"
                            fontType="Bold"
                            w="135px"
                            px="10px"
                            py="10px"
                            Alignitems="center"
                            text={item.text}
                          />
                        </Td>
                        <Td>
                          <Button>See Detail</Button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </>
          }
        />
      </Flex>
    </>
  );
}

export default DataTable;
