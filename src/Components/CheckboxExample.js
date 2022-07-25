import React from "react";
import { Stack, Checkbox } from "native-base";

function CheckboxExample() {
  return (
    <Stack
      mt="10"
      direction={{
        base: "column",
        md: "row",
      }}
      space={3}
      alignItems="flex-start"
    >
      <Checkbox value="danger" colorScheme="danger" defaultIsChecked>
        Danger
      </Checkbox>
      <Checkbox value="info" colorScheme="info" defaultIsChecked>
        Info
      </Checkbox>
      <Checkbox value="orange" colorScheme="orange" defaultIsChecked>
        Orange
      </Checkbox>
      <Checkbox value="purple" colorScheme="purple" defaultIsChecked>
        Purple
      </Checkbox>
    </Stack>
  );
}

export default CheckboxExample;
