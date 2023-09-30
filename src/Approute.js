import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import List from './conatiner/List/List'
import Upload from './conatiner/Upload/Upload'
import BasicDocument from './conatiner/PdfStructure/Basicdocument'

const Approute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />} path='/' />
                <Route element={<List />} path='/list' />
                <Route element={<Upload />} path='/upload' />
                <Route element={<BasicDocument />} path='/pdf' />
            </Routes>
        </BrowserRouter>
    )
}

export default Approute