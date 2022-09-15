import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyllabaryPageComponent } from './components/syllabary-page/syllabary-page.component';
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
    component: SyllabaryPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
