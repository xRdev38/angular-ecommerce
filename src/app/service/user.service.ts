import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { IUserService } from "@core/services/iUser.service";
import { IUserRepository } from "@core/repositories/iUser.repository";
import { UserModel } from "@core/domain/user.model";

@Injectable()
export class UserService extends IUserService {
	constructor(private UserRepository: IUserRepository) {
		super();
	}

	getSingleUser(userId: string): Observable<UserModel> {
		return this.UserRepository.getSingleUser(userId);
	}
	getAllUsers(): Observable<UserModel[]> {
		return this.UserRepository.getAllUsers();
	}

	createNewUser(user: UserModel): Observable<UserModel> {
		return this.UserRepository.createNewUser(user);
	}

	updateUser(
		userId: string,
		user: Partial<UserModel>
	): Observable<UserModel> {
		return this.UserRepository.updateUser(userId, user);
	}

	deleteUser(userId: string): Observable<UserModel> {
		return this.UserRepository.deleteUser(userId);
	}
}
