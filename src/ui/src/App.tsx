import { Refine } from '@refinedev/core';
import {
  ThemedLayoutV2,
  RefineThemes,
  RefineSnackbarProvider,
  notificationProvider,
  ErrorComponent,
} from '@refinedev/mui';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import routerProvider, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from '@refinedev/react-router-v6';
import { GraphQLClient } from '@refinedev/graphql';

import { ColorModeContextProvider } from './contexts/color-mode';
import { Header, Title } from './components';
import {
  CustomerCreate,
  CustomerEdit,
  CustomerList,
  CustomerShow,
} from './pages/customers';
import { resources } from './_config/resource';
import dataProvider from './graphql/dataProvider';
// import { MuiInferencer } from '@refinedev/inferencer/mui';

const API_URL = '/graphql';

const client = new GraphQLClient(API_URL);
const gqlDataProvider = dataProvider(client);

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={RefineThemes.Blue}>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: 'auto' } }} />
          <RefineSnackbarProvider>
            <Refine
              dataProvider={gqlDataProvider}
              routerProvider={routerProvider}
              notificationProvider={notificationProvider}
              resources={resources}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
              }}
            >
              <Routes>
                <Route
                  element={
                    <ThemedLayoutV2 Header={Header} Title={Title}>
                      <Outlet />
                    </ThemedLayoutV2>
                  }
                >
                  <Route
                    index
                    element={<NavigateToResource resource="customers" />}
                  />
                  <Route path="customers">
                    <Route
                      index
                      // element={
                      //   <MuiInferencer
                      //     meta={{
                      //       customers: {
                      //         getList: { fields: ['id', 'firstName'] },
                      //       },
                      //     }}
                      //   />
                      // }
                      element={<CustomerList />}
                    />
                    <Route path="show/:id" element={<CustomerShow />} />
                    <Route path="edit/:id" element={<CustomerEdit />} />
                    <Route path="create" element={<CustomerCreate />} />
                  </Route>
                  <Route path="*" element={<ErrorComponent />} />
                </Route>
              </Routes>
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
