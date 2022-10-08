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
