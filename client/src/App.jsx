
import { createBrowserRouter, Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import Post from './pages/Post';
import About from './pages/About';

function AppLayout() {
 
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },{
        path:"/addPost",
        element:<AddPost/>
      },{
        path:"/post/:title",
        element:<Post/>
      },{
        path:"/about",
        element:<About/>
      }
    ]
  }
])

export default appRouter;
