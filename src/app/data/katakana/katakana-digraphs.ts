import { JapaneseDigraphColumns } from 'src/app/enums/japanese-digraph-columns';
import { JapaneseMonographRows } from 'src/app/enums/japanese-monograph-rows';
import { JapaneseCharacterRow } from 'src/app/interfaces/japanese-characters-row';

export const kDigraphs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.k,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'kya', character: 'キャ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'kyu', character: 'キュ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'kyo', character: 'キョ' },
    },
  ],
};

export const sDigraphs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.s,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'sha', character: 'シャ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'shu', character: 'シュ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'sho', character: 'ショ' },
    },
  ],
};

export const tDigraphs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.t,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'cha', character: 'チャ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'chu', character: 'チュ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'cho', character: 'チョ' },
    },
  ],
};

export const nDigraphs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.n,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'nya', character: 'ニャ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'nyu', character: 'ニュ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'nyo', character: 'ニョ' },
    },
  ],
};

export const hDigraphs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.h,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'hya', character: 'ヒャ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'hyu', character: 'ヒュ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'hyo', character: 'ヒョ' },
    },
  ],
};

export const mDigraphs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.m,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'mya', character: 'ミャ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'myu', character: 'ミュ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'myo', character: 'ミョ' },
    },
  ],
};

export const rDigraphs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.r,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'rya', character: 'リャ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'ryu', character: 'リュ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'ryo', character: 'リョ' },
    },
  ],
};
