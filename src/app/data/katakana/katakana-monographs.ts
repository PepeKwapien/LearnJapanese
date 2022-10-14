import { JapaneseMonographColumns } from 'src/app/enums/japanese-monograph-columns';
import { JapaneseMonographRows } from 'src/app/enums/japanese-monograph-rows';
import { JapaneseCharacterRow } from 'src/app/interfaces/japanese-characters-row';

export const emptyMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.empty,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'a', character: 'ア' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'i', character: 'イ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'u', character: 'ウ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'e', character: 'エ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'o', character: 'オ' },
    },
  ],
};

export const kMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.k,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'ka', character: 'カ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'ki', character: 'キ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'ku', character: 'ク' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'ke', character: 'ケ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'ko', character: 'コ' },
    },
  ],
};

export const sMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.s,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'sa', character: 'サ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'shi', character: 'シ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'su', character: 'ス' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'se', character: 'セ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'so', character: 'ソ' },
    },
  ],
};

export const tMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.t,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'ta', character: 'タ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'chi', character: 'チ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'tsu', character: 'ツ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'te', character: 'テ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'to', character: 'ト' },
    },
  ],
};

export const nMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.n,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'na', character: 'ナ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'ni', character: 'ニ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'nu', character: 'ヌ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'ne', character: 'ネ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'no', character: 'ノ' },
    },
  ],
};

export const hMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.h,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'ha', character: 'ハ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'hi', character: 'ヒ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'fu', character: 'フ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'he', character: 'ヘ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'ho', character: 'ホ' },
    },
  ],
};
