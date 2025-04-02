import '../team.style.css'

const TeamCard = ( {image, header, text, position, facebookUrl,twitterUrl, instagramUrl} ) => {
    return (
        <div className='bottom'>
            <img src={image} />
            <h2>{header}</h2>
            <p>{text}</p>
            <h4>{position}</h4>
            <div className='social_networks'>
                <a href={facebookUrl} target='_blank'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s'/></a>
                <a href={instagramUrl} target='_blank'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png'/></a>
                <a href={twitterUrl} target='_blank'><img src='https://store-images.s-microsoft.com/image/apps.60673.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.5d82b7eb-9734-4b51-b65d-a0383348ab1b'/></a>
            </div>
        </div>
    )
};

export default TeamCard;