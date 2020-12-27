import React from "react";

const EventCard = ({ title, description, imageUrl }: any) => {
    return(
        <div className="event">
            <img src={ `/assets/${ imageUrl }` } alt=""/>
            <div className="event-info">
                <h2>{ title }</h2>
                <p>
                    { description }
                </p>
                <a href="">
                    Read more...
                </a>
            </div>
        </div>
    );
}

export default EventCard;