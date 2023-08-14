import { ResourceProps } from '@refinedev/core';

export const resources: ResourceProps[] = [
  {
    name: 'customers',
    list: '/customers',
    create: '/customers/create',
    edit: '/customers/edit/:id',
    show: '/customers/show/:id',
    meta: {
      fields: ['id', 'firstName', 'lastName', 'emailAddress', 'phoneNumber'],
      // inputType: 'CustomerInput',
    },
  },
];
