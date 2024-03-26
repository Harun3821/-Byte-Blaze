

import { createBrowserRouter } from "react-router-dom"


import Mainlayout from "../layouts/Mainlayout.jsx"
import Home from "../pages/Home.jsx"
import Bloges from "../pages/Bloges.jsx"
import Bloge from "../pages/Blog.jsx"
import Contant from "../componates/Contant.jsx"
import Author from "../componates/Author.jsx"
import Bookmarks from "../pages/Bookmarks.jsx"


 export   const router = createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        children:[
        {
            path:'/',
            element:<Home></Home>,
        },

        {
            path:'/bloges',
            element:<Bloges></Bloges>,
            loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
        },
        {
            path: '/blog/:id',
            element: <Bloge></Bloge>,
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            children:[
                {
                    index: true,
                    element:<Contant></Contant>,
                    loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
                },
                {
                   path: 'author',
                   element: <Author></Author>,
                   loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
                },
            ],
        },
        {
            path:'/bookmarks',
            element:<Bookmarks></Bookmarks>
        }
    ]
    },
 
])