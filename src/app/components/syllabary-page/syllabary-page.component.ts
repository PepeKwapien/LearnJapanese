import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-syllabary-page',
  templateUrl: './syllabary-page.component.html',
  styleUrls: ['./syllabary-page.component.css'],
})
export class SyllabaryPageComponent implements OnInit {
  @Input() syllabary: string = 'Syllabary';
  @Input() description: string = '';

  constructor() {}

  ngOnInit(): void {}
}
