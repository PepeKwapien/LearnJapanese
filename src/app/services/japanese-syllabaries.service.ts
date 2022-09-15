import { Injectable } from '@angular/core';
import {
  gDiacritics,
  zDiacritics,
  dDiacritics,
  bDiacritics,
  pDiacritics,
} from '../data/hiragana-diacritics';
import {
  kDigraphs,
  sDigraphs,
  tDigraphs,
  nDigraphs,
  hDigraphs,
  mDigraphs,
  rDigraphs,
} from '../data/hiragana-digraphs';
import {
  gDigraphsDiacritics,
  zDigraphsDiacritics,
  dDigraphsDiacritics,
  bDigraphsDiacritics,
  pDigraphsDiacritics,
} from '../data/hiragana-digraphs-diacritics';
import {
  emptyMonographs,
  hMonographs,
  kMonographs,
  mMonographs,
  mnMonographs,
  nMonographs,
  rMonographs,
  sMonographs,
  tMonographs,
  wMonographs,
  yMonographs,
} from '../data/hiragana-monographs';
import { JapaneseMonographColumns } from '../enums/japanese-monograph-columns';
import { JapaneseCharacterRow } from '../interfaces/japanese-characters-row';

@Injectable({
  providedIn: 'root',
})
export class JapaneseSyllabariesService {
  constructor() {}

  public getHiraganaMonographs(): JapaneseCharacterRow[] {
    return [
      emptyMonographs,
      kMonographs,
      sMonographs,
      tMonographs,
      nMonographs,
      hMonographs,
      mMonographs,
      yMonographs,
      rMonographs,
      wMonographs,
      mnMonographs,
    ];
  }

  public getHiraganaDigraphs(): JapaneseCharacterRow[] {
    return [
      kDigraphs,
      sDigraphs,
      tDigraphs,
      nDigraphs,
      hDigraphs,
      mDigraphs,
      rDigraphs,
    ];
  }

  public getHiraganaDiacritics(): JapaneseCharacterRow[] {
    return [gDiacritics, zDiacritics, dDiacritics, bDiacritics, pDiacritics];
  }

  public getHiraganaDigraphsWithDiacritics(): JapaneseCharacterRow[] {
    return [
      gDigraphsDiacritics,
      zDigraphsDiacritics,
      dDigraphsDiacritics,
      bDigraphsDiacritics,
      pDigraphsDiacritics,
    ];
  }

  public getHiraganaMonographsColumns(): JapaneseMonographColumns[] {
    return [
      JapaneseMonographColumns.a,
      JapaneseMonographColumns.i,
      JapaneseMonographColumns.u,
      JapaneseMonographColumns.e,
      JapaneseMonographColumns.o,
    ];
  }
}
