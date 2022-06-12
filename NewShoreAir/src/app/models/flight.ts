import { Transport } from "./transport";

export class Flight{
    transport = new Transport();
    origin: string;
    destination : string;
    price: number
}