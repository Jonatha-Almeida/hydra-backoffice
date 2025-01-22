import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    SidenavbarComponent
  ]
})
export class SharedModule { }
