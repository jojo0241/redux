import logo from './logo.svg';
import './App.css';
import AddTest from './AddTest';
import { Route, Link, Routes} from 'react-router-dom';
import Users from './Users';

import UserVue from './UserVue';

function App() {
  return (
    <div className="App">
      <br />

<li>
  <Link to="/ajout">Ajouter un utilsateur </Link>
</li>


<li>
<Link to="/ListUtilisateur">Voir les utilsateur</Link>
</li>

<Routes>
  <Route path="/ajout" element={<AddTest />}></Route>
  <Route path="/ListUtilisateur" element={<Users />}></Route>
  <Route path="/Test/:id" element={<UserVue />}></Route>
</Routes>





    </div>
  );
}

export default App;
