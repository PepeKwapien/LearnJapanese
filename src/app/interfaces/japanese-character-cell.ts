import { JapaneseDigraphColumns } from '../enums/japanese-digraph-columns';
import { JapaneseMonographColumns } from '../enums/japanese-monograph-columns';
import { JapaneseCharacter } from './japanese-character';

export interface JapaneseCharacterCell {
  column: JapaneseMonographColumns | JapaneseDigraphColumns;
  character: JapaneseCharacter;
}
