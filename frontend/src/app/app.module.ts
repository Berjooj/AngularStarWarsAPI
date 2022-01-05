import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputComponent} from './components/input/input.component';

import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {InputCardLoginComponent} from './components/input-card-login/input-card-login.component';
import {MatCardModule} from "@angular/material/card";
import {ButtonComponent} from './components/button/button.component';
import {HomeComponent} from './views/home/home.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {LoginComponent} from './views/login/login.component';
import {InputCardCharacterComponent} from './components/input-card-character/input-card-character.component';
import {InputCardLoaderComponent} from './components/input-card-loader/input-card-loader.component';
import {HttpClientModule} from "@angular/common/http";
import { ListComponent } from './views/list/list.component';
import { CharacterListCardComponent } from './components/character-list-card/character-list-card.component';

@NgModule({
    declarations: [
        AppComponent,
        InputComponent,
        InputCardLoginComponent,
        ButtonComponent,
        HomeComponent,
        LoginComponent,
        InputCardCharacterComponent,
        InputCardLoaderComponent,
        ListComponent,
        CharacterListCardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSidenavModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
