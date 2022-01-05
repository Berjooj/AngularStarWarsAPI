import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

    inputClass = 'danger'

    @Input() fieldType = 'email'
    @Input() placeholderText = 'exemplo@exemplo.com'
    @Input() required = true
    @Input() valueField = ''
    @Input() invalidFeedbackMessage = 'Email inválido'
    @Input() minInput = 5

    @Output() inputValue = new EventEmitter<string>();
    @Output() validated = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit(): void {
        this.validated.emit(this.inputClass === 'success')
        this.validate('')
    }

    validate(evtValue: string): void {
        if (!this.valueField.length && !this.required)
            this.inputClass = 'warning'
        else if (this.valueField.length < this.minInput)
            this.inputClass = 'danger'
        else
            this.inputClass = 'success'

        this.validated.emit(this.inputClass === 'success')
        this.inputValue.emit(this.valueField)
    }

}
