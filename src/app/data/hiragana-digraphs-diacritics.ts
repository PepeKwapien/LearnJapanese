import { JapaneseDiacriticRows } from '../enums/japanese-diacritic-rows';
import { JapaneseDigraphColumns } from '../enums/japanese-digraph-columns';
import { JapaneseCharacterRow } from '../interfaces/japanese-characters-row';

export const gDigraphsDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.g,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'gya', character: 'ぎゃ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'gyu', character: 'ぎゅ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'gyo', character: 'ぎょ' },
    },
  ],
};

export const zDigraphsDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.z,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'ja', character: 'じゃ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'ju', character: 'じゅ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'jo', character: 'じょ' },
    },
  ],
};

export const dDigraphsDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.d,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'ja', character: 'ぢゃ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'ju', character: 'ぢゅ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'jo', character: 'ぢょ' },
    },
  ],
};

export const bDigraphsDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.b,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'bya', character: 'びゃ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'byu', character: 'びゅ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'byo', character: 'びょ' },
    },
  ],
};

export const pDigraphsDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.p,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'pya', character: 'ぴゃ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'pyu', character: 'ぴゅ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'pyo', character: 'ぴょ' },
    },
  ],
};
