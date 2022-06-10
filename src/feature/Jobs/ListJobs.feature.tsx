import React, { useEffect, useMemo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Badge, Button, ButtonGroup, Card } from "react-bootstrap";
import Title from "../../components/Title";
import DynamicTable from "../../components/Table";
import { actions } from "../../store/jobs/jobs";
import DeleteModal from "../../feature/Jobs/DeleteModal";
import FilterTable from "../../feature/Jobs/FilterTable";
import { Priorities, StoreState } from "../../store/constants";
import { JobState } from "../../store/jobs/types";

const ListJobs: React.FC = () => {
  const dispatch = useDispatch();
  const { jobs, priorities } = useSelector<StoreState>(
    ({ jobs, priorities }) => ({
      jobs,
      priorities,
    }),
    shallowEqual
  ) as StoreState;
  const [data, setData] = useState<JobState[]>(jobs);
  const [deleteModal, setDeleteModal] = useState<{ show: boolean; id: string }>(
    {
      show: false,
      id: "",
    }
  );

  useEffect(() => {
    dispatch(actions.getJobs());
  }, []);

  useEffect(() => {
    setData(jobs);
  }, [jobs]);

  const columns = useMemo(
    () => [
      {
        selector: "name",
        label: "Name",
        sortable: true,
      },
      {
        selector: "priority",
        label: "Priority",
        sortable: true,
        render: ({ priority }: any) => {
          const filteredPriority: Priorities | undefined =
            priorities.entity.find((entity) => entity.name === priority);
          return <Badge bg={filteredPriority?.label}>{priority}</Badge>;
        },
      },
      {
        selector: "action",
        label: "Actions",
        width: "100px",
        className: "text-center",
        render: ({ id }: any) => {
          return (
            <div className="text-end">
              <ButtonGroup size="sm" aria-label="crud buttons">
                <Button
                  variant="secondary"
                  onClick={() =>
                    setDeleteModal((prevState) => ({
                      ...prevState,
                      ...{ show: true, id },
                    }))
                  }
                >
                  Sil
                </Button>
              </ButtonGroup>
            </div>
          );
        },
      },
    ],
    []
  );

  const config = useMemo(
    () => ({
      sort: {
        id: "priority",
        desc: true,
      },
    }),
    []
  );

  return (
    <>
      <Card>
        <Card.Header>
          <Title className="mb-0">Job List</Title>
        </Card.Header>
        <Card.Body>
          <FilterTable data={jobs} setData={setData} />
          <DynamicTable columns={columns} data={data} config={config} />
        </Card.Body>
      </Card>
      <DeleteModal
        show={deleteModal.show}
        onHide={() =>
          setDeleteModal((prevState) => ({ ...prevState, ...{ show: false } }))
        }
        onClick={() => {
          dispatch(actions.deleteJob(deleteModal.id));
          setDeleteModal((prevState) => ({
            ...prevState,
            ...{ show: false, id: "" },
          }));
        }}
      />
    </>
  );
};

export default ListJobs;
