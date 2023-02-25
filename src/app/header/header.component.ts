import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType: String='default';
  constructor(private router:Router){}
  ngOnInit():void{
    this.router.events.subscribe((val:any)=>{
      console.warn(val.url)
      if(val.url){
        if(localStorage.getItem('admin')&& val.url.includes('admin')){
          console.warn('in admin area')
          this.menuType="admin"
        }
        else {
          console.warn('out of admin area')
          this.menuType="default"
        }
      }
    }
    )
  }
  logOut(){
    localStorage.removeItem('admin');
    this.router.navigate(['/']);
  }

}
