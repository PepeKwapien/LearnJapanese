import { JapaneseDiacriticRows } from 'src/app/enums/japanese-diacritic-rows';
import { JapaneseMonographColumns } from 'src/app/enums/japanese-monograph-columns';
import { JapaneseCharacterRow } from 'src/app/interfaces/japanese-characters-row';

export const gDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.g,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'ga', character: 'が' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'gi', character: 'ぎ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'gu', character: 'ぐ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'ge', character: 'げ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'go', character: 'ご' },
    },
  ],
};

export const zDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.z,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'za', character: 'ざ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'ji', character: 'じ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'zu', character: 'ず' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'ze', character: 'ぜ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'zo', character: 'ぞ' },
    },
  ],
};

export const dDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.d,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'da', character: 'だ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'ji', character: 'ぢ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'zu', character: 'づ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'de', character: 'で' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'do', character: 'ど' },
    },
  ],
};

export const bDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.b,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'ba', character: 'ば' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'bi', character: 'び' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'bu', character: 'ぶ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'be', character: 'べ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'bo', character: 'ぼ' },
    },
  ],
};

export const pDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.p,
  cells: [
    {
      column: JapaneseMonographColumns.a,
      character: { transcription: 'pa', character: 'ぱ' },
    },
    {
      column: JapaneseMonographColumns.i,
      character: { transcription: 'pi', character: 'ぴ' },
    },
    {
      column: JapaneseMonographColumns.u,
      character: { transcription: 'pu', character: 'ぷ' },
    },
    {
      column: JapaneseMonographColumns.e,
      character: { transcription: 'pe', character: 'ぺ' },
    },
    {
      column: JapaneseMonographColumns.o,
      character: { transcription: 'po', character: 'ぽ' },
    },
  ],
};
