import "bootstrap/dist/css/bootstrap.min.css";

import Cart from "./components/Cart";

import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./store"; // Import your Redux store

function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}

export default App;
