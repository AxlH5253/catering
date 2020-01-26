import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import {AlertController, LoadingController} from '@ionic/angular';
import { LogininfoService } from '../logininfo.service';

@Component({
  selector: 'app-updatemakanankotak',
  templateUrl: './updatemakanankotak.page.html',
  styleUrls: ['./updatemakanankotak.page.scss'],
})
export class UpdatemakanankotakPage implements OnInit {
 
 loading: any;
 id:any;
 idMakanan: any;
 items: any;

 username ="";
 namaMakanan ="";
 namaMakananb = "";

  constructor(
  	private http: HTTP,
  	private alertController: AlertController,
  	private loginservice: LogininfoService,
  	private router: Router,
  	private activatedRoute : ActivatedRoute,
  	private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.id = this.loginservice.userId;
  	this.username = this.loginservice.username;
  }

  ionViewDidEnter(){
     this.idMakanan = this.activatedRoute.snapshot.paramMap.get('id');
     this.username = this.loginservice.username;
     
     this.selectMakanan(this.idMakanan);
  }

  async presentLoading(value) {
    this.loading = await this.loadingController.create({
     message: 'Memuat',
     duration: 5000
    });
    if (value){
      await this.loading.present();
    }
  }

  selectMakanan(id) {
    this.items = [];
    var sampleData = [];
    this.http.post('http://'+this.loginservice.host+'/kevyn/tampilsatumakanankotak.php',{'id':id},{})
      .then(data => {
        sampleData = data.data.split("*");
        for ( var i of sampleData){
          var j = i.split("#");
          this.items.push(j);
        }
        this.namaMakanan = this.items[0][1];
      });
  }

  getPostData(id,namaMakanan,namaMakananb){
  	if(this.namaMakananb == ""){
  		this.emptyAlert();
  	}else if(namaMakananb == namaMakanan){
  		this.failKonPassAlert();
  	}else{
      this.presentLoading(true);
  		this.http.post('http://'+this.loginservice.host+'/kevyn/updatemakanankotak.php',{'id':id,'namaMakananb':namaMakananb},{})
  		.then(data => {
  			if(data.data == 'gagal'){
            	this.loading.dismiss();
  				this.failPassAlert();
  			}else{
            	this.loading.dismiss();
            	console.log(data.data);
  				this.router.navigateByUrl('/tabs/tabs/tab2');
  			}
  		}).catch(err => {
            this.loading.dismiss()
            .then(()=>{
               this.failConnectAlert();
            });      
      });
  	}
  }

  async failConnectAlert(){
    const alert = await this.alertController.create({
      header: 'Kesalahan',
      message: 'Gagal terhubung ke server, periksa koneksi internet anda',
      buttons: ['OK']
    });
    await alert.present();
  }

  async failPassAlert(){
    const alert = await this.alertController.create({
      header: 'Kesalahan',
      message: 'Gagal update nama makanan',
      buttons: ['OK']
    });
    await alert.present();
  }

  async failKonPassAlert(){
    const alert = await this.alertController.create({
      header: 'Kesalahan',
      message: 'Nama makanan baru sama dengan nama makanan lama',
      buttons: ['OK']
    });
    await alert.present();
  }

  async emptyAlert(){
    const alert = await this.alertController.create({
      header: 'Kesalahan',
      message: 'Nama makanan baru harus diisi!',
      buttons: ['OK']
    });
    await alert.present();
  }

}
