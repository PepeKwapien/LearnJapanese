import { JapaneseDiacriticRows } from 'src/app/enums/japanese-diacritic-rows';
import { JapaneseDigraphColumns } from 'src/app/enums/japanese-digraph-columns';
import { JapaneseCharacterRow } from 'src/app/interfaces/japanese-characters-row';

export const gDigraphsDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.g,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'gya', character: 'ギャ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'gyu', character: 'ギュ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'gyo', character: 'ギョ' },
    },
  ],
};

export const zDigraphsDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.z,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'ja', character: 'ジャ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'ju', character: 'ジュ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'jo', character: 'ジョ' },
    },
  ],
};

export const dDigraphsDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.d,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'ja', character: 'ヂャ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'ju', character: 'ヂュ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'jo', character: 'ヂョ' },
    },
  ],
};

export const bDigraphsDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.b,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'bya', character: 'ビャ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'byu', character: 'ビュ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'byo', character: 'ビョ' },
    },
  ],
};

export const pDigraphsDiacritics: JapaneseCharacterRow = {
  row: JapaneseDiacriticRows.p,
  cells: [
    {
      column: JapaneseDigraphColumns.ya,
      character: { transcription: 'pya', character: 'ピャ' },
    },
    {
      column: JapaneseDigraphColumns.yu,
      character: { transcription: 'pyu', character: 'ピュ' },
    },
    {
      column: JapaneseDigraphColumns.yo,
      character: { transcription: 'pyo', character: 'ピョ' },
    },
  ],
};
