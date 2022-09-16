import { Component, Input, OnInit } from '@angular/core';
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
  private numberOfCharacters: number;
  private currentCharacter: number;
  private model: PracticeFormModel;

  constructor(
    public practice: PracticeService,
    public jss: JapaneseSyllabariesService
  ) {}

  ngOnInit(): void {
    this.model = this.practice.getModel();

    let characterRows: JapaneseCharacterRow[] = [];
    if (this.model.monographs) {
      characterRows.concat(this.jss.getMonographs(this.syllabary));
    }
    if (this.model.digraphs) {
      characterRows.concat(this.jss.getDigraphs(this.syllabary));
    }
    if (this.model.diacritics) {
      characterRows.concat(this.jss.getDiacritics(this.syllabary));
    }
    if (this.model.digraphsdiacritics) {
      characterRows.concat(this.jss.getDigraphsWithDiacritics(this.syllabary));
    }
  }
}
