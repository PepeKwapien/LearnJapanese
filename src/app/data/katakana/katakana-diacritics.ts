import { JapaneseDiacriticRows } from 'src/app/enums/japanese-diacritic-rows';
import { JapaneseMonographColumns } from 'src/app/enums/japanese-monograph-columns';
import { JapaneseCharacterRow } from 'src/app/interfaces/japanese-characters-row';

export const gDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.g,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'ga', character: 'ガ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'gi', character: 'ギ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'gu', character: 'グ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'ge', character: 'ゲ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'go', character: 'ゴ' },
    },
  ],
};

export const zDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.z,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'za', character: 'ザ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'ji', character: 'ジ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'zu', character: 'ズ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'ze', character: 'ゼ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'zo', character: 'ゾ' },
    },
  ],
};

export const dDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.d,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'da', character: 'ダ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'ji', character: 'ヂ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'zu', character: 'ヅ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'de', character: 'デ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'do', character: 'ド' },
    },
  ],
};

export const bDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.b,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'ba', character: 'バ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'bi', character: 'ビ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'bu', character: 'ブ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'be', character: 'ベ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'bo', character: 'ボ' },
    },
  ],
};

export const pDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.p,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'pa', character: 'パ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'pi', character: 'ピ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'pu', character: 'プ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'pe', character: 'ペ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'po', character: 'ポ' },
    },
  ],
};
