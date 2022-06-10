import React, { forwardRef } from "react";
import { Form, FormSelectProps } from "react-bootstrap";

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
} & React.SelectHTMLAttributes<HTMLSelectElement> &
  React.OptionHTMLAttributes<HTMLOptionElement>;

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
      {label && <Form.Label className="d-block text-start">{label}</Form.Label>}
      <Form.Select ref={ref} {...props} isInvalid={isInvalid}>
        {options.map(({ label, ...entity }, index) => (
          <option key={index} {...entity}>
            {label}
          </option>
        ))}
      </Form.Select>
      {feedback && (
        <Form.Control.Feedback
          aria-label={`form.${props.name}`}
          type="invalid"
          tooltip
        >
          {feedback}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  )
);

export default Select;
