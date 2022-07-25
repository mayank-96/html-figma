import { Box, Button, NativeBaseProvider } from "native-base";
import ButtonExample from "./ButtonExample";

function App() {
  return (
    <NativeBaseProvider>
      <ButtonExample />
    </NativeBaseProvider>
  );
}

export default App;
