import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/graphql': 'http://localhost:8080',
      '/graphiql': 'http://localhost:8080',
    },
  },
  // resolve: {
  //   alias: [
  //     {
  //       find: /^@refinedev\/inferencer\/mui/,
  //       replacement: '/node_modules/@refinedev/inferencer/src/inferencers/mui/',
  //     },
  //   ],
  // },
});
