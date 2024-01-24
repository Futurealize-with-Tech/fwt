'use client'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function RootTemplate({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
        {children}
        <ToastContainer
            position="bottom-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            className='toast'
        />
        </>
    );
}
