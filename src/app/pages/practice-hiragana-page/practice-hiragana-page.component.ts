import { Component, OnInit } from '@angular/core';
import { Syllabaries } from 'src/app/enums/syllabaries';

@Component({
  selector: 'app-practice-hiragana-page',
  templateUrl: './practice-hiragana-page.component.html',
  styleUrls: ['./practice-hiragana-page.component.css'],
})
export class PracticeHiraganaPageComponent implements OnInit {
  hiragana = Syllabaries.hiragana;

  constructor() {}

  ngOnInit(): void {}
}
