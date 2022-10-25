import { Component, Input, OnInit } from '@angular/core';
import { PracticeModes } from 'src/app/enums/practice-modes';
import { Syllabaries } from 'src/app/enums/syllabaries';
import { JapaneseCharacter } from 'src/app/interfaces/japanese-character';
import { JapaneseCharacterRow } from 'src/app/interfaces/japanese-characters-row';
import { PracticeFormModel } from 'src/app/interfaces/practice-form-model';
import { JapaneseSyllabariesService } from 'src/app/services/japanese-syllabaries.service';
import { PracticeService } from 'src/app/services/practice.service';

@Component({
  selector: 'app-practice-module',
  templateUrl: './practice-module.component.html',
  styleUrls: ['./practice-module.component.css'],
})
export class PracticeModuleComponent implements OnInit {
  @Input() syllabary: Syllabaries;
  private characters: JapaneseCharacter[];
  public numberOfCharacters: number;
  public characterCountUpToNow: number;
  private currentCharacterIndex: number;
  private model: PracticeFormModel;
  public currentCharacter: JapaneseCharacter;
  public whichCharacters: string[] = [];

  constructor(
    public practice: PracticeService,
    public jss: JapaneseSyllabariesService
  ) {}

  ngOnInit(): void {
    this.model = this.practice.getModel();

    let characterRows: JapaneseCharacterRow[] = [];
    if (this.model.monographs) {
      this.whichCharacters.push('Monographs');
      characterRows = characterRows.concat(
        this.jss.getMonographs(this.syllabary)
      );
    }
    if (this.model.digraphs) {
      this.whichCharacters.push('Digraphs');
      characterRows = characterRows.concat(
        this.jss.getDigraphs(this.syllabary)
      );
    }
    if (this.model.diacritics) {
      this.whichCharacters.push('Diacritics');
      characterRows = characterRows.concat(
        this.jss.getDiacritics(this.syllabary)
      );
    }
    if (this.model.digraphsdiacritics) {
      this.whichCharacters.push('Digraphs with diacritics');
      characterRows = characterRows.concat(
        this.jss.getDigraphsWithDiacritics(this.syllabary)
      );
    }
    if (this.model.extended) {
      this.whichCharacters.push('Extended');
      characterRows = characterRows.concat(
        this.jss.getKatakanaExtendedCharacters()
      );
    }

    this.characters = characterRows
      .map((element) => element.cells)
      .reduce((element1, element2) => element1.concat(element2))
      .map((element) => element.character);

    this.numberOfCharacters = this.characters.length;
    this.characterCountUpToNow = 0;

    this.pickNextRandomCharacter();
  }

  public whatAmIPracticing(): string {
    if ((this, this.whichCharacters.length > 1)) {
      let result = this.whichCharacters.slice(0, -1).join(', ');
      return (
        result + ` and ${this.whichCharacters[this.whichCharacters.length - 1]}`
      );
    }

    return this.whichCharacters[0];
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  private pickNextRandomCharacter() {
    this.currentCharacterIndex = this.getRandomInt(this.characters.length);
    this.currentCharacter = this.characters[this.currentCharacterIndex];
  }

  nextCharacter() {
    if (this.characterCountUpToNow + 1 < this.numberOfCharacters) {
      this.characterCountUpToNow++;
    }

    this.characters.splice(this.currentCharacterIndex, 1);

    if (this.characters.length > 0) {
      this.pickNextRandomCharacter();
    }
  }

  getMode(): PracticeModes {
    return this.model.mode ?? PracticeModes.characters;
  }

  linkBack() {
    if (this.syllabary === Syllabaries.hiragana) {
      return '/hiragana';
    } else {
      return '/katakana';
    }
  }
}
