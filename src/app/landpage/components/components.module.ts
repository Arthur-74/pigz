import { FormComponent } from './../form/form.component';
import { MainComponent } from './../main/main.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentsRoutingModule } from './components-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [
    FooterComponent,
    ToolbarComponent,
    HeaderComponent,
    FormComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    ToolbarComponent,
    HeaderComponent,
    FormComponent,
    MainComponent
  ]
})
export class ComponentsModule { }
