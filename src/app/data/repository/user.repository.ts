import { Injectable } from "@angular/core";
import { IUserRepository } from "@core/repositories/iUser.repository";
import { UserRepositoryMapper } from "@data/mapper/user-repository.mapper";
import { Observable } from "rxjs";
import { ApiService } from "@data/base/api.service";
import { UserModel } from "@core/domain/user.model";
import { UserEntity } from "@entities/user.entity";
import { map } from "rxjs/operators";

@Injectable()
export class UserRepository extends IUserRepository {
	endpoint = "users";
	mapper: UserRepositoryMapper;

	constructor(private apiService: ApiService) {
		super();
		this.mapper = new UserRepositoryMapper();
	}

	createNewUser(user: UserModel): Observable<UserModel> {
		return this.apiService
			.post<UserEntity, UserModel>(`${this.endpoint}`, user)
			.pipe(map((user: UserModel) => this.mapper.mapFrom(user)));
	}

	deleteUser(userId: string): Observable<UserModel> {
		return this.apiService
			.delete<UserEntity>(`${this.endpoint}/${userId}`)
			.pipe(map((user: UserModel) => this.mapper.mapFrom(user)));
	}

	getAllUsers(): Observable<UserModel[]> {
		return this.apiService
			.get<UserEntity[]>(`${this.endpoint}`)
			.pipe(map((users: UserModel[]) => this.mapper.mapFromList(users)));
	}

	getSingleUser(userId: string): Observable<UserModel> {
		return this.apiService
			.get<UserEntity>(`${this.endpoint}/${userId}`)
			.pipe(map((user: UserModel) => this.mapper.mapFrom(user)));
	}

	updateUser(
		userId: string,
		user: Partial<UserModel>
	): Observable<UserModel> {
		return this.apiService
			.put<UserEntity, Partial<UserModel>>(
				`${this.endpoint}/${userId}`,
				user
			)
			.pipe(map((user: UserModel) => this.mapper.mapFrom(user)));
	}
}
