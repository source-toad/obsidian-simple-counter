import { App, Setting, PluginSettingTab } from 'obsidian';
import DialoguePlugin from './main';

export interface DialoguePluginSettings {
	defaultLeftTitle: string;
	defaultRightTitle: string;
	defaultMessageMaxWidth: string;
	defaultCommentMaxWidth: string;
}

export const DEFAULT_SETTINGS: DialoguePluginSettings = {
	defaultLeftTitle: '',
	defaultRightTitle: '',
	defaultMessageMaxWidth: '60%',
	defaultCommentMaxWidth: '60%',
}
