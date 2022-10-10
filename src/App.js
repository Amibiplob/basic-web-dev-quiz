import './App.css';
import Root from './Root'
import Home from './Components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path : '/',
    element : <Root></Root>,
    children :[
      {
        path : '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element :<Home></Home>
      },
     {
       path: 'home',
       element: <Home></Home>
     }
    ]
  }
])
function App() {
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
