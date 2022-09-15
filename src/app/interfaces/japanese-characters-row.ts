import { JapaneseDiacriticRows } from '../enums/japanese-diacritic-rows';
import { JapaneseCharacterCell } from './japanese-character-cell';

export interface JapaneseCharacterRow {
  row: JapaneseCharacterRow | JapaneseDiacriticRows;
  cells: JapaneseCharacterCell[];
}
