import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from 'react'

// Import CSS
import './styles/global.scss'

// Import pages
// import Home from './pages/home'
const Layout = lazy(() => import('./common/layout'))
const Home = lazy(() => import('./pages/home'))

// Other pages
import NotFound from './common/404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App