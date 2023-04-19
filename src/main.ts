import { Plugin } from "obsidian";
import { CounterRenderer } from './counter';
import { DEFAULT_SETTINGS, DialoguePluginSettings, DialogueSettingTab } from './settings';

export default class CounterPlugin extends Plugin {
  async onload() {
    console.log('Loaded Counter Plugin');

    this.registerMarkdownCodeBlockProcessor(
        'counter', 
        (source, el, ctx) => {
      new CounterRenderer (src, el, this.settings);
    });
  }

    onunload() {
        console.log('Unloading Counter plugin');
    }
}
