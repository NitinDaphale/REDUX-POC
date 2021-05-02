import "./styles.css";
import DashboardContainer from "./DashboardContainer";
import store from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <DashboardContainer />
      </Provider>
    </div>
  );
}
