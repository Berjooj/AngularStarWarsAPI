import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-character-list-card',
    templateUrl: './character-list-card.component.html',
    styleUrls: ['./character-list-card.component.css']
})
export class CharacterListCardComponent implements OnInit {

    character = null

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.checkContent()
    }

    checkContent() {
        if (localStorage.getItem('character') === null)
            this.router.navigate(['home'])
        else
            this.character = JSON.parse(localStorage.getItem('character'))
    }

    newRequest() {
        localStorage.removeItem('character')
        this.router.navigate(['home'])
    }

}
