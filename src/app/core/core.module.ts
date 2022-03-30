import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "@core/core-routing.module";
import { throwIfAlreadyLoaded } from "@core/utils/module-import-guard";

@NgModule({
	declarations: [],
	imports: [CommonModule, CoreRoutingModule]
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		throwIfAlreadyLoaded(parentModule, "CoreModule");
	}
}
