import React,{lazy, Suspense} from 'react';
import { FC } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './layouts/Layout';
import { IndexPage } from './views/IndexPage';
import { FavoritesPage } from './views/FavoritesPage';

export default function AppRouter() {
  return(
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<IndexPage />} index/>
        <Route path='/favorites' element={
          <Suspense fallback="Loading">
             <FavoritesPage />
          </Suspense>
        } />
        </Route>
    </Routes>
    </BrowserRouter>
    )
  
}