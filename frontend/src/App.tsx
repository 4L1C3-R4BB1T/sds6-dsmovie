import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Listing />} />
                <Route path="/form">
                    <Route path=":movieId" element={<Form />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;