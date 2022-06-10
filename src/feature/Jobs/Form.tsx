import React, { useEffect, useMemo } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/forms/Input";
import Select from "../../components/forms/Select";
import { DEFAULT_VALUES, FormValues } from "./constants";
import { uid } from "../../utils/helpers";
import { StoreState } from "../../store/constants";
import { actions as jobActions } from "../../store/jobs/jobs";
import { actions as getPrioritiesActions } from "../../store/priorities/get.priorities";

const JobForm: React.FC = () => {
  const dispatch = useDispatch();
  const { priorities } = useSelector<StoreState>(
    ({ priorities }) => ({ priorities }),
    shallowEqual
  ) as StoreState;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: DEFAULT_VALUES,
  });

  useEffect(() => {
    reset({ ...DEFAULT_VALUES });
    dispatch(getPrioritiesActions.getPrioritiesRequest());
    return () => {
      dispatch(getPrioritiesActions.getPrioritiesReset());
    };
  }, []);

  const prioritiesOptions = useMemo(
    () =>
      priorities.entity && priorities.entity.length > 0
        ? priorities.entity.map((entity) => ({
            label: entity.name,
            value: entity.name,
          }))
        : [],
    [priorities.entity]
  );

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(jobActions.createJob([data]));
    reset({ ...DEFAULT_VALUES, id: uid() });
  };

  return (
    <Form role="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row className="align-items-end">
        <Col md={7} className="mb-3">
          <Input
            {...register("name", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            label="Job Name"
            type="text"
            isInvalid={!!errors.name?.message}
            feedback={errors.name?.message}
          />
        </Col>
        <Col md={3} className="mb-3">
          <Select
            {...register("priority", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            label="Job Priority"
            disabled={priorities.loading}
            options={prioritiesOptions}
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
