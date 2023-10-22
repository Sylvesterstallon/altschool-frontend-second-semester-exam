import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Counter from "./components/Counter";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import TestError from "./components/TestError"

function App() {
  return(
    <main>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/counter">Counter</NavLink>
        <NavLink to="/notFound">NotFound</NavLink>
        <NavLink to="/testErrorBoundary">Test Error Boundary</NavLink>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />}/>
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/testErrorBoundary" element={<TestError />}/>
      </Routes>
    </main>
  )
}

export default App