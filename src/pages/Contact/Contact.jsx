import ContactForm from './components/ContactForm';
import './contact.style.css'

const Contact = () => {
    return (
        <div className='contact_wrapper'>
            <div className='contact_main'>
                <h1>Kontaktirajte nas</h1>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <ContactForm />
        </div>
    )
};

export default Contact;