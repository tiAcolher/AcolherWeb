import * as React from "react";
import { FieldProps } from "formik";
import { TextField } from "@material-ui/core";
import { TextFieldProps } from "@material-ui/core/TextField/TextField";


export const MyField: React.FC<FieldProps & TextFieldProps> = ({
  label,
  placeholder,
  field
}) => {
  return <TextField label={label} placeholder={placeholder} {...field} />;
};



