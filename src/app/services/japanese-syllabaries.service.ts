import { Injectable } from '@angular/core';
import { JapaneseCharacter } from '../interfaces/japanese-character';
import { JapaneseCharacterRow } from '../interfaces/japanese-characters-row';

@Injectable({
  providedIn: 'root',
})
export class JapaneseSyllabariesService {
  // Hiragana
  private hiragana: JapaneseCharacter[] = [];

  private monographs: JapaneseCharacterRow[] = [];
  private digraphs: JapaneseCharacterRow[] = [];
  private diacritics: JapaneseCharacterRow[] = [];

  // End of Hiragana

  constructor() {}
}
