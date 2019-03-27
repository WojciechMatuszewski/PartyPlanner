import { FormikErrors, FormikTouched } from 'formik';
import { FormItemProps } from 'antd/lib/form';

export function getFormItemValidateStatus<FormShape>(
  errors: FormikErrors<FormShape>,
  touched: FormikTouched<FormShape>,
  fieldName: keyof FormikErrors<FormShape>
): FormItemProps['validateStatus'] {
  return errors[fieldName] && touched[fieldName]
    ? 'error'
    : touched[fieldName] && !errors[fieldName]
    ? 'success'
    : undefined;
}

export function getFormItemError<FormShape>(
  errors: FormikErrors<FormShape>,
  touched: FormikTouched<FormShape>,
  fieldName: keyof FormikErrors<FormShape>
) {
  return getFormItemValidateStatus(errors, touched, fieldName) === 'error'
    ? errors[fieldName]
    : '';
}
