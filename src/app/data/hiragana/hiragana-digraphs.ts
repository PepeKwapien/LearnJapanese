import { JapaneseDigraphColumns } from 'src/app/enums/japanese-digraph-columns';
import { JapaneseMonographRows } from 'src/app/enums/japanese-monograph-rows';
import { JapaneseCharacterRow } from 'src/app/interfaces/japanese-characters-row';

export const kDigraphs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.k,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'kya', character: 'きゃ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'kyu', character: 'きゅ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'kyo', character: 'きょ' },
    },
  ],
};

export const sDigraphs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.s,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'sha', character: 'しゃ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'shu', character: 'しゅ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'sho', character: 'しょ' },
    },
  ],
};

export const tDigraphs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.t,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'cha', character: 'ちゃ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'chu', character: 'ちゅ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'cho', character: 'ちょ' },
    },
  ],
};

export const nDigraphs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.n,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'nya', character: 'にゃ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'nyu', character: 'にゅ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'nyo', character: 'にょ' },
    },
  ],
};

export const hDigraphs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.h,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'hya', character: 'ひゃ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'hyu', character: 'ひゅ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'hyo', character: 'ひょ' },
    },
  ],
};

export const mDigraphs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.m,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'mya', character: 'みゃ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'myu', character: 'みゅ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'myo', character: 'みょ' },
    },
  ],
};

export const rDigraphs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.r,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'rya', character: 'りゃ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'ryu', character: 'りゅ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'ryo', character: 'りょ' },
    },
  ],
};
