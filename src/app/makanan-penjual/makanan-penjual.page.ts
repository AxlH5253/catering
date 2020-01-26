import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {AlertController, Platform} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';

@Component({
  selector: 'app-makanan-penjual',
  templateUrl: './makanan-penjual.page.html',
  styleUrls: ['./makanan-penjual.page.scss'],
})
export class MakananPenjualPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private loginservice: LogininfoService,
    private router: Router,
    private platform: Platform) { }

  data: any;
  items: any;
  host: any;
  username = "";

  ngOnInit() {
    this.username = this.loginservice.username;
    this.host = this.loginservice.host;
  }

  goDpaket(jenis){
    this.router.navigate(['tabs/tabs/tab9',jenis])
  }

}
