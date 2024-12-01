import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Resume() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center text-primary mb-4">Resume</h1>
        
        <p className="text-center">Click below to download my resume:</p>
        <div className="d-flex justify-content-center mb-4">
          <a href="/resume.pdf" download className="btn btn-primary">
            Download Resume (PDF)
          </a>
        </div>
        
        <section className="mb-5">
          <h2 className="text-secondary">SUMMARY OF QUALIFICATIONS</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Experience in data analysis and business intelligence, with a strong focus on data reporting.</li>
            <li className="list-group-item">Knowledge in Python, SQL, and Java.</li>
            <li className="list-group-item">Experienced in writing complex SQL queries to transform and extract data from relational databases, with a strong understanding of data analysis and data transformation processes.</li>
            <li className="list-group-item">Experienced in collaborating across teams to translate business objectives into data-driven projects that enhance operational efficiency.</li>
            <li className="list-group-item">Excellent problem-solving skills and ability to work with large, complex datasets.</li>
            <li className="list-group-item">Strong communication skills, able to present insights clearly to both technical and non-technical audiences.</li>
            <li className="list-group-item">Fluent in English, intermediate level in French.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="text-secondary">WORK EXPERIENCE</h2>
          <div className="mb-4">
            <h3>Colgate Palmolive (Brazil)</h3>
            <p><strong>Continuous Improvement Coordinator</strong> | 2022 - 2023</p>
            <ul>
              <li>Developed and maintained KPI dashboards using data visualization tools, providing insights to stakeholders in production efficiency and cost reduction.</li>
              <li>Analyzed production data and transformed datasets using SQL, ensuring data integrity across multiple sources.</li>
              <li>Assisted in the design and development of data models supporting predictive analytics and decision-making processes.</li>
              <li>Collaborated with data engineering teams to ensure data accuracy, cleaning, transformation, and feature engineering.</li>
              <li>Actively participated in cross-functional team meetings, explaining complex analytics to non-technical stakeholders.</li>
            </ul>

            <p><strong>Continuous Improvement Analyst</strong> | 2019 – 2022</p>
            <ul>
              <li>Led data analysis efforts to identify trends and drive continuous improvement initiatives, resulting in significant cost savings.</li>
              <li>Created and implemented data models in Excel and SQL to support production planning and efficiency improvements.</li>
              <li>Developed and managed dashboards to monitor key performance indicators, supporting data-driven decision-making for leadership.</li>
              <li>Played a key role in ensuring data accuracy by conducting thorough data validation and addressing discrepancies.</li>
              <li>Contributed to the development of user-facing documentation for data processes and metrics, supporting the data-driven culture within the organization.</li>
            </ul>
          </div>

          <h3>Technical Support Volunteer</h3>
          <p>2021 – 2022</p>
          <ul>
            <li>Provided remote technical support to seniors, resolving issues with various applications including Microsoft Office, Zoom, and email platforms.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-secondary">EDUCATION</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Computer Programming</strong> - Georgian College | 2024</li>
            <li className="list-group-item"><strong>Certificate in Python</strong> - FIAP | 2022</li>
            <li className="list-group-item"><strong>Bachelor’s Degree in Chemical Engineering</strong> - Maua Institute of Technology | 2017</li>
          </ul>
        </section>
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}
