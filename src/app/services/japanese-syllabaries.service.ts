import { Injectable } from '@angular/core';
import { JapaneseDiacriticRows } from '../enums/japanese-diacritic-rows';
import { JapaneseMonographColumns } from '../enums/japanese-monograph-columns';
import { JapaneseMonographRows } from '../enums/japanese-monograph-rows';
import { JapaneseCharacter } from '../interfaces/japanese-character';
import { JapaneseCharacterRow } from '../interfaces/japanese-characters-row';

@Injectable({
  providedIn: 'root',
})
export class JapaneseSyllabariesService {
  constructor() {}
}
