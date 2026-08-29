import {
  Route,
  Routes,
} from 'react-router-dom'

import Background from './components/Background'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Article from './pages/Article'
import About from './pages/About'

export default function App() {
  return (
    <div className="app">
      <Background />

      <Navbar />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/article/:id"
            element={<Article />}
          />

          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </main>
    </div>
  )
}
