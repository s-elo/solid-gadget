import { Button } from "@solid-gadgets/components";
import { registerButton } from "@solid-gadgets/web-components";
import { createEffect } from "solid-js";

export default () => {
  createEffect(() => {
    registerButton({ type: "default", children: () => "children" });
    const webButton = document.createElement("so-button");

    webButton.setAttribute("type", "primary");

    webButton.innerHTML = `<div>default slot</div>
    <div slot="header">header slot content</div>`;

    document.getElementById("web-button-container")?.append(webButton);
  });

  return (
    <>
      <h4>solid rendered button:</h4>
      <Button>
        <div>button children1</div>
        <div>button children2</div>
      </Button>
      <br />
      <div id="web-button-container">
        <h4>web component button:</h4>
      </div>
    </>
  );
};
