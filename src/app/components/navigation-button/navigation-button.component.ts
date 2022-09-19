import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.css'],
})
export class NavigationButtonComponent implements OnInit {
  @Input() link: string = '';
  @Input() text: string = 'Click me';
  @Input() disabled: boolean = false;
  @Input() whichIcon: string;

  constructor() {}

  ngOnInit(): void {}
}
