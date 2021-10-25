import React from 'react';
import './about.scss';

export default function About(){

    return(
        <section className='About'>
            <div className="nameAbout">
                <h2>Sean Kamran Cooper</h2>
            </div>
            <article>
                <p id='top' className='about'> I've always loved learning about computers and staying on top of the latest trends in technology. I became a Microsoft
                    Certified Professional (MCP) during my first year of college, and maintain an active CompTIA A+ certification. 
                </p>
                <p className='about'>
                    I get a great deal of satisfaction from programming, and I have experience with C++, Java, JavaScript, HTML, CSS, jQuery,
                    ReactJS, NodeJS, ExpressJS, and PostgreSQL.
                </p>
                <p className='about'>
                    My interests include learning about new technology, watching a good documentary, listening to good music, being in the
                    outdoors, meeting new people, great food, and adventure riding on my dual-sport motorcycle.
                </p>
                <p className='about'>
                    I pride myself on the ability to solve problems, communicate well, and quickly adapt to change. I am often inspired and 
                    humbled in the talent of those around me, and I enjoy working with others because it encourages me to 
                    update and refine my skills continuously.
                </p>
            </article>
        </section>    
    )

}