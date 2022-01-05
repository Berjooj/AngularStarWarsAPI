import {Component, OnInit} from '@angular/core';
import {CharacterService} from "../../services/character/character.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-input-card-character',
    templateUrl: './input-card-character.component.html',
    styleUrls: ['./input-card-character.component.css']
})
export class InputCardCharacterComponent implements OnInit {

    isInputValid = false
    characterName = ''

    loading = false
    character = null

    constructor(private characterService: CharacterService, private router: Router) {
    }

    ngOnInit(): void {
    }

    newRequest(): void {
        this.character = null
    }

    characterRequest(): void {
        this.loading = true
        this.characterService.searchCharacter(this.characterName)
            .then(result => {
                console.log(result)
                setTimeout(() => {
                    this.character = result

                    if (this.character !== null) {
                        localStorage.setItem(
                            'character',
                            JSON.stringify(this.character)
                        )

                        this.router.navigate(['list'])
                    }

                    this.loading = false
                }, 250)

            })
            .catch(error => {
                this.loading = false
                console.log(error)
            })
    }
}

