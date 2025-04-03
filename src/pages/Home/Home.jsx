import Button from '../../components/GlobalButton/Button';
import './home.style.css'


const Home = () => {
    return (
        <div className='home_wrapper'>
            <div className='home_section'>
                <span className='shadow hello'>Hello there</span>
                <h2 className='shadow'>I'm Milan Mircic</h2>
            </div>
            <div className="contact_section">
                <p>If you want to stay in touch</p>
                <Button text="Contact us" link="/contact" />
            </div>
        </div>
    )
};

export default Home;