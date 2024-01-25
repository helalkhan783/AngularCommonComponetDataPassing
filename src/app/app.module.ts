import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogpostComponent } from './component/blogpost/blogpost.component';
import { TwoWayDataParsingComponent } from './component/two-way-data-parsing/two-way-data-parsing.component';
import {FormsModule} from "@angular/forms";
import { BlogItemComponent } from './component/blog-item/blog-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogpostComponent,
    TwoWayDataParsingComponent,
    BlogItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
