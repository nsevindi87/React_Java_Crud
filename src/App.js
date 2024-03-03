import './App.css';
import {Routes, Route} from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard.js';
import PostUser from './components/postUser/PostUser.js';
import UpdateUser from './components/updateUser/UpdateUser';
import NoMatch from './components/nomatch/NoMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>;
      <Route path="/user" element={<PostUser/>}></Route>
      <Route path="/user/:id" element={<UpdateUser/>}></Route>
      <Route path="*" element={<NoMatch/>}></Route>
    </Routes>
  );
}

export default App;
