import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Spinner from './components/Spinner.jsx'
import AuthState from './context/auth/AuthState.jsx'
import ItemState from './context/items/itemState.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Spinner />}>
    <BrowserRouter>
      <AuthState>
        <ItemState>
          <App />
        </ItemState>
      </AuthState>
    </BrowserRouter>
  </Suspense>
)
