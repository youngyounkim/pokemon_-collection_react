import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import Modal from 'react-modal';
import Home from './pages/Home';

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
                </Routes>
            </RecoilRoot>
        </QueryClientProvider>
    );
}

Modal.setAppElement('#root');

export default App;
