import { Flight } from "./flight";

export class Journey{
    flights  = [new Flight()];
    origin: string;
    destination : string;
    price: number
}