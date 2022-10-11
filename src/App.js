import './App.css';
import Root from './Root'
import Home from './Components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Quiz from './Components/Quiz';
import ErrorPage from './Components/ErrorPage';
import Blog from './Components/Blog';
const router = createBrowserRouter([
  {
    path : '/',
    loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    element : <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children :[
      {
        path : '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element :<Home></Home>,
      },
     {
       path: 'home',
       loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
       element: <Home></Home>,
     },
      {
        path: 'quiz/:id',
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Quiz></Quiz>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>,
      },
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
