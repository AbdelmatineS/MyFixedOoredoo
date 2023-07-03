import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { IonicModule } from "@ionic/angular";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";

@NgModule({
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      IonicModule.forRoot(),

    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent]
  })


export class AppModule {}