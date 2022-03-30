import { NgModule } from "@angular/core";
import { IUserRepository } from "@core/repositories/iUser.repository";
import { IUserService } from "@core/services/iUser.service";
import { UserService } from "./user.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { UserRepository } from "@data/repository/user.repository";
import { HttpConfigInterceptor } from "@service/interceptors/httpconfig.interceptor";

@NgModule({
	providers: [
		{ provide: IUserRepository, useClass: UserRepository },
		{ provide: IUserService, useClass: UserService },
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpConfigInterceptor,
			multi: true
		}
	]
})
export class ServiceModule {}
