import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRight,
  faBook,
  faFaceSmile,
  faLanguage,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-with-icon',
  templateUrl: './button-with-icon.component.html',
  styleUrls: ['./button-with-icon.component.css'],
})
export class ButtonWithIconComponent implements OnInit {
  @Input() text: string = 'Click me';
  @Input() disabled: boolean = false;
  @Input() whichIcon: string;
  public icon: IconDefinition;

  constructor() {}

  ngOnInit(): void {
    switch (this.whichIcon) {
      case 'language':
        this.icon = faLanguage;
        break;
      case 'learn':
        this.icon = faBook;
        break;
      case 'practice':
        this.icon = faPencil;
        break;
      case 'next':
        this.icon = faArrowRight;
        break;
      default:
        this.icon = faFaceSmile;
        break;
    }
  }
}
