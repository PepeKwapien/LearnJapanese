import { Component, OnInit } from '@angular/core';
import { Syllabaries } from 'src/app/enums/syllabaries';
import { JapaneseSyllabariesService } from 'src/app/services/japanese-syllabaries.service';

@Component({
  selector: 'app-hiragana-page',
  templateUrl: './hiragana-page.component.html',
  styleUrls: ['./hiragana-page.component.css'],
})
export class HiraganaPageComponent implements OnInit {
  syllabary: Syllabaries = Syllabaries.hiragana;
  monographs: number = 46;
  digraphs: number = 21;
  diacritics: number = 25;
  description: string =
    'It is a phonetic lettering system. The word hiragana literally means "flowing" or "simple" kana ("simple" originally as contrasted with kanji).';

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
