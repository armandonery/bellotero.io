import './App.css'
import Menu from './components/menu'
import Testimonial from './components/testimonial/testimonial'
import Configurator from './components/configurator/configurator'
import Empty from './components/empty/story_about'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/page-1" element={<Testimonial />} />
          <Route path="/page-2" element={<Configurator />} />
          <Route path="/#" element={<Empty />} />
        </Routes>
        <div className="App">
          <Menu />
        </div>
    </BrowserRouter>
    
  );
}

export default App;
