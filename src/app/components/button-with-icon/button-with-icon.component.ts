import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-with-icon',
  templateUrl: './button-with-icon.component.html',
  styleUrls: ['./button-with-icon.component.css'],
})
export class ButtonWithIconComponent implements OnInit {
  @Input() text: string = 'Click me';
  @Input() disabled: boolean = false;
  @Input() icon: IconDefinition = faBookOpen;

  constructor() {}

  ngOnInit(): void {}
}
