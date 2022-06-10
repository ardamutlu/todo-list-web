import React, {
  memo,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useTransition,
} from "react";
import { Col, Row } from "react-bootstrap";
import Input from "../../components/forms/Input";
import Select from "../../components/forms/Select";
import { latinize } from "../../utils/helpers";
import { JobState } from "../../store/jobs/types";

interface Props {
  data: JobState[];
  setData: Dispatch<SetStateAction<JobState[]>>;
}

const FilterTable = ({ data, setData }: Props) => {
  const [jobQuery, setJobQuery] = useState<string>("");
  const [priorityQuery, setPriorityQuery] = useState<string>("all");

  const [, startTransition] = useTransition();

  useEffect(() => {
    if (jobQuery || priorityQuery) {
      startTransition(() => {
        setData(
          data.filter(
            (entity) =>
              latinize(entity.name.toLowerCase()).indexOf(
                latinize(jobQuery.toLowerCase())
              ) > -1 &&
              (priorityQuery !== "all"
                ? entity.priority === priorityQuery
                : true)
          )
        );
      });
    }
  }, [jobQuery, priorityQuery]);

  return (
    <div className="bg-light p-3">
      <Row>
        <Col md={6}>
          <Input
            type="text"
            placeholder="Job Name"
            value={jobQuery}
            onChange={(e) => setJobQuery(e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Select
            value={priorityQuery}
            onChange={(e) => setPriorityQuery(e.target.value)}
            placeholder="Priority"
            options={[
              { label: "Priority (All)", value: "all" },
              { label: "Urgent", value: "Urgent" },
              { label: "Regular", value: "Regular" },
              { label: "Trivial", value: "Trivial" },
            ]}
          />
        </Col>
      </Row>
    </div>
  );
};

export default memo(FilterTable);
