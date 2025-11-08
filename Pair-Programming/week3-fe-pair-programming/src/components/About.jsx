import aboutImg from '../assets/images/about.jpeg'
import Title from './Title'

function About() {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
            officia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            repudiandae?
          </p>
          <a href="#tours" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  )
}

export default About
