import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";
@Injectable()
export class ValidateExtendService {

    static email(control: AbstractControl) {
        if (!control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {

            return { 'invalidEmailAddress': true };
        }
    }

    static matchingEmail(emailKey: string, confirmEmailKey: string) {

        return (group: FormGroup): { [key: string]: any } => {
            let email = group.controls[emailKey];
            let confirmEmail = group.controls[confirmEmailKey];

            if (email.value !== confirmEmail.value) {
                return {
                    mismatchedEmail: true
                };
            }
        }
    }
    static matchingPassword(passwordKey: string, confirmPasswordKey: string) {

        return (group: FormGroup): { [key: string]: any } => {
            let password = group.controls[passwordKey];
            let confirmPassword = group.controls[confirmPasswordKey];

            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPassword: true
                };
            }
        }
    }
    static listEmail(email: string) {
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email)) {
            return false;
        }
        return true;
    }
    static isFloat(objectKey: string) {
        return (group: FormGroup): { [key: string]: any } => {
            let object = group.controls[objectKey];
            var floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
            let name = 'invalid' + objectKey;
            if (object.value && object.value.length > 0) {
                if (!floatRegex.test(object.value))
                    return {
                        [name]: true
                    };
                let objectValue = parseFloat(object.value);
                if (isNaN(objectValue))
                    return {
                        [name]: true
                    };
            }
        }

    }
}
// export function confirmEmail(control: AbstractControl) {
//     if (control && control.value !== null) {
//         const ConfirmEmail = control.value;
//         const email = control.root.get('Email');
//         if (email) {
//             const Email = email.value;

//             if (Email !== ConfirmEmail) {
//                 return {
//                     isError: true,
//                 };
//             }
//         }
//     }
//     return null;
// }
