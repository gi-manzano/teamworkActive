import {BrowserRouter, Routes, Route } from "react-router-dom";

import ItemListContainer from '../components/itemListContainer/ItemListContainer';
import NavBar from '../components/NavBar';
import ClothesContainer from '../components/clothes/ClothesContainer';
import ClothesDetail from '../components/clothes/ClothesDetail';


const AppRouter = () => {
    return (
        <>
          <BrowserRouter>
              <NavBar></NavBar>
              <Routes> 
                <Route path='/*' element = {<ClothesContainer/>}/>
                <Route path='/home' element={<ItemListContainer/>}/>  
                <Route path='/clothes' element={<ClothesContainer/>}/>
                <Route path='/clothes/:clothesId' element={<ClothesDetail/>}/>  
              </Routes>
          </BrowserRouter>
    
    
    
       
        </>
      );

}

export default AppRouter