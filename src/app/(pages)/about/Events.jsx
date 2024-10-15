
import EventCard from '@/app/components/EventsCard';
import EventsData from "./events.json";


const Events = () => {
    const styles = {
        eventWrapper: {
            overflowx:'hidden',
            width: '100%',
            height: '370vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundImage: "url('https://res.cloudinary.com/dqlnb4ddv/image/upload/v1728995301/space_bg_gqgrxu.jpg')",
            
        },
        eventHeading: {
            height: '100px',
            width: '300px',
            margin: '40px auto 0',
            fontSize: '80px',
            textAlign: 'center',
            fontWeight: '800',
            color:'white',
            
        },
        eventBg: {
            marginLeft: '50px',
            marginTop: '40px',
            width: '90vw',
            height: '100vh',
            
            
        },
        // Mobile-specific styles
        '@media (max-width:450px)': {

            eventWrapper:{
               width:'100vw'
            },
           eventHeading: {
                marginTop: '10vh',
                textAlign: 'center',
            },
            eventBg: {
                marginLeft: '0px',
                marginTop: '30px',
                width: '100vw',
                height: '100vh',
                
                
            },
        },
    };

    return (
        
        <div style={styles.eventWrapper} >
            <div className='font-Eagle' style={styles.eventHeading}>Events</div>
            <div style={styles.eventBg}>
                {EventsData.events.map((item) => (
                    <EventCard
                        key={item.name}
                        title1={item.name}
                        content={item.desc}
                        image={item.photo}
                        order={item.order}
                    />
                ))}
            </div>
        </div>
    );
};

export default Events;
