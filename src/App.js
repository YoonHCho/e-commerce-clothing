import { HomePage } from "./pages/homepage/homepage.component";
// Need to import BrowserRouter in the index.js first
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

const HatsPage = () => {
  return <h1>This is hats!!</h1>;
};
const HatsDetail = props => {
  // const nav = useLocation();
  // const navigate = useNavigate();
  // navigate('/topics');
  // const param = useParams();
  // console.log("useMatch", useMatch());
  // console.log("props.path: ", props.path);
  console.log("LOCATION: ", useLocation());
  return <h1>This is detail</h1>;
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
        <Route path="/hats/:hatId" element={<HatsDetail />} />
        {/* <Route path="*" element={<Navigate to="/" />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
