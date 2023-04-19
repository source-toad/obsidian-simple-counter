import { App, Setting, PluginSettingTab } from 'obsidian';
import CounterPlugin from './main';

export interface CounterPluginSettings {
	defaultLeftTitle: string;
	defaultRightTitle: string;
	defaultMessageMaxWidth: string;
	defaultCommentMaxWidth: string;
}

export const DEFAULT_SETTINGS: CounterPluginSettings = {
	defaultLeftTitle: '',
	defaultRightTitle: '',
	defaultMessageMaxWidth: '60%',
	defaultCommentMaxWidth: '60%',
}
