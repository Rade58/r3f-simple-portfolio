import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// -----------------------------------------------------------
// import { App } from "./0_setup/App"; // with Stage, no light, no shadows enabled
// import { App } from "./1_setup/App"; // with lights without Stage
// import { App } from "./3_setup/App";
// -----------------------------------------------------------
// import { App } from "./4_background/App";
// import { App } from "./5_laptop_model/App";
// import { App } from "./6_light_and_environment/App";
// import { App } from "./7_floating_animation/App";
// import { App } from "./8_presentation_controls/App";
// import { App } from "./9_contact_shadows/App";
import { App } from "./10_iframe/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
