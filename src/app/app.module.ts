import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ButtonWithIconComponent } from './components/button-with-icon/button-with-icon.component';
import { SyllabaryPageComponent } from './components/syllabary-page/syllabary-page.component';
import { HiraganaPageComponent } from './pages/hiragana-page/hiragana-page.component';
import { NavigationButtonComponent } from './components/navigation-button/navigation-button.component';
import { CharactersTableComponent } from './components/characters-table/characters-table.component';
import { CharactersTableRowComponent } from './components/characters-table-row/characters-table-row.component';
import { CharactersTableHeaderComponent } from './components/characters-table-header/characters-table-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ButtonWithIconComponent,
    SyllabaryPageComponent,
    HiraganaPageComponent,
    NavigationButtonComponent,
    CharactersTableComponent,
    CharactersTableRowComponent,
    CharactersTableHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
