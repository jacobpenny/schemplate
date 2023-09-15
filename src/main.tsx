import ReactDOM from "react-dom/client";
import { inspect } from "@xstate/inspect";
import { App } from "./App.tsx";
import "./reset.scss";
import "./index.scss";

inspect({
  iframe: false,
});

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
