import { NativeBaseProvider } from "native-base";
import ButtonExample from "./Components/ButtonExample";

function App() {
  return (
    <NativeBaseProvider>
      <ButtonExample />
    </NativeBaseProvider>
  );
}

export default App;
