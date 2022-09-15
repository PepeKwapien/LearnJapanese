import { Component, Input, OnInit } from '@angular/core';
import { JapaneseCharacter } from 'src/app/interfaces/japanese-character';

@Component({
  selector: 'app-characters-table-cell',
  templateUrl: './characters-table-cell.component.html',
  styleUrls: ['./characters-table-cell.component.css'],
})
export class CharactersTableCellComponent implements OnInit {
  @Input() character: JapaneseCharacter;

  constructor() {}

  ngOnInit(): void {}
}
