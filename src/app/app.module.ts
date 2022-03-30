import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DataModule } from "@data/data.module";
import { PresentationModule } from "@presentation/presentation.module";
import { ServiceModule } from "@service/service.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		DataModule,
		ServiceModule,
		PresentationModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
