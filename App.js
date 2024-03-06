import { Provider } from "react-redux";
import { Store } from "./src/Redux/Store";
import Routers from "./src/Navigations/Routers";

export default function App() {
  return (
    <Provider store={Store}>
      <Routers />
    </Provider>
  );
}
