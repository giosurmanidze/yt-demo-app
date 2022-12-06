import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root")); // The ! is used to assume not null state in typescript
root.render(<App />);
