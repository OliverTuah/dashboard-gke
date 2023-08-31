import { Flex, Button } from "@chakra-ui/react";
import React from "react";
import BEdit from "./BEdit";
import BDelete from "./BDelete";

function EditDeleteB() {
  return (
    <>
      <Flex gap={"20px"}>
        <BEdit />
        <BDelete />
      </Flex>
    </>
  );
}

export default EditDeleteB;
