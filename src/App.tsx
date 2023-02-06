import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
