//Gabriela Ceolin 200550539

import Navbar from '../components/navbar';
import Image from 'next/image';
import contactImage from '../public/contact-image.gif';
import Footer from '../components/footer';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
      <h1>Get In Touch</h1>
      <p>If you would like to collaborate, ask questions, or just say hi, feel free to reach out, you can use the contact form below.</p>
        <div className='d-flex justify-content-center'>
          <Image src={contactImage} alt="Contact Image" width={500} height={300} className="img-fluid"/>
        </div>
                  
        
        <form action="mailto:your.email@example.com" method="POST" encType="text/plain">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="form-control" rows="4" required></textarea>
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}

