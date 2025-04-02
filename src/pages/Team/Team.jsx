import TeamCard from "./components/TeamCard";
import './team.style.css'

const Team = () => {

    let cards = [
        {
            id: 1,
            image: 'https://static-cse.canva.com/blob/1949168/1600w-B-cRyoh7b98.jpg',
            header: 'Jovana Jovanic',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam alias accusamus, labore animi quis!',
            position: 'Sales manager',
            facebookUrl: 'https://www.facebook.com/',
            twitterUrl: 'twitter.com',
            instagramUrl: 'https://www.instagram.com/',

        },
        {
            id: 2,
            image: 'https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250029862.webp',
            header: 'Petar Petrovic',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam alias accusamus, labore animi quis!',
            position: 'Sales manager',
            facebookUrl: 'https://www.facebook.com/',
            twitterUrl: 'https://x.com/',
            instagramUrl: 'https://www.instagram.com/',


        },
        {
            id: 3,
            image: 'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp',
            header: 'Bojana Bojanic',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam alias accusamus, labore animi quis!',
            position: 'Sales manager',
            facebookUrl: 'https://www.facebook.com/',
            twitterUrl: 'https://x.com/',
            instagramUrl: 'https://www.instagram.com/',

        },
        {
            id: 4,
            image: 'https://assets.manutd.com/AssetPicker/images/0/0/10/126/687724/Legends-Profile_Ole-Gunnar-Solskjaer1523463504754.jpg',
            header: 'Jovan Jovanic',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam alias accusamus, labore animi quis!',
            position: 'Sales manager',
            facebookUrl: 'https://www.facebook.com/',
            twitterUrl: 'https://x.com/',
            instagramUrl: 'https://www.instagram.com/',

        },

    ];

    return (
        <div className="team_wrapper">
            <div className="team_top">
                <h1>MEAT OUR TEAM</h1>
            </div>
            <div className='team_bottom'>
                {cards.map((card) => (
                    <TeamCard
                        key={card.id}
                        image={card.image}
                        header={card.header}
                        text={card.text}
                        position={card.position}
                        facebookUrl={card.facebookUrl}
                        twitterUrl={card.twitterUrl}
                        instagramUrl={card.instagramUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default Team;