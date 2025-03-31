import '../about.style.css'

const AboutCard = ( {icon, header, text} ) => {
    return (
        <div className='bottom'>
            <span>{icon}</span>
            <h3>{header}</h3>
            <p>{text}</p>
        </div>
    )
};

export default AboutCard;