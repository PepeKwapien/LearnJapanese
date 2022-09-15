import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-with-icon',
  templateUrl: './button-with-icon.component.html',
  styleUrls: ['./button-with-icon.component.css'],
})
export class ButtonWithIconComponent implements OnInit {
  @Input() text: string = 'Click me';
  @Input() disabled: boolean = false;
  @Input() link: string = '';

  constructor() {}

  ngOnInit(): void {}
}
