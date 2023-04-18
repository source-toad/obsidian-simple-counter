import { App, MarkdownView, Plugin, TFile } from 'obsidian';

export default class CounterPlugin extends Plugin {
    async onload() {
        console.log('Loaded Counter plugin');

        this.registerMarkdownCodeBlockProcessor('counter', this.processCounter.bind(this));
    }

    async processCounter(source: string, el: HTMLElement, ctx: MarkdownView) {
        const counterRegex = /^(\d+)$/;
        const match = source.trim().match(counterRegex);
        if (!match) {
            el.innerText = 'Invalid syntax. Please use "counter: X" where X is a number.';
            return;
        }

        const initialValue = parseInt(match[1]);
        const containerEl = document.createElement('span');
        containerEl.classList.add('counter-container');

        const arrowLeft = document.createElement('span');
        arrowLeft.innerText = '<';
        arrowLeft.classList.add('counter-arrow');
        containerEl.appendChild(arrowLeft);

        const valueEl = document.createElement('span');
        valueEl.innerText = initialValue.toString();
        valueEl.classList.add('counter-value');
        containerEl.appendChild(valueEl);

        const arrowRight = document.createElement('span');
        arrowRight.innerText = '>';
        arrowRight.classList.add('counter-arrow');
        containerEl.appendChild(arrowRight);

        let currentValue = initialValue;
        valueEl.addEventListener('click', () => {
            currentValue++;
            valueEl.innerText = currentValue.toString();
        });

        arrowLeft.addEventListener('click', () => {
            currentValue--;
            valueEl.innerText = currentValue.toString();
        });

        el.appendChild(containerEl);
    }

    onunload() {
        console.log('Unloading Counter plugin');
    }
}
