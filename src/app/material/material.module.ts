import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRippleModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const materials=[MatToolbarModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatSelectModule,
  MatRippleModule,MatDatepickerModule,MatNativeDateModule,MatIconModule,MatRadioModule,MatCheckboxModule,MatCardModule,MatSnackBarModule ]
@NgModule({
  
  imports: [materials],
  exports:[materials]
})
export class MaterialModule { }
 