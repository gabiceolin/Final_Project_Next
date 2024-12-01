import Navbar from '../components/navbar';
import Image from 'next/image';
import heroImage from '../public/home-image.gif';
import styles from '../styles/home.module.css';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a passionate front-end developer with experience in web development and data analysis.</p>
          <a href="#about" className={styles.heroButton}>Learn More About Me</a>
        </div>
        <Image src={heroImage} alt="Welcome Image" width={500} height={250} className={styles.heroImage} />
      </section>
      
      {/* Main Container */}
      <div className="container">
        <section id="about" className={styles.section}>
          <h2>About Me</h2>
          <p>I'm a chemical engineer specializing in creating dynamic and user-friendly websites and applications. I have a strong background in JavaScript, Python, and web technologies. I'm constantly learning new technologies and striving to improve my skills.</p>
          <p>Aside from coding, I enjoy problem-solving, designing user interfaces, and optimizing performance for web applications. My goal is to build scalable, efficient, and accessible products that make a positive impact.</p>
          <a href="/about" className={styles.btnSecondary}>Read More</a>
        </section>
        <br></br>
        
        <section id="portfolio" className={styles.section}>
          <h2>Portfolio</h2>
          <p>Explore some of the apps I've built using APIs and my skills in web development.</p>
          <a href="/portfolio" className={styles.heroButton}>View My Work</a>
        </section>
        <br></br>
        <section id="contact" className={styles.section}>
          <h2>Contact</h2>
          <p>Feel free to reach out to me if you're interested in collaborating or have any questions.</p>
          <a href="/contact" className={styles.heroButton}>Contact Me</a>
        </section>
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}
