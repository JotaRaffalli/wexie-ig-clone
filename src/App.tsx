import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
