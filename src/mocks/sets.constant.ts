import { EmojiRequest, Properties } from '../types';

export const SETS: {
  name: string;
  page_id: string;
  cover: string;
  emoji: EmojiRequest;
  properties: Properties;
} = {
  name: 'sets',
  page_id: 'acdd8ff8-8f51-48f6-ba8d-83f650e1dfc9',
  cover: '',
  emoji: 'ðĒ',
  properties: {
    'ðĪŠ overlays': 'relation',
    'âïļ goal': 'relation',
    'ð athlete': 'relation',
    visibility: 'select',
    'measured by': 'rollup',
    score: 'number',
    'ðïļ modifiers': 'relation',
    'created time': 'created_time',
    'ðĪ corrections': 'relation',
    'ð progressions': 'relation',
    count: 'number',
    'ðĪļ exercise': 'relation',
    'last edited time': 'last_edited_time',
    name: 'title',
  },
};
