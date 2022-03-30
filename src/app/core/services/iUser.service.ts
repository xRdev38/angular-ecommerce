import { Observable } from "rxjs";
import { UserModel } from "@core/domain/user.model";

export abstract class IUserService {
	abstract getSingleUser(userId: string): Observable<UserModel>;
	abstract getAllUsers(): Observable<UserModel[]>;
	abstract createNewUser(user: UserModel): Observable<UserModel>;
	abstract updateUser(
		userId: string,
		user: Partial<UserModel>
	): Observable<UserModel>;
	abstract deleteUser(userId: string): Observable<UserModel>;
}
