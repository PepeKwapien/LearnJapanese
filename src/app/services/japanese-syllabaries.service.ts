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
import { JapaneseDiacriticRows } from '../enums/japanese-diacritic-rows';
import { JapaneseDigraphColumns } from '../enums/japanese-digraph-columns';
import { JapaneseMonographColumns } from '../enums/japanese-monograph-columns';
import { JapaneseMonographRows } from '../enums/japanese-monograph-rows';
import { Syllabaries } from '../enums/syllabaries';
import { JapaneseCharacterRow } from '../interfaces/japanese-characters-row';

@Injectable({
  providedIn: 'root',
})
export class JapaneseSyllabariesService {
  constructor() {}

  public getMonographs(syllabary: Syllabaries) {
    switch (syllabary) {
      case Syllabaries.hiragana:
        return this.getHiraganaMonographs();
      case Syllabaries.katakana:
        return [];
    }
  }

  private getHiraganaMonographs(): JapaneseCharacterRow[] {
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

  public getDigraphs(syllabary: Syllabaries) {
    switch (syllabary) {
      case Syllabaries.hiragana:
        return this.getHiraganaDigraphs();
      case Syllabaries.katakana:
        return [];
    }
  }

  private getHiraganaDigraphs(): JapaneseCharacterRow[] {
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

  public getDiacritics(syllabary: Syllabaries) {
    switch (syllabary) {
      case Syllabaries.hiragana:
        return this.getHiraganaDiacritics();
      case Syllabaries.katakana:
        return [];
    }
  }

  private getHiraganaDiacritics(): JapaneseCharacterRow[] {
    return [gDiacritics, zDiacritics, dDiacritics, bDiacritics, pDiacritics];
  }

  public getDigraphsWithDiacritics(syllabary: Syllabaries) {
    switch (syllabary) {
      case Syllabaries.hiragana:
        return this.getHiraganaDigraphsWithDiacritics();
      case Syllabaries.katakana:
        return [];
    }
  }

  private getHiraganaDigraphsWithDiacritics(): JapaneseCharacterRow[] {
    return [
      gDigraphsDiacritics,
      zDigraphsDiacritics,
      dDigraphsDiacritics,
      bDigraphsDiacritics,
      pDigraphsDiacritics,
    ];
  }

  public getMonographsColumns(syllabary: Syllabaries) {
    switch (syllabary) {
      case Syllabaries.hiragana:
        return this.getHiraganaMonographsColumns();
      case Syllabaries.katakana:
        return [];
    }
  }

  private getHiraganaMonographsColumns(): JapaneseMonographColumns[] {
    return [
      JapaneseMonographColumns.a,
      JapaneseMonographColumns.i,
      JapaneseMonographColumns.u,
      JapaneseMonographColumns.e,
      JapaneseMonographColumns.o,
    ];
  }

  public getDigraphsColumns(syllabary: Syllabaries) {
    switch (syllabary) {
      case Syllabaries.hiragana:
        return this.getHiraganaDigraphsColumns();
      case Syllabaries.katakana:
        return [];
    }
  }

  private getHiraganaDigraphsColumns(): JapaneseDigraphColumns[] {
    return [
      JapaneseDigraphColumns.ya,
      JapaneseDigraphColumns.yu,
      JapaneseDigraphColumns.yo,
    ];
  }

  public getMonographsRows(syllabary: Syllabaries) {
    switch (syllabary) {
      case Syllabaries.hiragana:
        return this.getHiraganaMonographsRows();
      case Syllabaries.katakana:
        return [];
    }
  }

  private getHiraganaMonographsRows() {
    return [
      JapaneseMonographRows.empty,
      JapaneseMonographRows.k,
      JapaneseMonographRows.s,
      JapaneseMonographRows.t,
      JapaneseMonographRows.n,
      JapaneseMonographRows.h,
      JapaneseMonographRows.m,
      JapaneseMonographRows.y,
      JapaneseMonographRows.r,
      JapaneseMonographRows.w,
      JapaneseMonographRows.mn,
    ];
  }

  public getDiacriticsRows(syllabary: Syllabaries) {
    switch (syllabary) {
      case Syllabaries.hiragana:
        return this.getHiraganaDiacriticsRows();
      case Syllabaries.katakana:
        return [];
    }
  }

  private getHiraganaDiacriticsRows() {
    return [
      JapaneseDiacriticRows.g,
      JapaneseDiacriticRows.z,
      JapaneseDiacriticRows.d,
      JapaneseDiacriticRows.b,
      JapaneseDiacriticRows.p,
    ];
  }
}
