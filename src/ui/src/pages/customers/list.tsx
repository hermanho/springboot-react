import React from 'react';
import {
  useDataGrid,
  EditButton,
  ShowButton,
  DeleteButton,
  List,
} from '@refinedev/mui';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IResourceComponentsProps } from '@refinedev/core';

export const CustomerList: React.FC<IResourceComponentsProps> = () => {
  const { dataGridProps } = useDataGrid();

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: 'id',
        headerName: 'Id',
        type: 'number',
        minWidth: 50,
      },
      {
        field: 'firstName',
        headerName: 'First Name',
        type: 'text',
        minWidth: 50,
        canRelation: false,
      },
      {
        field: 'lastName',
        headerName: 'Last Name',
        type: 'text',
        minWidth: 50,
        canRelation: false,
      },
      {
        field: 'emailAddress',
        headerName: 'Email',
        type: 'text',
        minWidth: 50,
        canRelation: false,
      },
      {
        field: 'phoneNumber',
        headerName: 'Phone',
        type: 'text',
        minWidth: 50,
        canRelation: false,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <EditButton hideText recordItemId={row.id} />
              <ShowButton hideText recordItemId={row.id} />
              <DeleteButton hideText recordItemId={row.id} />
            </>
          );
        },
        align: 'center',
        headerAlign: 'center',
        minWidth: 80,
      },
    ],
    []
  );

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
};
