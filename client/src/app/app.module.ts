import 'hammerjs';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

// import { MaterialModule } from '@angular/material';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import {MdInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdIconModule} from '@angular/material';




import 'hammerjs';
import { AppComponent }  from './app.component';
import { TasksComponent }  from './components/tasks/tasks.component';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    MdInputModule,
    // MaterialModule.forRoot(),
    BrowserAnimationsModule,
    MdButtonModule,
    MdIconModule,
    MdCheckboxModule
  ],
  declarations: [ AppComponent, TasksComponent ],
  bootstrap:    [ AppComponent ],
  exports: [MdButtonModule, MdCheckboxModule]
})
export class AppModule { }
