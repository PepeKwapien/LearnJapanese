import { Component, OnInit } from '@angular/core';
import { PracticeModes } from 'src/app/enums/practice-modes';
import { PracticeFormModel } from 'src/app/interfaces/practice-form-model';

@Component({
  selector: 'app-practice-form',
  templateUrl: './practice-form.component.html',
  styleUrls: ['./practice-form.component.css'],
})
export class PracticeFormComponent implements OnInit {
  model: PracticeFormModel;
  practiceModes = PracticeModes;

  constructor() {
    this.model = {
      mode: undefined,
      digraphs: false,
      diacritics: false,
      digraphsdiacritics: false,
    };
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.model);
  }
}
