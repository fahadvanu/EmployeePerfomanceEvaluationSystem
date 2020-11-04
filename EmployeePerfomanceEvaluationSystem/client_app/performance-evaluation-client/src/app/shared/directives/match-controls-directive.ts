import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
    selector: '[compareEqual]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: ControlsValueMatchValidator, multi: true }
    ]
})
export class ControlsValueMatchValidator implements Validator {

    @Input('compareEqual') controlToCompare: string;
    @Input('reverse') reverse: string;

    validate(c: AbstractControl): { [key: string]: any } {
        return this.controlToCompare ? compareValueValidator(this.controlToCompare, this.reverse)(c)
            : null;
    }
}

export function compareValueValidator(controlToCompare: string, reverse: string): ValidatorFn {
    return (c: AbstractControl): { [key: string]: any } | null => {
        // self value
        let v = c.value;

        // control vlaue
        let e = c.root.get(controlToCompare);

        // value not equal
        if (e && v !== e.value && !isReverse(reverse)) {
            return {
                compareEqual: false
            }
        }

        // value equal and reverse
        if (e && v === e.value && isReverse(reverse)) {
            delete e.errors['compareEqual'];
            if (!Object.keys(e.errors).length) e.setErrors(null);
        }

        // value not equal and reverse
        if (e && v !== e.value && isReverse(reverse)) {
            e.setErrors({ compareEqual: false });
        }

        return null;
    };
}

function isReverse(reverse) {
    if (!reverse) return false;
    return reverse === 'true' ? true : false;
}



