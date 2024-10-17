import EventCard from '@/app/components/EventsCard';
import EventsData from "./event";

const Events = () => {
    const styles = {
        eventWrapper: {
            
            overflowX: 'hidden',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundImage: "url('https://res.cloudinary.com/dqlnb4ddv/image/upload/v1728995301/space_bg_gqgrxu.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingBottom: '40px', // Added padding to the bottom so it doesn't cut off abruptly
        },
        eventHeading: {
            height: 'auto',
            width: '300px',
            margin: '50px auto 0',
            fontSize: '80px',
            textAlign: 'center',
            fontWeight: '800',
            color: 'white',
        },
        eventBg: {
            marginTop: '40px',
            width: '90vw',
            display: 'flex',
            flexWrap: 'wrap', // Wrap event cards in desktop view
            justifyContent: 'center', // Center the cards
            
        },
        // Style for each EventCard on desktop
        eventCardDesktop: {
            margin: '20px',
            flex: '1 0 30%', // Make cards take up around 30% of the width
            minWidth: '250px',
        },
        // Mobile-specific styles
        '@media (max-width: 450px)': {
            eventBg: {
                display: 'block', // Stack cards vertically on mobile
                
                marginTop: '30px',
                width: '100vw',
                justifyContent:'center'
            },
            eventCardDesktop: {
                margin: '10px 0', // Adjust margin for stacked layout
                width: '100%', // Cards take full width on mobile
            },
            eventHeading: {
                marginTop: '10vh',
                textAlign: 'center',
                fontSize: '60px', // Reduce font size for mobile
            },
        },
    };

    return (
        <div style={styles.eventWrapper} id="events">
            <div className='font-Eagle' style={styles.eventHeading}>Events</div>
            <div style={styles.eventBg}>
                {EventsData.events.map((item) => (
                    <div  style={styles.eventCardDesktop} key={item.reference}> {/* Use a unique key */}
                        <EventCard
                            title1={item.name}
                            content={item.desc}
                            image={item.photo}
                            order={item.order}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
