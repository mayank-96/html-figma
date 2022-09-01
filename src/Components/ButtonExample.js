import React from "react";
import { Box, Button, Heading, Text, Stack, VStack, HStack } from "native-base";

function ButtonExample() {
  const a = `{ instance: "Button", variant: "solid", colorScheme: "secondary", state: "disabled", size: "md" }`;
  const b = `{ instance: "Button", variant: "outline", colorScheme: "tertiary", state: "default", size: "lg" }`;

  return (
    <VStack
      space="5"
      alignItems="center"
      h="100vh"
      justifyContent="center"
      bg="gray.100"
    >
      <div data-component-name={a}>
        <Button
          onPress={() => console.log("hello world")}
          size="md"
          isDisabled
          colorScheme="secondary"
        >
          SUBMIT
        </Button>
      </div>
      <div data-component-name={a}>
        <Button
          onPress={() => console.log("hello world")}
          size="lg"
          colorScheme="tertiary"
        >
          SUBMIT
        </Button>
      </div>
    </VStack>
  );
}

export default ButtonExample;
