import React from "react";

export default function Hero (props) {


    return (
        <div className="hero">
            <div className="hero--left">
                <img src={props.imageUrl} className="hero--image"/>
            </div>

            <div className="hero--right">
                <section>
                <img src="Location.png" className="hero--locationIcon"/>
                <h4 className="hero--country">{props.location}</h4>
                <a href={props.googleMapsUrl}><h5 className="hero--link">View on Google Maps</h5></a>
                </section>
                <h2 className="hero--location">{props.title}</h2>
                <h4 className="hero--date">{props.startDate} - {props.endDate}</h4>
                <p className="hero--para">{props.description}</p>
            </div>
        </div>
    )
}