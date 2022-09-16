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

  displayModeError: boolean = false;
  displayIncludeError: boolean = false;

  constructor(public practice: PracticeService, public router: Router) {
    this.model = {
      mode: undefined,
      monographs: true,
      digraphs: false,
      diacritics: false,
      digraphsdiacritics: false,
    };
  }

  ngOnInit(): void {}

  clearModeError() {
    this.displayModeError = false;
  }
  clearIncludeError() {
    this.displayIncludeError = false;
  }

  onSubmit() {
    if (!this.model.mode) {
      this.displayModeError = true;
    } else if (
      !(
        this.model.monographs ||
        this.model.digraphs ||
        this.model.diacritics ||
        this.model.digraphsdiacritics
      )
    ) {
      this.displayIncludeError = true;
    } else {
      this.practice.setModel(this.model);
      this.router.navigateByUrl('hiragana/practice');
    }
  }
}
