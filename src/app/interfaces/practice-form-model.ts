import { PracticeModes } from '../enums/practice-modes';

export interface PracticeFormModel {
  mode: PracticeModes | undefined;
  monographs: boolean;
  digraphs: boolean;
  diacritics: boolean;
  digraphsdiacritics: boolean;
}
