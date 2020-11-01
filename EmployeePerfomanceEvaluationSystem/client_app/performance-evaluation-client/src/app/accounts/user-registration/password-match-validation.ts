import { AbstractControl } from '@angular/forms';


export class PasswordMatchValidation {

    static matchPassword(c: AbstractControl): { invalidPassword: boolean } | null {

        if (c.get('password').value !== c.get('confirmPassword').value) {
            return { invalidPassword: true };
        }

        return null;
    }
}