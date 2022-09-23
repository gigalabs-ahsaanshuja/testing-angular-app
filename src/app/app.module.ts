import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableBasicExample } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { VideoComponentComponent } from './video-component/video-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, TableBasicExample, VideoComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
