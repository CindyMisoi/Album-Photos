import React from 'react'
import Routes from './components/Routes';
import UserStore from './components/context/store/UserStore';
import AlbumStore from './components/context/store/AlbumStore';
import PhotoStore from './components/context/store/PhotoStore';
import { AuthProvider } from "./components/context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <UserStore>
        <AlbumStore>
          <PhotoStore>
           <Routes/>
          </PhotoStore>
        </AlbumStore>
      </UserStore>
    </AuthProvider>
  )
}