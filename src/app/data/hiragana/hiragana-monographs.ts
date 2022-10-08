import { JapaneseMonographColumns } from 'src/app/enums/japanese-monograph-columns';
import { JapaneseMonographRows } from 'src/app/enums/japanese-monograph-rows';
import { JapaneseCharacterRow } from 'src/app/interfaces/japanese-characters-row';

export const emptyMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.empty,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'a', character: 'あ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'i', character: 'い' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'u', character: 'う' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'e', character: 'え' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'o', character: 'お' },
    },
  ],
};

export const kMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.k,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'ka', character: 'か' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'ki', character: 'き' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'ku', character: 'く' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'ke', character: 'け' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'ko', character: 'こ' },
    },
  ],
};

export const sMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.s,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'sa', character: 'さ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'shi', character: 'し' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'su', character: 'す' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'se', character: 'せ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'so', character: 'そ' },
    },
  ],
};

export const tMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.t,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'ta', character: 'た' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'chi', character: 'ち' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'tsu', character: 'つ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'te', character: 'て' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'to', character: 'と' },
    },
  ],
};

export const nMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.n,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'na', character: 'な' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'ni', character: 'に' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'nu', character: 'ぬ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'ne', character: 'ね' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'no', character: 'の' },
    },
  ],
};

export const hMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.h,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'ha', character: 'は' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'hi', character: 'ひ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'fu', character: 'ふ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'he', character: 'へ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'ho', character: 'ほ' },
    },
  ],
};

export const mMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.m,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'ma', character: 'ま' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'mi', character: 'み' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'mu', character: 'む' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'me', character: 'め' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'mo', character: 'も' },
    },
  ],
};

export const yMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.y,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'ya', character: 'や' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'yu', character: 'ゆ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'yo', character: 'よ' },
    },
  ],
};

export const rMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.r,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'ra', character: 'ら' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'ri', character: 'り' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'ru', character: 'る' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 're', character: 'れ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'ro', character: 'ろ' },
    },
  ],
};

export const wMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.w,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'wa', character: 'わ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: '(w)o', character: 'を' },
    },
  ],
};

export const mnMonographs: JapaneseCharacterRow = {
  row: JapaneseMonographRows.mn,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'n', character: 'ん' },
    },
  ],
};
