import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home';
import Detail from 'pages/Detail';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false
        }
    }
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail/:id" element={<Detail />} />
                </Routes>
            </RecoilRoot>
        </QueryClientProvider>
    );
}

export default App;
