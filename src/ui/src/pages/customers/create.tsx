import { Create } from '@refinedev/mui';
import { Box, TextField } from '@mui/material';
import { useForm } from '@refinedev/react-hook-form';
import { IResourceComponentsProps } from '@refinedev/core';

export const CustomerCreate: React.FC<IResourceComponentsProps> = () => {
  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    formState: { errors },
  } = useForm({
    refineCoreProps: { meta: { inputType: 'CustomerInput' } },
  });

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'column' }}
        autoComplete="off"
      >
        <TextField
          {...register('firstName', {
            required: 'This field is required',
          })}
          error={!!(errors as any)?.firstName}
          helperText={(errors as any)?.firstName?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="First name"
          name="firstName"
        />
        <TextField
          {...register('lastName', {
            required: 'This field is required',
          })}
          error={!!(errors as any)?.lastName}
          helperText={(errors as any)?.lastName?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Last name"
          name="lastName"
        />
        <TextField
          {...register('emailAddress', {
            required: 'This field is required',
          })}
          error={!!(errors as any)?.emailAddress}
          helperText={(errors as any)?.emailAddress?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Email address"
          name="emailAddress"
        />
        <TextField
          {...register('phoneNumber')}
          error={!!(errors as any)?.phoneNumber}
          helperText={(errors as any)?.phoneNumber?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Phone number"
          name="phoneNumber"
        />
        <TextField
          {...register('address')}
          error={!!(errors as any)?.address}
          helperText={(errors as any)?.address?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Address"
          name="address"
        />
      </Box>
    </Create>
  );
};
