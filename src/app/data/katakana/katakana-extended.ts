import { KatakanaExtendedRows } from 'src/app/enums/katakana-extended-rows';
import { JapaneseMonographColumns } from 'src/app/enums/japanese-monograph-columns';
import { JapaneseCharacterRow } from 'src/app/interfaces/japanese-characters-row';

export const yExtended: JapaneseCharacterRow = {
  row: KatakanaExtendedRows.y,
  cells: [
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'ye', character: 'イェ' },
    },
  ],
};

export const wExtended: JapaneseCharacterRow = {
  row: KatakanaExtendedRows.w,
  cells: [
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'wi', character: 'ウィ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'we', character: 'ウェ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'wo', character: 'ウォ' },
    },
  ],
};

export const vExtended: JapaneseCharacterRow = {
  row: KatakanaExtendedRows.v,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'va', character: 'ヴァ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'vi', character: 'ヴィ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'vu', character: 'ヴ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 've', character: 'ヴェ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'vo', character: 'ヴォ' },
    },
  ],
};

export const shExtended: JapaneseCharacterRow = {
  row: KatakanaExtendedRows.sh,
  cells: [
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'she', character: 'シェ' },
    },
  ],
};

export const jExtended: JapaneseCharacterRow = {
  row: KatakanaExtendedRows.j,
  cells: [
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'je', character: 'ジェ' },
    },
  ],
};

export const chExtended: JapaneseCharacterRow = {
  row: KatakanaExtendedRows.ch,
  cells: [
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'che', character: 'チェ' },
    },
  ],
};

export const tExtended: JapaneseCharacterRow = {
  row: KatakanaExtendedRows.t,
  cells: [
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'ti', character: 'ティ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'tu', character: 'トゥ' },
    },
  ],
};

export const tyExtended: JapaneseCharacterRow = {
  row: KatakanaExtendedRows.ty,
  cells: [
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'tyu', character: 'テュ' },
    },
  ],
};

export const dExtended: JapaneseCharacterRow = {
  row: KatakanaExtendedRows.d,
  cells: [
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'di', character: 'ディ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'du', character: 'ドゥ' },
    },
  ],
};

export const dyExtended: JapaneseCharacterRow = {
  row: KatakanaExtendedRows.dy,
  cells: [
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'dyu', character: 'テュ' },
    },
  ],
};

export const tsExtended: JapaneseCharacterRow = {
  row: KatakanaExtendedRows.ts,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'tsa', character: 'ツァ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'tsi', character: 'ツィ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'tse', character: 'ツェ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'tso', character: 'ツォ' },
    },
  ],
};

export const fExtended: JapaneseCharacterRow = {
  row: KatakanaExtendedRows.f,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'fa', character: 'ファ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'fi', character: 'フィ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'fe', character: 'フェ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'fo', character: 'フォ' },
    },
  ],
};

export const fyExtended: JapaneseCharacterRow = {
  row: KatakanaExtendedRows.fy,
  cells: [
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'fyu', character: 'フュ' },
    },
  ],
};
