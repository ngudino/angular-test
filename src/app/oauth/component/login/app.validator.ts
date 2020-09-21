import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const validarInput: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const email = control.get('email');
  const password = control.get('password');

  return password.value ? null : { 'faltaData': true };
};
