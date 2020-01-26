import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BerandaPenjualPage } from './beranda-penjual.page';

const routes: Routes = [
  {
    path: '',
    component: BerandaPenjualPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BerandaPenjualPage]
})
export class BerandaPenjualPageModule {}
