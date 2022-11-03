import { Shape } from '../interfaces';
import { EmojiRequest } from '../types';

export const SETS: {
  name: string;
  page_id: string;
  emoji: EmojiRequest;
  shape: Shape;
} = {
  name: 'sets',
  page_id: 'acdd8ff8-8f51-48f6-ba8d-83f650e1dfc9',
  emoji: '🔢',
  shape: {
    '🤪 overlays': 'relation',
    '✔️ goal': 'relation',
    '🙂 athlete': 'relation',
    visibility: 'select',
    'measured by': 'rollup',
    score: 'number',
    '🏋️ modifiers': 'relation',
    'created time': 'created_time',
    '🤌 corrections': 'relation',
    '📏 progressions': 'relation',
    count: 'number',
    '🤸 exercise': 'relation',
    'last edited time': 'last_edited_time',
    name: 'title',
  },
};
