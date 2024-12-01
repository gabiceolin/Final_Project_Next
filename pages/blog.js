//Gabriela Ceolin 200550539

import Navbar from '../components/navbar';
import Image from 'next/image';
import aiImage from '../public/Ai-image.jpg';
import dnaImage from '../public/dna-image.jpg';
import Footer from '../components/footer';


export default function Blog() {
    return (
      <div>
        <Navbar />
        <div className="container mt-4">
          <h1>Articles</h1>
          
          {/* First Article */}
          <article className="row align-items-center mb-5">
            <div className="col-md-4">
              <Image src={aiImage} alt="AI" width={400} height={300} className="img-fluid oval-image" />
            </div>
            <div className="col-md-6">
              <h2>AI simulations of 1000 people accurately replicate their behaviour</h2>
              <p>
                Learn how to use third-party APIs to fetch data and display it in your web applications. 
                In this post, we’ll cover the process of integrating the Gold Price and Nutrition APIs into a Next.js app.
              </p>
              <a 
                href="https://www.newscientist.com/article/2457233-ai-simulations-of-1000-people-accurately-replicate-their-behaviour/" 
                target="_blank" 
                className="btn btn-primary">
                Read More
              </a>
            </div>
          </article>
  
          {/* Second Article */}
          <article className="row align-items-center mb-5">
            <div className="col-md-4">
              <Image src={dnaImage} alt="DNA" width={400} height={300} className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>DNA has been modified to make it store data 350 times faster</h2>
              <p>
                Researchers have managed to encode enormous amounts of information, including images, into DNA 
                at a rate hundreds of times faster than was previously possible.
              </p>
              <a 
                href="https://www.newscientist.com/article/2452876-dna-has-been-modified-to-make-it-store-data-350-times-faster/" 
                target="_blank" 
                className="btn btn-primary">
                Read More
              </a>
            </div>
          </article>
        </div>
        <Footer /> {/* Add the Footer component */}
      </div>
    );
  }