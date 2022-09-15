import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiraganaPageComponent } from './pages/hiragana-page/hiragana-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    title: 'Learn Japanese',
    component: LandingPageComponent,
  },
  {
    path: 'hiragana',
    title: 'Learn Japanese - Hiragana',
    component: HiraganaPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
