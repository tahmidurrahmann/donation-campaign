import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root'
import Donation from './components/Donation/Donation'
import Statistics from './components/Statistics/Statistics'
import Home from './components/Home/Home'
import DonationDetails from './components/DonationDetails/DonationDetails'
import Error from './components/Error/Error'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root></Root>,
    errorElement : <Error></Error>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : ()=> fetch('/donation.json')
      },
      {
        path : '/donation',
        element : <Donation></Donation>
      },
      {
        path : '/statistics',
        element : <Statistics></Statistics>,
        loader : () => fetch('/donation.json')
      },
      {
        path : '/:id',
        element : <DonationDetails></DonationDetails>,
        loader : ()=> fetch('/donation.json')
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)