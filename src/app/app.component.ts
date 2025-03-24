import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerceapp';
    constructor(private router:Router){}


  navigateTo(event:Event){
      const selectedvalue=(event.target as HTMLSelectElement).value;
      if(selectedvalue){
     this.router.navigate([selectedvalue]);
      }
  }
}
