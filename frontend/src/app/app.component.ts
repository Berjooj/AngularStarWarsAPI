import {Component} from '@angular/core';
import {Router} from "@angular/router"

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    title = 'frontend';

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.checkLogin()
    }

    checkLogin(): void {
        if (localStorage.getItem('user') === null)
            this.router.navigate(['login'])
    }
}
