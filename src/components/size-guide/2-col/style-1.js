import * as React from 'React';
import mensBottomsSizeGuideData from './mens-bottoms-size-guide-data'

const isInches = true;

const TableStyle1 = ({ isInches = true }) => {
  const { columns, rows } = mensBottomsSizeGuideData;
  const tableClassNames = {
    tableBodyClasses: `size-guide-table__table-body`,
    tableClasses: `size-guide-table__table`,
    tableHeaderClasses: `size-guide-table__table-header`,
    tableRowHeaderClasses: `size-guide-table__table-row-header size-guide-table__table-row-header--isSticky`,
    tableRowClasses: `size-guide-table__table-row`,
    tableCellClasses: `size-guide-table__table-cell`,
  }
  return (
    <div className="size-guide-table">
      <Table columns={columns} rows={rows} tableClassNames={tableClassNames} />
    </div>
  );
};

export default TableStyle1;

const Table = ({ tableClassNames, columns, rows }) => {
  const { tableClasses = ``, } = tableClassNames;

  return (
    <table className={tableClasses}>
      <TableHead columns={columns} tableClassNames={tableClassNames} />
      <TableBody rows={rows} tableClassNames={tableClassNames} />
    </table>
  );
};

const TableHead = ({ columns, tableClassNames }) => {
  const {
    tableHeaderClasses = ``,
  } = tableClassNames;

  return (
    <thead className={tableHeaderClasses}>
      {columns.map((title, idx) => (
        <th
          scope="col"
          className={tableHeaderClasses}
          // className={ idx === 0 ? `${} ${tableHeaderClasses}` : `${tableHeaderClasses}`}
          key={`size-guide-table-header-${title}--${idx}`}>
          {title}
        </th>
      ))}
    </thead>
  );
};

const TableBody = ({ rows, tableClassNames }) => {
  const {
    tableBodyClasses = '',
    tableRowClasses = '',
    tableRowHeaderClasses = '',
    tableCellClasses = '',
  } = tableClassNames;

  return (
    <tbody className={tableBodyClasses}>
      {rows.map((row, idx) => {
        const { rowHeader, rowData } = row;

        return (
          <tr
            className={tableRowClasses}
            key={`size-guide-row-${idx}-${rowHeader}`}
          >
            <RowHeader
              rowHeader={rowHeader}
              tableRowHeaderClasses={tableRowHeaderClasses}
            />
            <TableRow
              isInches={isInches}
              rowData={rowData}
              tableCellClasses={tableCellClasses}
            />
          </tr>
        );
      })}
    </tbody>
  );
};

const TableRow = ({ rowData, isInches, tableCellClasses }) => {
  return rowData.map((item, idx) => {
    const { inches, centimeters } = item;
    const measurement = isInches ? inches : centimeters;

    return (
      <td
        key={`table-data-${idx}`}
        className={`${tableCellClasses}`}
      >
        {measurement}
      </td>
    );
  });
};

const RowHeader = ({ rowHeader, tableRowHeaderClasses }) => (
  <th scope="row" className={tableRowHeaderClasses}>
    {rowHeader}
  </th>
);
