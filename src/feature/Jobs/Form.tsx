import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@components/forms/Input";
import Select from "@components/forms/Select";
import {
  DEFAULT_VALUES,
  FormValues,
  ValidateSchema,
} from "@feature/Jobs/constants";
import { uid } from "@utils/helpers";
import { actions } from "../../store/jobs/jobs";

const JobForm: React.FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(ValidateSchema),
  });

  useEffect(() => {
    reset({ ...DEFAULT_VALUES });
  }, []);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(actions.createJob([data]));
    reset({ ...DEFAULT_VALUES, id: uid() });
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row className="align-items-end">
        <Col md={7} className="mb-3">
          <Input
            {...register("name")}
            label="Name"
            type="text"
            isInvalid={!!errors.name?.message}
            feedback={errors.name?.message}
          />
        </Col>
        <Col md={3} className="mb-3">
          <Select
            {...register("priority")}
            label="Job Priority"
            options={[
              { label: "Urgent", value: "Urgent" },
              { label: "Regular", value: "Regular" },
              { label: "Trivial", value: "Trivial" },
            ]}
            isInvalid={!!errors.priority?.message}
            feedback={errors.priority?.message}
          />
        </Col>
        <Col md={2} className="mb-3">
          <div className="d-grid">
            <Button variant="primary" type="submit" className="d-block">
              Create
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default JobForm;
