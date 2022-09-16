import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PracticeModes } from 'src/app/enums/practice-modes';
import { JapaneseCharacter } from 'src/app/interfaces/japanese-character';

@Component({
  selector: 'app-practice-module-character',
  templateUrl: './practice-module-character.component.html',
  styleUrls: ['./practice-module-character.component.css'],
})
export class PracticeModuleCharacterComponent implements OnInit, OnChanges {
  @Input() mode: PracticeModes;
  @Input() character: JapaneseCharacter;

  public question: string;
  public answer: string;

  public showAnswer: boolean;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.prepareQuestionAndAnswer();
  }

  ngOnInit(): void {
    this.prepareQuestionAndAnswer();
  }

  private prepareQuestionAndAnswer() {
    this.showAnswer = false;

    let innerMode = this.mode;
    if (innerMode == PracticeModes.both) {
      innerMode =
        Math.random() >= 0.5
          ? PracticeModes.characters
          : PracticeModes.transcription;
    }

    this.setQuestionAndAnswer(innerMode);
  }

  private setQuestionAndAnswer(mode: PracticeModes) {
    switch (mode) {
      case PracticeModes.characters:
        this.question = this.character.character;
        this.answer = this.character.transcription;
        break;
      case PracticeModes.transcription:
        this.question = this.character.transcription;
        this.answer = this.character.character;
        break;
    }
  }

  onShowAnswer() {
    this.showAnswer = true;
  }
}
