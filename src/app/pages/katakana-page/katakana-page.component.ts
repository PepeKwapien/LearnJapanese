import { Component, OnInit } from '@angular/core';
import { Syllabaries } from 'src/app/enums/syllabaries';
import { JapaneseSyllabariesService } from 'src/app/services/japanese-syllabaries.service';

@Component({
  selector: 'app-katakana-page',
  templateUrl: './katakana-page.component.html',
  styleUrls: ['./katakana-page.component.css'],
})
export class KatakanaPageComponent implements OnInit {
  syllabary: Syllabaries = Syllabaries.katakana;
  description: string =
    'The word katakana means "fragmentary kana", as the katakana characters are derived from components or fragments of more complex kanji.';

  showLearn = false;
  showPractice = false;

  constructor(public jss: JapaneseSyllabariesService) {}

  ngOnInit(): void {}

  toggleLearn() {
    this.showPractice = false;
    this.showLearn = !this.showLearn;
  }

  togglePractice() {
    this.showLearn = false;
    this.showPractice = !this.showPractice;
  }
}
