import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SuccessComponent } from './Success/Success.component';
import { NgxMaskDirective } from 'ngx-mask';
import { IConfig, provideEnvironmentNgxMask } from 'ngx-mask';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { TableStartComponent } from './TableStart/TableStart.component';


const maskConfig: Partial<IConfig> = {

  validation: false,

};


@NgModule({
  declarations: [		
    AppComponent,
      SuccessComponent,
      TableStartComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot([{path:'Success',component:SuccessComponent},{path:'Form',component:AppComponent }]),
    BrowserAnimationsModule,MatRadioModule,MaterialModule,ReactiveFormsModule,NgxMaskDirective,MatTableModule,MatListModule,
    MatDialogModule
  ],
  providers: [provideEnvironmentNgxMask(maskConfig)],
  bootstrap: [TableStartComponent]
})
export class AppModule { }
