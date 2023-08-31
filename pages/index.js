import React from "react";
import {
  Flex,
  Box,
  // Image,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Button,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";

function index() {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";
  return (
    <>
      <Center w={"100vw"} h={"100vh"}>
        <Flex
          bg={"white"}
          rounded={"12px"}
          shadow={"0px 5px 27px #5B47BC30 "}
          direction={"column"}
          alignItems={"center"}
          border="1px"
          mx={"50px"}
          my={"50px"}>
          <Flex
            w={{ base: "inherit", xl: "518px" }}
            h={{ base: "20vh", xl: "165px" }}
            ms={"50px"}
            me={"50px"}
            mt={"50px"}
            direction={"column"}
            gap={{ base: "2vh", xl: "20px" }}>
            <Flex
              position={"relative"}
              boxSize={{ base: "60px", md: "80px", xl: "96px" }}
              alignSelf={"center"}>
              <Image src="/Logo GKE.png" alt="Logo GKE" fill />
            </Flex>
            <Text
              fontSize={"24px"}
              fontWeight={"bold"}
              textAlign={"center"}
              color={"#4F4F4F"}>
              Dashboard MJ GKE SELAT
            </Text>
          </Flex>
          <Flex
            my={"50px"}
            px={"50px"}
            direction={"column"}
            gap={"10px"}
            w={"full"}>
            <FormControl
              w={{ base: "full", xl: "518px" }}
              h={{ base: "inherit", xl: "115px" }}
              isInvalid={isError}>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={input} onChange={handleInputChange} />
              {isError ? (
                <FormHelperText>Email is required.</FormHelperText>
              ) : (
                <FormErrorMessage>Your Email Invalid</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              w={{ base: "inherit", xl: "518px" }}
              h={{ base: "inherit", xl: "115px" }}
              isInvalid={isError}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={input}
                onChange={handleInputChange}
              />
              {isError ? (
                <FormHelperText>Password required.</FormHelperText>
              ) : (
                <FormErrorMessage>Your Password Invalid</FormErrorMessage>
              )}
            </FormControl>
            <Button py={"30px"} bgColor={"#2F80ED"} textColor={"#F2F2F2"}>
              Masuk
            </Button>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}

export default index;
