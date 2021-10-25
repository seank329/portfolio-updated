import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Landing from '../Landing/Landing';
// import background from '../images/background.jpg';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './home.scss';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

const styles = {
    Home:{
        color:'rgba(255,255,255,0.7)',
        background:'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)'
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
                    path='/'
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
            <main className='Home stars' style={styles.Home}>
                <header>
                <nav className='navLinks'>
                    <div>
                        <NavLink className='homeNavLink' to={`/`}>
                            <h3>Home</h3>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink className='aboutNavLink' to={`/about`}>
                            <h3 className='borderedLink'>About</h3>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink className='projectsNavLink' to={`/projects`}>
                            <h3 className='borderedLink'>Projects</h3>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink className='contactNavLink' to={`/contact`}>
                            <h3>Contact</h3>
                        </NavLink>
                    </div>       
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