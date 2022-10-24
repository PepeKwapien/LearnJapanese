import { JapaneseDiacriticRows } from '../enums/japanese-diacritic-rows';
import { JapaneseMonographRows } from '../enums/japanese-monograph-rows';
import { KatakanaExtendedRows } from '../enums/katakana-extended-rows';
import { JapaneseCharacterCell } from './japanese-character-cell';

export interface JapaneseCharacterRow {
  row: JapaneseMonographRows | JapaneseDiacriticRows | KatakanaExtendedRows;
  cells: JapaneseCharacterCell[];
}
