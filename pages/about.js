//Gabriela Ceolin 200550539

import Navbar from '../components/navbar';
import Image from 'next/image';
import aboutImage from '../public/about-image.jpg';
import Footer from '../components/footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-md-3  ">
          <div className="d-flex justify-content-center">
            <Image src={aboutImage} alt="About Me" width={300} height={200} className="img-fluid oval-image" />
          </div>
          </div>

          {/* Text Column */}
          <div className="col-md-6">
            <p>
              I am a chemical engineer and data analyst with a passion for building web applications that solve real-world problems. 
              My background in engineering has given me a strong foundation in problem-solving, which I apply to my software development projects.
            </p>
            
            <h2>Education & Experience</h2>
            <ul>
              <li><strong>Computer Programming</strong> - Georgian College (Graduated 2024)</li>
              <li><strong>Bachelor’s Degree in Chemical Engineering</strong> - Graduated 2017</li>
            </ul>

            <h2>Skills</h2>
            <ul>
              <li>JavaScript (React, Next.js)</li>
              <li>Python (Django, Flask)</li>
              <li>HTML, CSS, Bootstrap, Tailwind</li>
              <li>SQL, NoSQL (MongoDB, PostgreSQL)</li>
              <li>API Development & Integration</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}