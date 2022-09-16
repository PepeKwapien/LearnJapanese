import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PracticeModes } from 'src/app/enums/practice-modes';
import { PracticeFormModel } from 'src/app/interfaces/practice-form-model';
import { PracticeService } from 'src/app/services/practice.service';

@Component({
  selector: 'app-practice-form',
  templateUrl: './practice-form.component.html',
  styleUrls: ['./practice-form.component.css'],
})
export class PracticeFormComponent implements OnInit {
  model: PracticeFormModel;
  practiceModes = PracticeModes;

  displayError: boolean = false;

  constructor(public practice: PracticeService, public router: Router) {
    this.model = {
      mode: undefined,
      digraphs: false,
      diacritics: false,
      digraphsdiacritics: false,
    };
  }

  ngOnInit(): void {}

  clearError() {
    this.displayError = false;
  }

  onSubmit() {
    if (!this.model.mode) {
      this.displayError = true;
    } else {
      this.practice.setModel(this.model);
      this.router.navigateByUrl('hiragana/practice');
    }
  }
}
