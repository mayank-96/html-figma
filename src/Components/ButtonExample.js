import React from "react";
import { Box, Button, Heading, Text, Stack, VStack, HStack } from "native-base";

function ButtonExample() {
  return (
    <Box alignItems="center" h="100vh" justifyContent="center" bg="gray.100">
      <Stack w="60%" direction="column" space="16">
        <VStack space="4">
          <Heading>Button</Heading>
          <Text>
            The Button component is used to trigger an action or event.
          </Text>
        </VStack>
        {/* Button Solid */}
        <HStack space="24">
          {/* Button Solid Primary */}
          <VStack space="4" alignItems="flex-start">
            <Button
              onPress={() => console.log("hello world")}
              size="xs"
              data-component-name="Button-Solid-Primary-XS"
            >
              SUBMIT
            </Button>
            <Button
              onPress={() => console.log("hello world")}
              size="sm"
              data-component-name="Button-Solid-Primary-SM"
            >
              SUBMIT
            </Button>
            <Button
              onPress={() => console.log("hello world")}
              size="md"
              data-component-name="Button-Solid-Primary-MD"
            >
              SUBMIT
            </Button>
            <Button
              onPress={() => console.log("hello world")}
              size="lg"
              data-component-name="Button-Solid-Primary-LG"
            >
              SUBMIT
            </Button>
          </VStack>
          {/* Button Solid Secondary */}
          <VStack space="4" alignItems="flex-start">
            <Button
              onPress={() => console.log("hello world")}
              size="xs"
              colorScheme="secondary"
              data-component-name="Button-Solid-Secondary-XS"
            >
              SUBMIT
            </Button>
            <Button
              onPress={() => console.log("hello world")}
              size="sm"
              colorScheme="secondary"
              data-component-name="Button-Solid-Secondary-SM"
            >
              SUBMIT
            </Button>
            <Button
              onPress={() => console.log("hello world")}
              size="md"
              colorScheme="secondary"
              data-component-name="Button-Solid-Secondary-MD"
            >
              SUBMIT
            </Button>
            <Button
              onPress={() => console.log("hello world")}
              size="lg"
              colorScheme="secondary"
              data-component-name="Button-Solid-Secondary-LG"
            >
              SUBMIT
            </Button>
          </VStack>
          {/* Button Solid Disabled */}
          <VStack space="4" alignItems="flex-start">
            <Button
              onPress={() => console.log("hello world")}
              size="xs"
              isDisabled
              data-component-name="Button-Solid-Disabled-XS"
            >
              SUBMIT
            </Button>
            <Button
              onPress={() => console.log("hello world")}
              size="sm"
              isDisabled
              data-component-name="Button-Solid-Disabled-SM"
            >
              SUBMIT
            </Button>
            <Button
              onPress={() => console.log("hello world")}
              size="md"
              isDisabled
              data-component-name="Button-Solid-Disabled-MD"
            >
              SUBMIT
            </Button>
            <Button
              onPress={() => console.log("hello world")}
              size="lg"
              isDisabled
              data-component-name="Button-Solid-Disabled-LG"
            >
              SUBMIT
            </Button>
          </VStack>
        </HStack>
        {/* Button Outline */}
        <HStack space="24">
          <VStack space="4" alignItems="flex-start">
            <Button
              onPress={() => console.log("hello world")}
              variant="outline"
              size="xs"
              data-component-name="Button-Outline-Primary-XS"
            >
              SUBMIT
            </Button>
            <Button
              onPress={() => console.log("hello world")}
              variant="outline"
              size="sm"
              data-component-name="Button-Outline-Primary-SM"
            >
              SUBMIT
            </Button>
            <Button
              onPress={() => console.log("hello world")}
              variant="outline"
              size="md"
              data-component-name="Button-Outline-Primary-MD"
            >
              SUBMIT
            </Button>
            <Button
              onPress={() => console.log("hello world")}
              variant="outline"
              size="lg"
              data-component-name="Button-Outline-Primary-LG"
            >
              SUBMIT
            </Button>
          </VStack>
          <VStack space="4" alignItems="flex-start">
            <Button
              onPress={() => console.log("hello world")}
              variant="outline"
              size="xs"
              colorScheme="secondary"
              data-component-name="Button-Outline-Secondary-XS"
            >
              SUBMIT
            </Button>
            <Button
              onPress={() => console.log("hello world")}
              variant="outline"
              size="sm"
              colorScheme="secondary"
              data-component-name="Button-Outline-Secondary-SM"
            >
              SUBMIT
            </Button>
            <Button
              onPress={() => console.log("hello world")}
              variant="outline"
              size="md"
              colorScheme="secondary"
              data-component-name="Button-Outline-Secondary-MD"
            >
              SUBMIT
            </Button>
            <Button
              onPress={() => console.log("hello world")}
              variant="outline"
              size="lg"
              colorScheme="secondary"
              data-component-name="Button-Outline-Secondary-LG"
            >
              SUBMIT
            </Button>
          </VStack>
          <VStack space="4" alignItems="flex-start">
            <Button
              onPress={() => console.log("hello world")}
              variant="outline"
              size="xs"
              isDisabled
              data-component-name="Button-Outline-Disabled-XS"
            >
              SUBMIT
            </Button>
            <Button
              onPress={() => console.log("hello world")}
              variant="outline"
              size="sm"
              isDisabled
              data-component-name="Button-Outline-Disabled-SM"
            >
              SUBMIT
            </Button>
            <Button
              onPress={() => console.log("hello world")}
              variant="outline"
              size="md"
              isDisabled
              data-component-name="Button-Outline-Disabled-MD"
            >
              SUBMIT
            </Button>
            <Button
              onPress={() => console.log("hello world")}
              variant="outline"
              size="lg"
              isDisabled
              data-component-name="Button-Outline-Disabled-Lg"
            >
              SUBMIT
            </Button>
          </VStack>
        </HStack>
      </Stack>
    </Box>
  );
}

export default ButtonExample;
