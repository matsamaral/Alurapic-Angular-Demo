import { ValidatorFn, FormGroup } from '@angular/forms';

export const userNamePasswordValidator: ValidatorFn = (formGroup: FormGroup) => {
    const userName = formGroup.get('userName').value;
    const password = formGroup.get('password').value;

    if (userName.trim() + password.trim()) {
        // tslint:disable-next-line: no-unused-expression
        return userName !== password ? null : { userNamePassword: true };
    } else {
        return null;
    }
};
