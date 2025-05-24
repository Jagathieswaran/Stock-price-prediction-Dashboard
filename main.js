import * as React from 'react';
import { createRoot } from 'react-dom/client';  
import { App } from './App';        
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';  
import { Provider } from 'react-redux';
import { store } from './store';    
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';    
import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './components/ErrorFallback';
import { AuthProvider } from './context/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ReactQueryConfigProvider } from 'react-query';
import { ReactQueryConfig } from 'react-query/types/core/types';
import { ReactQueryDevtoolsPanel } from 'react-query/devtools/devtoolsPanel';
queryConfig: ReactQueryConfig = {
    queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 1000 * 60 * 5, // 5 minutes
    },
    };
// This code imports various libraries and components needed for the application.
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            
            staleTime: 1000 * 60 * 5, // 5 minutes
        },
    },
});
const router = createBrowserRouter(routes);
const container = document.getElementById('root')!; 
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <SnackbarProvider maxSnack={3}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <AuthProvider>
                            <QueryClientProvider client={queryClient}>
                                <ReactQueryConfigProvider config={queryConfig}>
                                    <RouterProvider router={router} />
                                    <ReactQueryDevtools initialIsOpen={false} />
                                </ReactQueryConfigProvider>
                            </QueryClientProvider>
                        </AuthProvider>
                    </ErrorBoundary>
                </SnackbarProvider>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
);
// This code sets up a React application with various providers and configurations.
// It uses React Router for routing, Redux for state management, Material UI for theming,   
// Notistack for notifications, React Query for data fetching, and an error boundary for error handling.
// The application is rendered into a root DOM element, and the theme and CSS baseline are applied.

// The SnackbarProvider is used to display notifications, and the ErrorBoundary is used to catch errors in the application.
// The AuthProvider is used to manage authentication state, and the QueryClientProvider is used to manage data fetching with React Query.
// The ReactQueryDevtools is included for debugging React Query queries and mutations.
// The application is wrapped in a StrictMode to help identify potential problems in the application.
// The `queryConfig` object is used to set default options for React Query, such as disabling refetching on window focus and setting the retry count and stale time for queries.
// The `queryClient` is created with the default options specified in the `queryConfig` object.
// The `router` is created using the `createBrowserRouter` function from React Router, which takes the routes defined in the `routes` module.
// The `container` variable selects the root DOM element where the React application will be rendered.
// The `root` variable creates a root React element using the `createRoot` function from React DOM.
// Finally, the `root.render` method is called to render the entire application into the root DOM element.
// The application is structured to be modular and scalable, allowing for easy maintenance and updates in the future.
// The use of TypeScript ensures type safety and helps catch errors during development.

default
export {};
// This code sets up a React application with various providers and configurations.
EventCounts = {
    click: 0,
    keypress: 0,
    scroll: 0,
    resize: 0,
};
