import * as Yup from "yup";
import * as React from "react";
import { FormHandles } from "@unform/core";

const validate = async (
  validationSchema: any,
  data: any,
  formRef: React.RefObject<FormHandles>
) => {
  try {
    const schema = validationSchema;
    await schema.validate(data, {
      abortEarly: false
    });
    if (formRef.current) formRef.current.setErrors({});
    // Validation passed
    return true;
  } catch (err) {
    const validationErrors: any = {};
    if (err instanceof Yup.ValidationError) {
      err.inner.forEach((error: any) => {
        validationErrors[error.path] = error.message;
      });
      if (formRef.current) formRef.current.setErrors(validationErrors);
    }
    return false;
  }
};

export default validate;
