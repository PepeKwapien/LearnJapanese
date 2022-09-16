import { PracticeModes } from '../enums/practice-modes';

export interface PracticeFormModel {
  mode: PracticeModes | undefined;
  digraphs: boolean;
  diacritics: boolean;
  digraphsdiacritics: boolean;
}
