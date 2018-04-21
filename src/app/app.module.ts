import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { EasyUIModule } from "ng-easyui/components/easyui/easyui.module";
import { AppComponent } from "./app.component";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    EasyUIModule
  ]
})
export class AppModule { }
