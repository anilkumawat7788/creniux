import React from 'react';
import PageScroll from './components/pagescroll/PageScroll';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';
import Career from './components/careers/Career';
import Product from './components/product/Product';
import Service from './components/services/Service';

import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
function App() {
  return (
   <>
   <Router>
   <PageScroll />
   <Navbar />
     <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/about' component={About} />
       <Route exact path='/service' component={Service} />
       <Route exact path='/product' component={Product} />
       <Route exact path='/blog' component={Blog} />
       <Route exact path='/career' component={Career} />
       <Route exact path='/contact' component={Contact} />
       
     </Switch>
     <Footer />
   </Router>

   </>
  );
}

export default App;
