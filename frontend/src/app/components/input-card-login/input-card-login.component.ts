import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router"

@Component({
    selector: 'app-input-card-login',
    templateUrl: './input-card-login.component.html',
    styleUrls: ['./input-card-login.component.css']
})
export class InputCardLoginComponent implements OnInit {

    isInputValid = false
    email = ''

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.checkLogin()
    }

    checkLogin(): void {
        if (localStorage.getItem('user') !== null)
            this.router.navigate(['home'])
    }

    login(): void {
        localStorage.setItem(
            'user',
            this.email
        )

        document.getElementById('rootLogin').className += ' fade-out-card'

        setTimeout(() => {
            this.router.navigate(['home'])
        }, 200)
    }
}
