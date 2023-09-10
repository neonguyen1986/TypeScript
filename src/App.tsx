import { useState } from 'react'
import Portfolio from '@/screens/portfolio' //~src//screens/portfolio
import '@/styles/plugins.scss'
import '@/styles/style.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Portfolio />
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>

    )
} 1

export default App
