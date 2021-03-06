import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsidenavbarComponent } from './asidenavbar/asidenavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import {AppModule} from '../app.module';

@NgModule({
  declarations: [
    ],
  imports: [
    CommonModule,
    RouterModule,
    AppModule
  ]
})
export class LayoutModule { }
