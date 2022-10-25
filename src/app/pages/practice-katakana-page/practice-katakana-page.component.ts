import { Component, OnInit } from '@angular/core';
import { Syllabaries } from 'src/app/enums/syllabaries';

@Component({
  selector: 'app-practice-katakana-page',
  templateUrl: './practice-katakana-page.component.html',
  styleUrls: ['./practice-katakana-page.component.css'],
})
export class PracticeKatakanaPageComponent implements OnInit {
  katakana = Syllabaries.katakana;

  constructor() {}

  ngOnInit(): void {}
}
