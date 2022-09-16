import { Injectable } from '@angular/core';
import { PracticeModes } from '../enums/practice-modes';
import { PracticeFormModel } from '../interfaces/practice-form-model';

@Injectable({
  providedIn: 'root',
})
export class PracticeService {
  private defaultModel: PracticeFormModel = {
    mode: PracticeModes.characters,
    monographs: true,
    digraphs: false,
    diacritics: false,
    digraphsdiacritics: false,
  };
  private model: PracticeFormModel;

  constructor() {
    this.resetModel();
  }

  setModel(model: PracticeFormModel) {
    this.model = model;
  }

  getModel() {
    return this.model;
  }

  resetModel() {
    this.model = this.defaultModel;
  }
}
