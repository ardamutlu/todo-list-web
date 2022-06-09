import React, { forwardRef } from "react";
import { Form, FormControlProps } from "react-bootstrap";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  feedback?: string | undefined;
  ref?: React.ForwardedRef<HTMLInputElement>;
} & FormControlProps;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, isInvalid, feedback, ...props }, ref) => (
    <Form.Group className="position-relative" controlId={`form.${props.name}`}>
      {label && <Form.Label className="d-block text-start">{label}</Form.Label>}
      <Form.Control ref={ref} {...props} isInvalid={isInvalid} />
      {feedback && (
        <Form.Control.Feedback type="invalid" tooltip>
          {feedback}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  )
);

export default Input;
