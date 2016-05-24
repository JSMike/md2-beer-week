import {Beer} from './beer.model';

export class Brewery {
    id: number;
    name: string;
    est: number;
    website: string;
    location: string;
    img: string;
    beers: Beer[];
    about: string;
}
