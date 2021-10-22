import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Landing from '../Landing/Landing';
import background from '../images/background.jpg';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './home.css';

const styles = {
    Home:{
        backgroundImage:`url(${background})`,
        backgroundSize:'cover'
    }
}

class Home extends Component {

    state={
        page:''
    }

    setPage=(newPage)=>{
        this.setState({page:newPage})
    }

    renderRoutes(){
        return(
            <section>
                <Route
                    exact
                    path='../Landing'
                    component={Landing}
                />
                <Route
                    path='/about'
                    component={About}
                />
                <Route 
                    path='/projects'
                    component={Projects}
                />
                <Route
                    path='/contact'
                    component={Contact}
                />
            </section>
        )
    }

    render() {

        return(
            <main className='Home' style={styles.Home}>
                <header>
                <nav className='navLinks'>
                    <NavLink className='homeNavLink' to={`/`}>
                        <h3>Home</h3>
                    </NavLink>
                    <NavLink className='aboutNavLink' to={`/about`}>
                        <h3 className='borderedLink'>About</h3>
                    </NavLink>
                    <NavLink className='projectsNavLink' to={`/projects`}>
                        <h3 className='borderedLink'>Projects</h3>
                    </NavLink>
                    <NavLink className='contactNavLink' to={`/contact`}>
                        <h3>Contact</h3>
                    </NavLink>       
                </nav>
                </header>
                <section>
                    {this.renderRoutes()}
                </section>
            </main>
        )
    }
}

export default Home