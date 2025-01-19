import styled from '@emotion/styled';
import { QueryClient, QueryClientProvider } from 'react-query';

import { UserPreferencesPage } from './user-preferences-page';

const StyledApp = styled.div`
  // Your style here
`;

const client = new QueryClient();

export function App() {
  return (
    <StyledApp>
      <QueryClientProvider client={client}>
        <UserPreferencesPage></UserPreferencesPage>
        {/* <ReactQueryDevtools initialIsOpen /> */}
      </QueryClientProvider>
    </StyledApp>
  );
}

export default App;
