import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import classNames from "classnames";

interface Config {
  sort: {
    id: string;
    desc?: boolean;
  };
}

export interface Columns<T> {
  selector: string;
  label: string;
  className?: string;
  width?: string;
  sortable?: boolean;
  render?: (record: T) => React.ReactNode;
}

interface Props<T> {
  data: T[];
  columns: Array<Columns<T>>;
  config: Config;
}

const DynamicTable = <T,>({ data, columns, config }: Props<T>) => {
  const [tempData, setTempData] = useState(data);
  const [tempConfig, setTempConfig] = useState<Config>(config);

  useEffect(() => {
    setTempData(data);
  }, [data]);

  useEffect(() => {
    if (tempConfig.sort) {
      toggleSort();
    }
  }, [tempConfig, data]);

  const toggleSort = () => {
    const sortedData = [...data].sort((a: any, b: any) =>
      a[tempConfig.sort.id] > b[tempConfig.sort.id] ? -1 : 1
    );
    if (!tempConfig.sort.desc) sortedData.reverse();
    setTempData(sortedData);
  };

  const renderColumns = (cols: Array<Columns<T>>) => {
    return (
      <tr>
        {cols.map((entity, index: number) => (
          <td
            key={index}
            className={entity.className}
            style={{ width: entity.width }}
          >
            {entity.sortable ? (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  e.persist();
                  setTempConfig((prevState) => ({
                    ...prevState,
                    ...{
                      sort: {
                        id: entity.selector,
                        desc: !prevState.sort.desc,
                      },
                    },
                  }));
                }}
              >
                <span>{entity.label}</span>
                {tempConfig.sort.id === entity.selector && (
                  <i
                    className={classNames({
                      "ri-arrow-down-s-line": tempConfig.sort.desc,
                      "ri-arrow-up-s-line": !tempConfig.sort.desc,
                    })}
                  />
                )}
              </a>
            ) : (
              <span>{entity.label}</span>
            )}
          </td>
        ))}
      </tr>
    );
  };

  const renderRow = (payload: T, index: number) => {
    return (
      <tr key={index}>
        {columns.map((entity, index: number) => (
          <td key={index}>
            {entity.render ? entity.render(payload) : payload[entity.selector]}
          </td>
        ))}
      </tr>
    );
  };

  return (
    <Table>
      <thead>{renderColumns(columns)}</thead>
      <tbody>{tempData.map(renderRow)}</tbody>
    </Table>
  );
};

export default DynamicTable;
