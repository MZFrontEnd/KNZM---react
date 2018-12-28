import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CategoryAboutUs from "./CategoryAboutUs";
import CategoryActivity from "./CategoryActivity";

// import Slider from "./Slider";

import CategoryAdministration from "./CategoryAdministration";
import CategoryCurrency from "./CategoryCurrency";
import CategoryJoinUs from "./CategoryJoinUs";
import CategoryPanel from "./CategoryPanel";
import CategoryPartner from "./CategoryPartner";
import  AddOffClass from './menu';
// import CategoryConference from "./CategoryConference";
// import Logo from "./Logo";


class Main extends Component {
    render() {
        return (
            <HashRouter>
        <div>
        AddOffClass()
         
       
    <nav className="mainNav landscape">
        <ul className="mainNav__list">
            <li className="mainNav__listItem"><NavLink className="mainNav__link" exact to="/">Start</NavLink></li>
            <li className="mainNav__listItem">
                <div className="mainNav__link--arrow"> Menu <div className="arrow-down-box">
                        <div className="arrow-down"></div>
                    </div>
                </div>
            </li>
            <li className="mainNav__listItem"><NavLink className="mainNav__link" to="/stuff">Kontakt</NavLink></li>
        </ul>
    </nav>
   
    <nav className="mainNav portrait">
        <ul className="mainNav__list">
            <li className="mainNav__listItem mainNav__link--arrow">
                    <i className="fas fa-bars "></i>
                    <i className="fas fa-times off"></i>
               </li>


        </ul>
    </nav>
    
    <nav className="mainNav--off off">
        <ul className="mainNav__list--off">
            <div className="mainNav__category">
                <li className="mainNav__listItem--off"><NavLink className="mainNav__link--off portrait" exact to="/">Start</NavLink></li>
                <li className="mainNav__listItem--off"><NavLink className="mainNav__link--off portrait" to="/categoryaboutus">kontakt</NavLink></li>

            </div>
            <div className="mainNav__category">
                <li className="mainNav__listItem--off"><NavLink id="menuSection" className="mainNav__link--off" to="/categoryaboutus">O nas</NavLink></li>
                <li className="mainNav__listItem--off"><NavLink  id="buttonSection" className="mainNav__link--off" to="/categoryaboutus">Nasza działalność</NavLink></li>
                <li className="mainNav__listItem--off"><NavLink id="hoverEffectSection" className="mainNav__link--off" to="/categoryaboutus">Zarząd</NavLink></li>
            </div>
            <div className="mainNav__category">
                <li className="mainNav__listItem--off"><NavLink  id="signSection" className="mainNav__link--off" to="/categoryaboutus">Zostań partnerem</NavLink>
                    </li>
                <li className="mainNav__listItem--off"><NavLink id="signSection" className="mainNav__link--off" to="/categoryaboutus">Dołącz do nas</NavLink>
                   </li>
            </div>
            <div className="mainNav__category">
                <li className="mainNav__listItem--off"><NavLink id="popubSection" className="mainNav__link--off" to="/categoryaboutus">Aktualności</NavLink></li>
                
            </div>
            <div className="mainNav__category">
                <li className="mainNav__listItem--off"><NavLink  id="animationSection" className="mainNav__link--off" to="/categoryaboutus">Konferencja</NavLink></li>
            
            </div>
        </ul>
    </nav> 
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink exact to="/">Home</NavLink></li>
       
            <li><NavLink to="/categoryadministration">CategoryAdministration</NavLink></li>
            <li><NavLink to="/categoryaboutus">categoryaboutus</NavLink></li>
            <li><NavLink to="/categoryactivity">CategoryActivity</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul> 
          <div className="content">
            <Route exact path="/" component={CategoryPanel}/>
            <Route path="/categoryaboutus" component={CategoryAboutUs}/>
            <Route path="/categoryactivity" component={CategoryActivity}/>
            <Route path="/categoryjoinus" component={CategoryJoinUs}/>
            <Route path="/categorycurrency" component={CategoryCurrency}/>
            {/* <Route path="/categoryconference" component={CategoryConference}/> */}
            <Route path="/categorypartner" component={CategoryPartner}/>
            <Route path="/categoryadministration" component={CategoryAdministration}/>
          
     
          </div>
          <section className="contactSection">
        <h1 className="contactTitle">Kontakt</h1>
       
        <ul className="siteMap__list siteMap__list--contact">
            <li className="siteMapContact__item siteMapContact__item--address list__item"><i className="font__contact fas fa-map-marker-alt"></i>
               
                plac Grunwaldzki 2/4, 50-384 Wrocław
         
            </li>
            <li className="siteMapContact__item list__item"><i className="font__contact fas fa-envelope"></i>
                knzm@math.edu.pl
            </li>
            <li className="siteMapContact__item list__item"><i className="font__contact fab fa-facebook-f"></i>
                Facebook
            </li>
        </ul>
    </section>
            <footer className="footerSection">
                <p className="footer__txt--copyRight">&copy; 2018
                    Koło Naukowe Zastosowań Matematyki
                    Uniwersytetu Wrocławskiego</p>
            </footer>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
