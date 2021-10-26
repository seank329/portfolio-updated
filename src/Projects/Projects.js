import React from 'react'
import './projects.scss'
import ProjectContainer from '../Project Container/ProjectContainer'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import info from '../information'

export default function Projects(){

    return(
    
        <section className='ProjectsContainer'>
            <a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
            <SimpleBar style={{ height: '100%' }}>
                <div className='Projects' >     
                    {info.map((data, index) => {
                        return( 
                        <ProjectContainer 
                                    key={index} 
                                    image={data.imageURL}
                                    title={data.title}
                                    description={data.description}
                                    tech={data.techList}
                                    linkLive={data.linkLive}
                                    linkRepo1={data.linkRepo1}
                                    linkRepo2={data.linkRepo2}>
                        </ProjectContainer>        
                        )
                    })}    
                </div>
            </SimpleBar>     
        </section>
     
    )
}