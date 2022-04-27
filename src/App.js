import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import EstabelecimentoList from "./pages/estabelecimentoList/EstabelecimentoList";
import NewEstabelecimento from "./pages/newEstabelecimento/NewEstabelecimento";
import Estabelecimento from "./pages/estabelecimento/Estabelecimento";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import Pedidos from "./pages/pedidos/pedidos";
import Pedido from "./pages/pedido/pedido";
import Pagamentos from "./pages/pagamentos/pagamentos";
import Categoria from "./pages/categoria/Categoria";
import Categorias from "./pages/categorias/Categorias";
import NovaCategoria from "./pages/novaCategoria/novaCategoria";
import SiteConfig from "./pages/siteMenage/siteManage";



function App() {

  var admin  = ""
if(localStorage.getItem("persist:vandja") !== null ){
  const user  = JSON?.parse(JSON.parse(localStorage?.getItem("persist:vandja"))?.user).currentUser?.isAdmin
  if (user){
 const res  = JSON?.parse(JSON.parse(localStorage?.getItem("persist:vandja"))?.user).currentUser?.isAdmin
admin = res
}else{
   const  res = JSON?.parse(JSON.parse(localStorage?.getItem("persist:vandja"))?.lojaLogin).currentLoja?.isAdmin;
   admin = res
}
}else{
   admin  = ""
}


  return (
    <Router>
        <Switch>
       
          {admin ?
         
          <>
      <Topbar />
      <div className="container">
        <Sidebar />
      
          <Route exact path="/">
            <Home />
          </Route>
         
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:id">
            <User />
          </Route>

          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route exact path="/estabelecimentos">
            <EstabelecimentoList/>
          </Route>
          <Route exact path="/estabelecimento/:id">
            <Estabelecimento/>
          </Route>
          <Route exact path="/new_estabelecimento">
            <NewEstabelecimento/>
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/pedidos">
            <Pedidos/>
          </Route>
          <Route path="/pedido/:id">
            <Pedido />
          </Route>
          <Route path="/pagamentos">
            <Pagamentos />
          </Route>
          <Route path="/categoria">
            <Categoria />
          </Route>
          <Route path="/categorias">
            <Categorias />
          </Route>
          <Route path="/novaCategoria">
            <NovaCategoria />
          </Route>
          <Route path="/site_config">
            <SiteConfig />
          </Route>
          <Redirect to={"/"}/>
      </div> 
      </>
          :
          <>
          <Route exact path="/login">
          <Login/>
        </Route>
        <Redirect to={"/login"}/>
        </>  
        }
           
      </Switch>
    </Router>
  );
}

export default App;
