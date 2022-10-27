import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Component/Main/Main';
import Home from './Components/Component/Home/Home';
import Courses from './Components/Component/Courses/Courses';
import Faq from './Components/Component/FAQ/Faq';
import Blog from './Components/Component/Blog/Blog';
import Footer from './Components/Component/Footer/Footer';
import Login from './Components/Component/Login/Login';
import Register from './Components/Component/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import CategoryData from './Components/Component/cayegoryData/CategoryData';
import CheckOutDataDisplay from './Components/Component/CheckOutDataDisplay/CheckOutDataDisplay';
import Notfound from './Components/Component/NotFound/Notfound';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch(' https://assignment-server-10-tau.vercel.app/course')
        },
        {
          path: '/course',
          element: <PrivateRoute><Courses></Courses></PrivateRoute>,
          loader: () => fetch(' https://assignment-server-10-tau.vercel.app/course')
        },
        {
          path: '/FAQ',
          element: <Faq></Faq>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/Register',
          element: <Register></Register>
        },
        {
          path: '/courses/:id',
          element: <CategoryData></CategoryData>,
          loader: ({ params }) => fetch(` https://assignment-server-10-tau.vercel.app/courses/${params.id}`)
        },
        {
          path: '/checkOut/:id',
          element: <PrivateRoute><CheckOutDataDisplay></CheckOutDataDisplay></PrivateRoute>,
          loader: ({ params }) => fetch(` https://assignment-server-10-tau.vercel.app/courses/${params.id}`)
        }
      ]
    },
    {
      path: '/*',
      element: <Notfound></Notfound>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
