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

export const mMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.m,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'ma', character: 'マ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'mi', character: 'ミ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'mu', character: 'ム' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'me', character: 'メ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'mo', character: 'モ' },
    },
  ],
};

export const yMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.y,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'ya', character: 'ヤ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'yu', character: 'ユ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'yo', character: 'ヨ' },
    },
  ],
};

export const rMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.r,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'ra', character: 'ラ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'ri', character: 'リ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'ru', character: 'ル' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 're', character: 'レ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'ro', character: 'ロ' },
    },
  ],
};

export const wMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.w,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'wa', character: 'ワ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: '(w)o', character: 'ヲ' },
    },
  ],
};

export const mnMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.mn,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'n', character: 'ン' },
    },
  ],
};
