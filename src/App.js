import logo from './logo.svg';
import './App.css';
import NavBarComp from './Components/NavbarComp';
import DirectoryIndex from './Pages/DirectoryIndex';
import { NativeBaseProvider } from 'native-base';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetail from './Pages/BookDetail';
import BookPreview from './Pages/BookPreview';

function App() {
  return (
    <NativeBaseProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<DirectoryIndex/>}/>
      <Route path='/details/:encodedData' element={<BookDetail/>}/>
      <Route path='/preview/:encodedUrlLink' element={<BookPreview/>}/>
    </Routes>
    </BrowserRouter>
    </NativeBaseProvider>
  );
}

export default App;
