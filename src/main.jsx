import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Pages
import Main from './pages/Main.jsx'
import Categories from './pages/Categories.jsx'
import Categorie from './pages/Categorie.jsx'
import Favorites from './pages/Favorites.jsx'
import Search from './pages/Search.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import Profile from './pages/Profile.jsx'
import Orders from './pages/Orders.jsx'
import OrderDetail from './pages/OrderDetail.jsx'
import ProfileSettings from './pages/ProfileSettings.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Event from './pages/Event.jsx'
import Brand from './pages/Brand.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import Terms from './pages/Terms.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      // Asosiy
      { index: true, element: <Main /> },

      // Kataloglar
      { path: "categories", element: <Categories /> },
      { path: "categories/:slug", element: <Categorie /> },

      // Mahsulot
      { path: "product/:id", element: <Product /> },

      // Brand
      { path: "brand/:slug", element: <Brand /> },

      // Eventlar / aksiyalar
      { path: "events/:slug", element: <Event /> },

      // Qidiruv va sevimlilar
      { path: "search", element: <Search /> },
      { path: "favorites", element: <Favorites /> },

      // Savat va checkout
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },

      // Profile (nested)
      {
        path: "profile",
        element: <Profile />,
        children: [
          { path: "orders", element: <Orders /> },
          { path: "orders/:id", element: <OrderDetail /> },
          { path: "settings", element: <ProfileSettings /> },
        ],
      },

      // Auth
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      // Static
      { path: "about", element: <About /> },
      { path: "contacts", element: <Contacts /> },
      { path: "terms", element: <Terms /> },

      // 404
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)