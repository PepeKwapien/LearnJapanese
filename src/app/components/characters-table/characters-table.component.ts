import { Component, Input, OnInit } from '@angular/core';
import { JapaneseDigraphColumns } from 'src/app/enums/japanese-digraph-columns';
import { JapaneseMonographColumns } from 'src/app/enums/japanese-monograph-columns';
import { JapaneseCharacterRow } from 'src/app/interfaces/japanese-characters-row';

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.css'],
})
export class CharactersTableComponent implements OnInit {
  @Input() title: string = 'Syllabary';
  @Input() rows: JapaneseCharacterRow[] = [];
  @Input() columns: (JapaneseMonographColumns | JapaneseDigraphColumns)[] = [];

  constructor() {}

  ngOnInit(): void {
    this.adjustRows();
  }

  private adjustRows() {
    this.rows.forEach((row, index) => {
      if (row.cells.length !== this.columns.length) {
        let rowColumns: string[] = row.cells.map((element) => element.column);

        this.rows[index] = { row: row.row, cells: [] };

        for (let i = 0, j = 0; i < this.columns.length; i++) {
          if (!rowColumns.includes(this.columns[i])) {
            this.rows[index].cells.push({
              column: this.columns[i],
              character: { character: '', transcription: '' },
            });
          } else {
            this.rows[index].cells.push(row.cells[j]);
            j++;
          }
        }
      }
    });
  }
}
