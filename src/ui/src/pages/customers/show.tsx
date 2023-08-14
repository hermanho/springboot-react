import { useShow, IResourceComponentsProps } from '@refinedev/core';
import {
  Show,
  NumberField,
  TextFieldComponent as TextField,
} from '@refinedev/mui';
import { Typography, Stack } from '@mui/material';

export const CustomerShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow({
    meta: {
      operation: 'customerById',
    },
  });
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          Id
        </Typography>
        <NumberField value={record?.id ?? ''} />
        <Typography variant="body1" fontWeight="bold">
          First Name
        </Typography>
        <TextField value={record?.firstName} />
        <Typography variant="body1" fontWeight="bold">
          Last Name
        </Typography>
        <TextField value={record?.lastName} />
      </Stack>
    </Show>
  );
};
