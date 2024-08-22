import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Article from './Pages/Article'
import ArticlesList from './Pages/ArticlesList'

import Navbar from './Components/Navbar'
function App() {

  return (
    <Router>
      <Navbar></Navbar>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/article-list' element={<ArticlesList />} />
          <Route path='/article/:name' element={<Article />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
