import React from "react";
import { Box, Button } from "native-base";

function ButtonExample() {
  return (
    <Box
      className="button-nb"
      alignItems="center"
      h="100vh"
      justifyContent="center"
      bg="gray.100"
    >
      <Button onPress={() => console.log("hello world")} bg="green.500">
        Click Me
      </Button>
    </Box>
  );
}

export default ButtonExample;
