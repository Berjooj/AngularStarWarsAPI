import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './views/login/login.component'
import {HomeComponent} from './views/home/home.component'
import {ListComponent} from './views/list/list.component'

const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "list",
        component: ListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
