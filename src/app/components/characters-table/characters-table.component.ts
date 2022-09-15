import { Component, Input, OnInit } from '@angular/core';
import { JapaneseCharacterRow } from 'src/app/interfaces/japanese-characters-row';
import { JapaneseSyllabariesService } from 'src/app/services/japanese-syllabaries.service';

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.css'],
})
export class CharactersTableComponent implements OnInit {
  @Input() title: string = 'Syllabary';
  @Input() rows: JapaneseCharacterRow[] = [];
  @Input() columns: string[] = [];

  constructor(public jss: JapaneseSyllabariesService) {}

  ngOnInit(): void {}
}
