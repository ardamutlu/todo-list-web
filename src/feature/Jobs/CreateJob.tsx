import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Title from "@components/Title";
import Input from "@components/Input";
import Select from "@components/Select";

type FormValues = {
  job_name: string;
  job_priority: string;
};

const ValidateSchema = yup.object().shape({
  job_name: yup.string().required("Bu alan zorunludur"),
  job_priority: yup.string().required("Bu alan zorunludur"),
});

const CreateJob: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      job_name: "",
      job_priority: "",
    },
    resolver: yupResolver(ValidateSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) =>
    console.log("data:", data);

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Title className="mb-3">Create New Job</Title>
      <Row className="align-items-end">
        <Col md={7} className="mb-3">
          <Input
            {...register("job_name")}
            label="Job Priority"
            type="text"
            isInvalid={!!errors.job_name?.message}
            feedback={errors.job_name?.message}
          />
        </Col>
        <Col md={3} className="mb-3">
          <Select
            {...register("job_priority")}
            label="Job Priority"
            options={[
              { label: "One", value: "1" },
              { label: "Two", value: "2" },
              { label: "Three", value: "3" },
            ]}
            isInvalid={!!errors.job_priority?.message}
            feedback={errors.job_priority?.message}
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

export default CreateJob;
