import React from "react";
import { Box, Button } from "native-base";
import CheckboxExample from "./CheckboxExample";

function ButtonExample() {
  return (
    <Box alignItems="center" h="100vh" justifyContent="center" bg="gray.100">
      <Button onPress={() => console.log("hello world")} bg="green.500">
        Click Me
      </Button>
      <CheckboxExample />
    </Box>
  );
}

export default ButtonExample;
