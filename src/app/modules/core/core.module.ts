import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from './../../pipes/pipes.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    PipesModule
  ],
  declarations: [],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    PipesModule
  ]
})
export class CoreModule { }
