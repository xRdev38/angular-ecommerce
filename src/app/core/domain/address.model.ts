import { Geolocation } from "@core/domain/geolocation.model";

export interface Address {
	city: string;
	street: string;
	number: number;
	zipcode: string;
	geolocation: Geolocation;
}
