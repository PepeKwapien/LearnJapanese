import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiragana-page',
  templateUrl: './hiragana-page.component.html',
  styleUrls: ['./hiragana-page.component.css'],
})
export class HiraganaPageComponent implements OnInit {
  syllabary: string = 'Hiragana';
  monographs: number = 45;
  digraphs: number = 21;
  diacritics: number = 25;
  description: string =
    'It is a phonetic lettering system. The word hiragana literally means "flowing" or "simple" kana ("simple" originally as contrasted with kanji).';

  constructor() {}

  ngOnInit(): void {}
}
