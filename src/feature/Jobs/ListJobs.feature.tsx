import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, ButtonGroup, Card } from "react-bootstrap";
import Title from "@components/Title";
import DynamicTable from "@components/Table";
import { priorityConstants } from "@utils/constants/priority.constants";
import { actions } from "../../store/jobs/jobs";
import DeleteModal from "@feature/Jobs/DeleteModal";
import UpdateModal from "@feature/Jobs/UpdateModal";
import { JobState } from "../../store/jobs/types";

const ListJobs: React.FC = () => {
  const dispatch = useDispatch();
  const { jobs }: any = useSelector<any>(({ jobs }) => ({ jobs }));
  const [deleteModal, setDeleteModal] = useState<{ show: boolean; id: string }>(
    {
      show: false,
      id: "",
    }
  );
  const [updateModal, setUpdateModal] = useState<{
    show: boolean;
    data: JobState | null;
  }>({
    show: false,
    data: null,
  });

  useEffect(() => {
    dispatch(actions.getJobs());
  }, []);

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
        render: (record: any) => (
          <Badge bg={priorityConstants[record.priority]}>
            {record.priority}
          </Badge>
        ),
      },
      {
        selector: "action",
        label: "Actions",
        width: "100px",
        className: "text-center",
        render: (record: any) => {
          return (
            <div className="text-end">
              <ButtonGroup size="sm" aria-label="crud buttons">
                <Button
                  variant="secondary"
                  onClick={() =>
                    setUpdateModal((prevState) => ({
                      ...prevState,
                      ...{ show: true, data: record },
                    }))
                  }
                >
                  Düzenle
                </Button>
                <Button
                  variant="secondary"
                  onClick={() =>
                    setDeleteModal((prevState) => ({
                      ...prevState,
                      ...{ show: true, id: record.id },
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
          <DynamicTable columns={columns} data={jobs.entity} config={config} />
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
      <UpdateModal
        show={updateModal.show}
        data={updateModal.data}
        onHide={() =>
          setUpdateModal((prevState) => ({ ...prevState, ...{ show: false } }))
        }
        onClick={() => {
          setUpdateModal((prevState) => ({
            ...prevState,
            ...{ show: false, data: null },
          }));
        }}
      />
    </>
  );
};

export default ListJobs;
