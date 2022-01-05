import {Injectable} from '@angular/core';
import {Character} from "../../models/character.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CharacterService {

    private characterResponse: Character;
    private characterList;
    private baseUrl = 'https://swapi.dev/api/'

    constructor(private httpClient: HttpClient) {
        this.characterList = [
            {name: 'Luke Skywalker', id: 1},
            {name: 'C-3PO', id: 2},
            {name: 'R2-D2', id: 3},
            {name: 'Darth Vader', id: 4},
            {name: 'Leia Organa', id: 5}
        ]
    }

    searchCharacter = async (name): Promise<any> => {
        let character = this.getCharacterId(name)
        if (character.length)
            character = character[0]
        else
            return null

        const r = await this.httpClient.get<any>(this.baseUrl + 'people/' + character['id']).toPromise()
        this.characterResponse = {
            name: r.name,
            films: r.films ?? [],
            planets: r.planets ?? [],
            species: r.species ?? [],
            starships: r.starships ?? [],
            vehicles: r.vehicles ?? [],
        }

        for (let i = 0; i < this.characterResponse.films.length; i++)
            this.characterResponse.films[i] = await this.itemRequest(this.characterResponse.films[i], 'title')

        for (let i = 0; i < this.characterResponse.planets.length; i++)
            this.characterResponse.planets[i] = await this.itemRequest(this.characterResponse.planets[i], 'name')

        for (let i = 0; i < this.characterResponse.species.length; i++)
            this.characterResponse.species[i] = await this.itemRequest(this.characterResponse.species[i], 'name')

        for (let i = 0; i < this.characterResponse.starships.length; i++)
            this.characterResponse.starships[i] = await this.itemRequest(this.characterResponse.starships[i], 'name')

        for (let i = 0; i < this.characterResponse.vehicles.length; i++)
            this.characterResponse.vehicles[i] = await this.itemRequest(this.characterResponse.vehicles[i], 'name')

        return this.characterResponse
    }

    itemRequest = async (url, field): Promise<any> => {
        return new Promise<any>((response, error) => {
            this.httpClient
                .get<any>(url)
                .subscribe(item => {
                    response(item[field])
                })
        })
    }

    getCharacterId(name)
        :
        string {
        return this.characterList.filter((el) => {
            return el.name === name
        })
    }
}
