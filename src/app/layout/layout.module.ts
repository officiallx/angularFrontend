import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsidenavbarComponent } from './asidenavbar/asidenavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
  BaseComponent],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule
  ]
})
export class LayoutModule { }
