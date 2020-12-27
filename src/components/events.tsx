import React from "react";
import EventCard from "./event-card";

const Events = () => {

    const events = [
        {
            title: 'Jaxart: Hackaton ',
            description: 'In this case, the role of the health laboratory is very important to do a disease detection...',
            imageUrl: 'event1.png'
        },
        {
            title: 'Biotech.  ',
            description: 'Herbal medicine is very widely used at this time because of its very good for your health...',
            imageUrl: 'event2.png'
        },
        {
            title: 'Infinity isn’t limits!',
            description: 'A healthy lifestyle should start from now and also for your skin health. There are some...',
            imageUrl: 'event3.png'
        },
    ]

    return(
        <section id="projects" className="section" style={{ background: 'linear-gradient(#EFF0F6, #FFF)' }}>
            <div className="events">
                <p>
                    Check out our latest article
                </p>
                <h1>
                    Our Events
                </h1>
                <div className="events-arr">
                    {
                        events.map(event => (
                            <EventCard title={ event.title } description={ event.description } imageUrl={ event.imageUrl } />
                        ))
                    }
                </div>
                <button>
                    View all
                </button>
            </div>
        </section>
    );
}

export default Events;