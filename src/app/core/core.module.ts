import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";
import { throwIfAlreadyLoaded } from "./utils/module-import-guard";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpConfigInterceptor } from "@core/interceptors/httpconfig.interceptor";
import { CacheInterceptor } from "@core/interceptors/cache.interceptor";

@NgModule({
	declarations: [],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpConfigInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: CacheInterceptor,
			multi: true
		}
	],
	imports: [CommonModule, CoreRoutingModule]
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		throwIfAlreadyLoaded(parentModule, "CoreModule");
	}
}
