import { Mapper } from "src/app/core/base/mapper";
import { UserEntity } from "@entities/user.entity";
import { UserModel } from "@core/domain/user.model";

export class UserRepositoryMapper implements Mapper<UserEntity, UserModel> {
	mapToList(param: UserModel[]): UserEntity[] {
		const userEntities: UserEntity[] = [];

		param.forEach((userModel: UserModel) => {
			userEntities.push({
				id: userModel.id,
				name: userModel.name,
				email: userModel.email,
				username: userModel.username,
				address: userModel.address,
				password: userModel.password,
				phone: userModel.phone
			});
		});

		return userEntities;
	}

	mapFromList(param: UserEntity[]): UserModel[] {
		const userModels: UserModel[] = [];

		param.forEach((userEntity: UserEntity) => {
			userModels.push({
				id: userEntity.id,
				name: userEntity.name,
				email: userEntity.email,
				username: userEntity.username,
				address: userEntity.address,
				password: userEntity.password,
				phone: userEntity.phone
			});
		});

		return userModels;
	}

	mapFrom(param: UserEntity): UserModel {
		return {
			id: param.id,
			name: param.name,
			email: param.email,
			username: param.username,
			address: param.address,
			password: param.password,
			phone: param.phone
		};
	}

	mapTo(param: UserModel): UserEntity {
		return {
			id: param.id,
			name: param.name,
			email: param.email,
			username: param.username,
			address: param.address,
			password: param.password,
			phone: param.phone
		};
	}
}
