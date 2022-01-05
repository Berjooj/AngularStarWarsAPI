import {Component, OnInit, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-input-card-loader',
    templateUrl: './input-card-loader.component.html',
    styleUrls: ['./input-card-loader.component.css'],
    animations: [
        trigger('inputCardLoader', [
            state('show', style({
                opacity: 1
            })),
            state('hide', style({
                opacity: 0
            })),
            transition('show => hide', animate('500ms ease-out')),
            transition('show => hide', animate('500ms ease-out'))
        ])
    ]
})
export class InputCardLoaderComponent implements OnInit {

    @Input() show = false

    constructor() {
    }

    ngOnInit(): void {
    }

    get stateName(): string {
        return this.show ? 'show' : 'hide'
    }

    toggle(): void {
        this.show = !this.show
    }


}
