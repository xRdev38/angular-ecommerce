import { Identity } from "@core/domain/identity.model";
import { Address } from "@core/domain/address.model";

export interface UserModel {
	id: string;
	email: string;
	username: string;
	name: Identity;
	address: Address;
	password: string;
	phone: string;
}
