import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public Fa:number;
  public Response;
  public holder:string = "°C";
  public holder2:string = "°F";
  constructor(public navCtrl: NavController) {

  }

  conversionC(){
    if(this.holder == "°C"){
      console.log("entro aqui tambien");
      this.Response = (this.Fa*(9/5))+32;
    }else{
      console.log("entro aqui");
      this.Response = (this.Fa-32)*(5/9);
    }
  }

  swap(){
    if(this.holder == "°C"){
      this.holder = "°F";
      this.holder2 = "°C";
      this.Response = "";
    }else{
      this.holder = "°C";
      this.holder2 = "°F";
      this.Response = "";
    }
  }

}
