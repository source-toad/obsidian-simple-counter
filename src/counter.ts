import { PluginSettingTab, Setting } from 'obsidian';
import { CounterPluginSettings } from './settings';


export class CounterRenderer {
    src: BigInteger;
  
    constructor(source: string, el: HTMLElement, settings: CounterPluginSettings) {
    const match = source.trim().match(/^counter:\s*(-?\d+)\s*$/);

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
}