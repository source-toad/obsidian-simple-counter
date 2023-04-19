import { Plugin, MarkdownPostProcessorContext } from "obsidian";
import "./settings";

export default class CounterPlugin extends Plugin {
    counterRegex = /counter:\s*(\d+)\s*/;

    async onload() {
        console.log("Counter plugin loaded");

        this.registerMarkdownPostProcessor(
            (el: HTMLElement, ctx: MarkdownPostProcessorContext) => {
                let nodeList = el.querySelectorAll("code");
                if (!nodeList.length) return;

                nodeList.forEach((node) => {
                    let match = this.counterRegex.exec(node.innerText);
                    if (!match) return;

                    let parent = node.parentElement;

                    let counterValue = parseInt(match[1]);

                    let container = createDiv().createDiv({
                        cls: "counter"
                    });
                    container.setAttr("data-counter-value", counterValue.toString());

                    let decrementContainer = container.createDiv({ cls: "decrement-container" });

                    decrementContainer
                    .createDiv({ cls: "counter-button" })
                    .createEl("button", { text: "-", cls: "decrement-button" })
                    .addEventListener("click", () => {
                        counterValue--;
                        container.setAttr("data-counter-value", counterValue.toString());
                        counterSpan.innerText = counterValue.toString();
                    });

                    decrementContainer
                    .createDiv({ cls: "counter-button" })
                    .createEl("button", { text: "--", cls: "decrement-button" })
                    .addEventListener("click", () => {
                        counterValue -= 5;
                        container.setAttr("data-counter-value", counterValue.toString());
                        counterSpan.innerText = counterValue.toString();
                    });

                    let counterSpan = container.createSpan({ cls: "counter-value" });
                    counterSpan.innerText = counterValue.toString();

                    let incrementContainer = container.createDiv({ cls: "increment-container" });

                    incrementContainer
                        .createDiv({ cls: "counter-button" })
                        .createEl("button", { text: "+", cls: "increment-button" })
                        .addEventListener("click", () => {
                            counterValue++;
                            container.setAttr("data-counter-value", counterValue.toString());
                            counterSpan.innerText = counterValue.toString();
                        });

                    incrementContainer
                    .createDiv({ cls: "counter-button" })
                    .createEl("button", { text: "++", cls: "increment-button" })
                    .addEventListener("click", () => {
                        counterValue += 5;
                        container.setAttr("data-counter-value", counterValue.toString());
                        counterSpan.innerText = counterValue.toString();
                    });

                    parent.replaceChild(container, node);
                });
            }
        );
    }

    onunload() {
        console.log("Counter plugin unloaded");
    }
}