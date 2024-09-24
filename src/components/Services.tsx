import React from 'react'
import Title from './Title'
import { ServicesData } from '../data'

const Services = () => {
  return (
    <section className="section services" id="services">
    <Title firstWord='our' secondWord='services' />
    <div className="section-center services-center">
        {ServicesData.map((item,idx)=>{
            return(
                <article className="service" key={item.id}>
                    <span className="service-icon">{item.icon}</span>
                    <div className="service-info">
                    <h4 className="service-title">{item.title}</h4>
                    <p className="service-text">
                        {item.text}
                    </p>
                    </div>
                </article>
            )
        })}
    </div>
  </section>
  )
}

export default Services
