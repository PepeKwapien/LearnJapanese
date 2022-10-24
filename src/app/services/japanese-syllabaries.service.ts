import { Injectable } from '@angular/core';
import {
  gDiacritics as gDiacriticsH,
  zDiacritics as zDiacriticsH,
  dDiacritics as dDiacriticsH,
  bDiacritics as bDiacriticsH,
  pDiacritics as pDiacriticsH,
} from 'src/app/data/hiragana/hiragana-diacritics';
import {
  gDiacritics as gDiacriticsK,
  zDiacritics as zDiacriticsK,
  dDiacritics as dDiacriticsK,
  bDiacritics as bDiacriticsK,
  pDiacritics as pDiacriticsK,
} from 'src/app/data/katakana/katakana-diacritics';
import {
  kDigraphs as kDigraphsH,
  sDigraphs as sDigraphsH,
  tDigraphs as tDigraphsH,
  nDigraphs as nDigraphsH,
  hDigraphs as hDigraphsH,
  mDigraphs as mDigraphsH,
  rDigraphs as rDigraphsH,
} from 'src/app/data/hiragana/hiragana-digraphs';
import {
  kDigraphs as kDigraphsK,
  sDigraphs as sDigraphsK,
  tDigraphs as tDigraphsK,
  nDigraphs as nDigraphsK,
  hDigraphs as hDigraphsK,
  mDigraphs as mDigraphsK,
  rDigraphs as rDigraphsK,
} from 'src/app/data/katakana/katakana-digraphs';
import {
  gDigraphsDiacritics as gDigraphsDiacriticsH,
  zDigraphsDiacritics as zDigraphsDiacriticsH,
  dDigraphsDiacritics as dDigraphsDiacriticsH,
  bDigraphsDiacritics as bDigraphsDiacriticsH,
  pDigraphsDiacritics as pDigraphsDiacriticsH,
} from 'src/app/data/hiragana/hiragana-digraphs-diacritics';
import {
  gDigraphsDiacritics as gDigraphsDiacriticsK,
  zDigraphsDiacritics as zDigraphsDiacriticsK,
  dDigraphsDiacritics as dDigraphsDiacriticsK,
  bDigraphsDiacritics as bDigraphsDiacriticsK,
  pDigraphsDiacritics as pDigraphsDiacriticsK,
} from 'src/app/data/katakana/katakana-digraphs-diacritics';
import {
  emptyMonographs as emptyMonographsH,
  hMonographs as hMonographsH,
  kMonographs as kMonographsH,
  mMonographs as mMonographsH,
  mnMonographs as mnMonographsH,
  nMonographs as nMonographsH,
  rMonographs as rMonographsH,
  sMonographs as sMonographsH,
  tMonographs as tMonographsH,
  wMonographs as wMonographsH,
  yMonographs as yMonographsH,
} from '../data/hiragana/hiragana-monographs';
import {
  emptyMonographs as emptyMonographsK,
  hMonographs as hMonographsK,
  kMonographs as kMonographsK,
  mMonographs as mMonographsK,
  mnMonographs as mnMonographsK,
  nMonographs as nMonographsK,
  rMonographs as rMonographsK,
  sMonographs as sMonographsK,
  tMonographs as tMonographsK,
  wMonographs as wMonographsK,
  yMonographs as yMonographsK,
} from '../data/katakana/katakana-monographs';
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
        return this.getKatakanaMonographs();
    }
  }

  private getHiraganaMonographs(): JapaneseCharacterRow[] {
    return [
      emptyMonographsH,
      kMonographsH,
      sMonographsH,
      tMonographsH,
      nMonographsH,
      hMonographsH,
      mMonographsH,
      yMonographsH,
      rMonographsH,
      wMonographsH,
      mnMonographsH,
    ];
  }

  private getKatakanaMonographs(): JapaneseCharacterRow[] {
    return [
      emptyMonographsK,
      kMonographsK,
      sMonographsK,
      tMonographsK,
      nMonographsK,
      hMonographsK,
      mMonographsK,
      yMonographsK,
      rMonographsK,
      wMonographsK,
      mnMonographsK,
    ];
  }

  public getDigraphs(syllabary: Syllabaries) {
    switch (syllabary) {
      case Syllabaries.hiragana:
        return this.getHiraganaDigraphs();
      case Syllabaries.katakana:
        return this.getKatakanaDigraphs();
    }
  }

  private getHiraganaDigraphs(): JapaneseCharacterRow[] {
    return [
      kDigraphsH,
      sDigraphsH,
      tDigraphsH,
      nDigraphsH,
      hDigraphsH,
      mDigraphsH,
      rDigraphsH,
    ];
  }

  private getKatakanaDigraphs(): JapaneseCharacterRow[] {
    return [
      kDigraphsK,
      sDigraphsK,
      tDigraphsK,
      nDigraphsK,
      hDigraphsK,
      mDigraphsK,
      rDigraphsK,
    ];
  }

  public getDiacritics(syllabary: Syllabaries) {
    switch (syllabary) {
      case Syllabaries.hiragana:
        return this.getHiraganaDiacritics();
      case Syllabaries.katakana:
        return this.getKatakanaDiacritics();
    }
  }

  private getHiraganaDiacritics(): JapaneseCharacterRow[] {
    return [
      gDiacriticsH,
      zDiacriticsH,
      dDiacriticsH,
      bDiacriticsH,
      pDiacriticsH,
    ];
  }

  private getKatakanaDiacritics(): JapaneseCharacterRow[] {
    return [
      gDiacriticsK,
      zDiacriticsK,
      dDiacriticsK,
      bDiacriticsK,
      pDiacriticsK,
    ];
  }

  public getDigraphsWithDiacritics(syllabary: Syllabaries) {
    switch (syllabary) {
      case Syllabaries.hiragana:
        return this.getHiraganaDigraphsWithDiacritics();
      case Syllabaries.katakana:
        return this.getKatakanaDigraphsWithDiacritics();
    }
  }

  private getHiraganaDigraphsWithDiacritics(): JapaneseCharacterRow[] {
    return [
      gDigraphsDiacriticsH,
      zDigraphsDiacriticsH,
      dDigraphsDiacriticsH,
      bDigraphsDiacriticsH,
      pDigraphsDiacriticsH,
    ];
  }

  private getKatakanaDigraphsWithDiacritics(): JapaneseCharacterRow[] {
    return [
      gDigraphsDiacriticsK,
      zDigraphsDiacriticsK,
      dDigraphsDiacriticsK,
      bDigraphsDiacriticsK,
      pDigraphsDiacriticsK,
    ];
  }

  public getMonographsColumns() {
    return [
      JapaneseMonographColumns.a,
      JapaneseMonographColumns.i,
      JapaneseMonographColumns.u,
      JapaneseMonographColumns.e,
      JapaneseMonographColumns.o,
    ];
  }

  public getDigraphsColumns() {
    return [
      JapaneseDigraphColumns.ya,
      JapaneseDigraphColumns.yu,
      JapaneseDigraphColumns.yo,
    ];
  }

  public getMonographsRows() {
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

  public getDiacriticsRows() {
    return [
      JapaneseDiacriticRows.g,
      JapaneseDiacriticRows.z,
      JapaneseDiacriticRows.d,
      JapaneseDiacriticRows.b,
      JapaneseDiacriticRows.p,
    ];
  }
}
