import { Plugin } from "obsidian";
import { CounterRenderer } from './counter';
import { CounterPluginSettings } from "./settings";
//import { DEFAULT_SETTINGS, DialoguePluginSettings, DialogueSettingTab } from './settings';

export default class CounterPlugin extends Plugin {
  settings: CounterPluginSettings;
  
    async onload() {
    console.log('Loaded Counter Plugin');

    this.registerMarkdownCodeBlockProcessor(
        'counter', 
        (src, el, ctx) => {
      new CounterRenderer (src, el, this.settings);
    });
  }

    onunload() {
        console.log('Unloading Counter plugin');
    }
}
