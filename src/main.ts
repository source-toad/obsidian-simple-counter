import { Plugin, MarkdownPostProcessorContext } from "obsidian";
import "./styles.css";
import './settings';

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

                    let counterSpan = container.createSpan();
                    counterSpan.innerText = counterValue.toString();

                    container
                        .createDiv({ cls: "counter-button" })
                        .createEl("button", { text: "-", cls: "decrement-button" })
                        .addEventListener("click", () => {
                            counterValue--;
                            container.setAttr("data-counter-value", counterValue.toString());
                            counterSpan.innerText = counterValue.toString();
                        });

                    container
                        .createDiv({ cls: "counter-button" })
                        .createEl("button", { text: "+", cls: "increment-button" })
                        .addEventListener("click", () => {
                            counterValue++;
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