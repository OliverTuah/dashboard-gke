import {
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Select,
} from "@chakra-ui/react";

import React from "react";
import { FiEdit } from "react-icons/Fi";
import InputDate from "./InputDate";

function EditDeleteB() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex gap={"20px"}>
        <Button onClick={onOpen} bgColor={"#21965330"} variant="solid">
          <FiEdit color="#219653" />
        </Button>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
          size={"4xl"}>
          <ModalOverlay />
          <ModalContent height={"fit-content"}>
            <ModalHeader>Edit Data</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex direction={"column"} gap={"30px"}>
                <Flex gap={"20px"} justifyContent={"space-between"} w={"full"}>
                  <Input
                    width={"450px"}
                    height={"50px"}
                    textColor={"#333333"}
                    placeholder="Name"
                    className="custom-input"
                  />
                  <Select height={"50px"} width={"450px"} placeholder="">
                    <option value="option1">Bulan</option>
                    <option value="option2">Minggu</option>
                  </Select>
                </Flex>
                <Flex gap={"20px"} justifyContent={"space-between"} w={"full"}>
                  <InputDate />
                  <Input
                    height={"50px"}
                    width={"inherit"}
                    placeholder="Nominal"
                    className="custom-input"
                  />
                </Flex>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button
                w={"fit-content"}
                bgColor={"#EB5757"}
                color={"#FFFFFF"}
                mr={3}
                onClick={onClose}>
                Batal
              </Button>
              <Button w={"fit-content"} bgColor={"#219653"} color={"#FFFFFF"}>
                Konfirmasi
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
}

export default EditDeleteB;
