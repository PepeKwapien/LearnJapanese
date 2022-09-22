import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHome, faLeftLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  @Input() goBackWhere: string = '';

  public backIcon: IconDefinition = faLeftLong;
  public homeIcon: IconDefinition = faHome;

  constructor() {}

  ngOnInit(): void {}
}
