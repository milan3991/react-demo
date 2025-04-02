import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import NotFound from "./pages/NotFound/NotFound"
import UserById from "./pages/Users/UserById"
import Navigation from "./components/Navigation/Navigation"
import Team from "./pages/Team/Team"

function App() {

  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/users/:id" element={<UserById />} />
        <Route path="/team" element={<Team/>} />
      </Routes>
    </Router>
  )
}

export default App
