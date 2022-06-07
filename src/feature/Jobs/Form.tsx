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
import { actions } from "../../store/jobs/jobs";
import { uid } from "@utils/helpers/uid.helpers";
import { JobState } from "../../store/jobs/types";

interface Props {
  action: "create" | "update";
  data?: JobState;
}

const JobForm: React.FC<Props> = ({ data, action }: Props) => {
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
    if (action === "update") {
      reset({ ...DEFAULT_VALUES, ...data });
    }
  }, [action]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (action === "update") {
      dispatch(actions.updateJob([data]));
    } else {
      dispatch(actions.createJob([data]));
    }
    reset({ ...DEFAULT_VALUES, id: uid() });
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row className="align-items-end">
        <Col
          {...(action === "update" ? { xs: 12 } : { md: 7 })}
          className="mb-3"
        >
          <Input
            {...register("name", {
              disabled: action === "update",
            })}
            label="Name"
            type="text"
            isInvalid={!!errors.name?.message}
            feedback={errors.name?.message}
          />
        </Col>
        <Col
          {...(action === "update" ? { xs: 12 } : { md: 3 })}
          className="mb-3"
        >
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
        {action === "create" && (
          <Col md={2} className="mb-3">
            <div className="d-grid">
              <Button variant="primary" type="submit" className="d-block">
                Create
              </Button>
            </div>
          </Col>
        )}
      </Row>
    </Form>
  );
};

export default JobForm;
