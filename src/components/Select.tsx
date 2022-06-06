import React, { forwardRef } from "react";
import { Form, FormSelectProps } from "react-bootstrap";

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  options: Option[];
  label?: string;
  feedback?: string | undefined;
  ref?: React.ForwardedRef<HTMLSelectElement>;
} & FormSelectProps;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, label, isInvalid, feedback, ...props }, ref) => (
    <Form.Group className="position-relative" controlId={`form.${props.name}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Select ref={ref} {...props} isInvalid={isInvalid}>
        {options.map(({ label, value }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </Form.Select>
      <Form.Control.Feedback type="invalid" tooltip>
        {feedback}
      </Form.Control.Feedback>
    </Form.Group>
  )
);

export default Select;
