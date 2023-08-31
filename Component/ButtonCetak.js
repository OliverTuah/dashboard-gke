import {
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Text,
  Icon,
  Box,
  Image,
} from "@chakra-ui/react";

import React from "react";
import { BsFiletypePdf } from "react-icons/Bs";

function ButtonCetak() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex>
        <Button
          color={"#FFFFFF"}
          colorScheme={"blue"}
          variant="solid"
          textColor={"#F2F2F2"}
          width={"200px"}
          height={"50px"}
          rounded={"12px"}
          onClick={onOpen}>
          <Flex gap={"20px"} align={"center"}>
            <Text
              align={"center"}
              fontSize={(null, "12px", "14px", "16px", "20px")}
              fontWeight={"Medium"}>
              Cetak PDF
            </Text>
            <Icon as={BsFiletypePdf} boxSize={"20px"} />
          </Flex>
        </Button>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom">
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <Flex direction={"column"} align={"center"}>
                <Box>
                  <Image
                    src="\UnduhPDF.png"
                    alt="Unduh"
                    boxSize="300px"
                    objectFit="cover"
                  />
                </Box>
                <Text
                  fontSize={"18px"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                  color={"#333333"}>
                  Apakah anda sudah yakin ingin mengunduh laporan?
                </Text>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button
                w={"200px"}
                bgColor={"#EB575730"}
                color={"#EB5757"}
                mr={3}
                onClick={onClose}>
                Batal
              </Button>
              <Button w={"200px"} bgColor={"#21965330"} color={"#219653"}>
                Konfirmasi
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
}

export default ButtonCetak;
