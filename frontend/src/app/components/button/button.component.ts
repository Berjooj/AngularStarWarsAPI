import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

    @Input() buttonClass = 'enabled'

    @Input() textButton = 'Próximo'

    constructor() {
    }

    ngOnInit(): void {
    }
}