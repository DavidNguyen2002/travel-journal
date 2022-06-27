import React from 'react'

function Card(props) {
    const data = props.item;
    return (
        <div className="card">
            <img src={data.imageUrl} alt={`Image of ${data.title}`} />
            <div className="card-body">
                <div className="location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    <h2>{data.location.toUpperCase()}</h2>
                    <a href={data.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{data.title}</h1>
                <h4>{`${data.startDate} - ${data.endDate}`}</h4>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default Card