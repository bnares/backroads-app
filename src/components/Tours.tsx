import React from 'react'
import Title from './Title'
import { ToursData } from '../data'

const Tours = () => {
  return (
    <section className="section" id="tours">
     <Title firstWord='featured' secondWord='tours' />

    <div className="section-center featured-center">
        {ToursData.map((item,idx)=>{
            return(
                <article className="tour-card" key={item.id}>
                    <div className="tour-img-container">
                    <img src={item.image} className="tour-img" alt="" />
                    <p className="tour-date">{item.date}</p>
                    </div>
                    <div className="tour-info">
                    <div className="tour-title">
                        <h4>{item.title}</h4>
                    </div>
                    <p>
                        {item.text}
                    </p>
                    <div className="tour-footer">
                        <p>
                        <span><i className="fas fa-map"></i></span> {item.subTirle}
                        </p>
                        <p>{item.subtDays} days</p>
                        <p>from ${item.subPrice}</p>
                    </div>
                    </div>
                </article>
            )
        })}
      

      
    </div>
  </section>
  )
}

export default Tours
