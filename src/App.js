import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import List from "./pages/list/List";
import Accueil from "./pages/home/Accueil";
import Hotel from "./pages/hotel/Hotel";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Accueil/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
    </Routes>
    </BrowserRouter>
  ); 
}
 
export default App;
