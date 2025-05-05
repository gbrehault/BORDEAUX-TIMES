import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Articles from "./pages/Articles"
import Article from "./pages/Article"
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
