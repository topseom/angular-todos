import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { TodosService } from './todos.service';
import { HttpClientModule } from '@angular/common/http';
import { Http,HttpModule } from '@angular/http';

import {MatButtonModule,MatGridListModule,MatListModule,MatInputModule,MatIconModule,MatProgressBarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    MatInputModule,
    BrowserModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
