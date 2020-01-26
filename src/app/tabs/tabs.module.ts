import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LogininfoService } from '../logininfo.service';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs.page';
 
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
        { path: 'tab1', loadChildren: '../beranda-penjual/beranda-penjual.module#BerandaPenjualPageModule'},
        { path: 'tab2', loadChildren: '../makanan-penjual/makanan-penjual.module#MakananPenjualPageModule' },
        { path: 'tab3', loadChildren: '../profil/profil.module#ProfilPageModule'  },
        { path: 'tab4/:id', loadChildren: '../detailpesanan/detailpesanan.module#DetailpesananPageModule' },
        { path: 'tab5/:id', loadChildren: '../petapesanan/petapesanan.module#PetapesananPageModule' },
        { path: 'tab6', loadChildren: '../tampilprofil/tampilprofil.module#TampilprofilPageModule' },
        { path: 'tab7', loadChildren: '../gkatasandi/gkatasandi.module#GkatasandiPageModule' },
        { path: 'tab8', loadChildren: '../gprofil/gprofil.module#GprofilPageModule' },
        { path: 'tab9/:id', loadChildren: '../dpaket/dpaket.module#DpaketPageModule' },
        { path: 'tab10/:id', loadChildren: '../aturmknan/aturmknan.module#AturmknanPageModule' },
        { path: 'tab11/:id', loadChildren: '../updatepaket/updatepaket.module#UpdatepaketPageModule' },
        { path: 'tab12/:id', loadChildren: '../aturmknankotak/aturmknankotak.module#AturmknankotakPageModule' },
        { path: 'tab13/:data', loadChildren: '../tambahpaket/tambahpaket.module#TambahpaketPageModule' },
        { path: 'tab14/:id', loadChildren: '../updatemakanankotak/updatemakanankotak.module#UpdatemakanankotakPageModule' },
        { path: 'tab15/:id', loadChildren: '../updatemakananprasmanan/updatemakananprasmanan.module#UpdatemakananprasmananPageModule' },
        { path: 'tab16/:id', loadChildren: '../tambahmakanan/tambahmakanan.module#TambahmakananPageModule' },
        { path: 'tab17/:id', loadChildren: '../tambahmakanankotak/tambahmakanankotak.module#TambahmakanankotakPageModule' },
        { path: 'tab18', loadChildren: '../rate-penjual/rate-penjual.module#RatePenjualPageModule' },
    ]
  },
  {
    path:'',
    redirectTo:'/tabs/tab1',
    pathMatch:'full'
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}