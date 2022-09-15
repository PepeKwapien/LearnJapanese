import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ButtonWithIconComponent } from './components/button-with-icon/button-with-icon.component';
import { SyllabaryPageComponent } from './components/syllabary-page/syllabary-page.component';
import { HiraganaPageComponent } from './pages/hiragana-page/hiragana-page.component';
import { NavigationButtonComponent } from './components/navigation-button/navigation-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ButtonWithIconComponent,
    SyllabaryPageComponent,
    HiraganaPageComponent,
    NavigationButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
