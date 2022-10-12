import './App.css';
import Root from './Root'
import Home from './Components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Quiz from './Components/Quiz';
import ErrorPage from './Components/ErrorPage';
import Blog from './Components/Blog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Statistics from './Components/Statistics';

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
      {
        path: 'statistics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Statistics></Statistics>,
      },
    ]
  }
])
function App() {
  return (
    <div className='bg-slate-200'>
      <ToastContainer
        position="top-center"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
