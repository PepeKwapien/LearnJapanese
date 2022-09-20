import { Component, Input, OnInit } from '@angular/core';
import { JapaneseDiacriticRows } from 'src/app/enums/japanese-diacritic-rows';
import { JapaneseDigraphColumns } from 'src/app/enums/japanese-digraph-columns';
import { JapaneseMonographColumns } from 'src/app/enums/japanese-monograph-columns';
import { JapaneseMonographRows } from 'src/app/enums/japanese-monograph-rows';
import { JapaneseCharacterRow } from 'src/app/interfaces/japanese-characters-row';

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.css'],
})
export class CharactersTableComponent implements OnInit {
  @Input() title: string = 'Syllabary';
  @Input() tableRows: JapaneseCharacterRow[] = [];
  @Input() columns: (JapaneseMonographColumns | JapaneseDigraphColumns)[] = [];
  @Input() rows: (JapaneseMonographRows | JapaneseDiacriticRows)[] = [];

  constructor() {}

  ngOnInit(): void {
    this.fillMissingRows();
    this.fillMissingCells();
  }

  public isRowEmpty(row: JapaneseCharacterRow) {
    return (
      row.cells.filter((cell) => !cell.character.character).length ===
      this.columns.length
    );
  }

  private fillMissingRows() {
    if (this.rows.length <= this.tableRows.length) {
      return;
    }

    for (let i = 0; i < this.rows.length; i++) {
      if (i >= this.tableRows.length) {
        this.tableRows.push({ row: this.rows[i], cells: [] });
      } else if (this.rows[i] !== this.tableRows[i].row) {
        this.tableRows.splice(i, 0, { row: this.rows[i], cells: [] });
      }
    }
  }

  private fillMissingCells() {
    this.tableRows.forEach((row, index) => {
      if (row.cells.length !== this.columns.length) {
        let rowColumns: string[] = row.cells.map((element) => element.column);

        this.tableRows[index] = { row: row.row, cells: [] };

        for (let i = 0, j = 0; i < this.columns.length; i++) {
          if (!rowColumns.includes(this.columns[i])) {
            this.tableRows[index].cells.push({
              column: this.columns[i],
              character: { character: '', transcription: '' },
            });
          } else {
            this.tableRows[index].cells.push(row.cells[j]);
            j++;
          }
        }
      }
    });
  }
}
