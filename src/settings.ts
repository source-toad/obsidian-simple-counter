export interface CounterPluginSettings extends Record<string, any> {}

export const DEFAULT_SETTINGS: CounterPluginSettings = {};

export class CounterSettingTab extends PluginSettingTab {
  plugin: CounterPlugin;

  constructor(app: App, plugin: CounterPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;

    containerEl.empty();

    containerEl.createEl('h2', { text: 'Counter Plugin Settings' });

    new Setting(containerEl)
      .setName('Setting Name')
      .setDesc('Setting description.')
      .addText((text) =>
        text
          .setPlaceholder('Enter text')
          .setValue('')
          .onChange(async (value) => {
            this.plugin.settings.exampleSetting = value;
            await this.plugin.saveSettings();
          })
      );
  }
}