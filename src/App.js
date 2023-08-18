
import './App.css';
import Header from "./Header.js"
import Footer from "./Footer.js"
import { Provider } from 'react-redux';
import store from "./store/store"

import { Outlet  } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Header></Header>
      <Outlet />  
      
      <Footer></Footer>
      </Provider>
    </div>
  );
}

export default App;
