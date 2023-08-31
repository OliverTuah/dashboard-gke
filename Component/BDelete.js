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
  Box,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { AiFillDelete } from "react-icons/Ai";

function EditDeleteB() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex gap={"20px"}>
        <Button onClick={onOpen} bgColor={"#EB575730"} variant="solid">
          <AiFillDelete color="#EB5757" />
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
                    src="\deleted.png"
                    alt="Delete"
                    boxSize="300px"
                    objectFit="cover"
                  />
                </Box>
                <Text fontSize={"18px"} fontWeight={"bold"} color={"#333333"}>
                  Apakah yakin ingin menghapus data ini?
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

export default EditDeleteB;
