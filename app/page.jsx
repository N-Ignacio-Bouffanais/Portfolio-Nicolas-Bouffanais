import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiSass, DiReact } from "react-icons/di";
import { FaVuejs, FaHome } from "react-icons/fa";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div>
      <header>
        <div className="container">
          <nav className="nav-main">
            <Link href="/">
              <FaHome id="icon-home" title="Home" />
            </Link>
            <Menu />
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <section id="primera_section" className="about">
            <div className="about-title">
              <h1>Hi, I'm Nicolás Bouffanais</h1>
            </div>
            <div className="about-main">
              <div className="about-info">
                <p>I'm Frontend developer</p>
                <p>
                  I had the opportunity to work as a junior in a software
                  development company for 4 months. I have been doing Frontend
                  projects in <span>Frontendmentor.io</span>
                </p>
                <p>
                  Here are a few technologies I’ve been working with recently:
                </p>
                <ul className="lista-habilidades">
                  <li>JavaScript (ES6+)</li>
                  <li>HTML5</li>
                  <li>CSS-GRID</li>
                  <li>CSS-flexbox</li>
                  <li>SASS</li>
                  <li>React JS</li>
                  <li>Node js</li>
                  <li>Nextjs</li>
                  <li>TypeScript</li>
                  <li>EsLint</li>
                </ul>
              </div>
              <div className="about-contact">
                <div className="contact-container">
                  <div className="linkedin card">
                    <Link
                      target="_blank"
                      className="icon-linkedin"
                      href="https://www.linkedin.com/in/nicolas-ignacio-bouffanais-lay-941989236/"
                      title="Nicolas' Linkedin"
                      rel="noreferrer"
                    >
                      <BsLinkedin />
                    </Link>
                  </div>
                  <div className="github card">
                    <Link
                      target="_blank"
                      href="https://github.com/N-Ignacio-Bouffanais"
                      title="Nicolas' Github"
                      rel="noreferrer"
                    >
                      <BsGithub />
                    </Link>
                  </div>
                  <div className="frontend card">
                    <Link
                      target="_blank"
                      href="https://www.frontendmentor.io/profile/N-Ignacio-Bouffanais"
                      title="Frontendmentor-profile"
                      rel="noreferrer"
                    >
                      <Image
                        src="/favicon-32x32.png"
                        alt="icon-frontend-mentor"
                        width={20}
                        height={32}
                      />
                    </Link>
                  </div>
                  <div className="twitter card">
                    <Link
                      target="_blank"
                      className="icon-twitter"
                      href="https://twitter.com/N_Bouffanais"
                      title="Nicolas' Twitter"
                      rel="noreferrer"
                    >
                      <BsTwitter />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="segunda_section" className="proyectos">
            <h1>Some Things I’ve Built</h1>
            <div className="proyectos-main">
              <Link
                title="Tips for developers"
                target="_blank"
                href="https://n-ignacio-bouffanais.github.io/Blog-tips-for-developers/"
                rel="noreferrer"
              >
                <div className="card-container">
                  <Image
                    src="/blog.JPG"
                    alt="Project image"
                    width={350}
                    height={150}
                    className="proyect-image-container"
                  />
                  <div className="card-body">
                    <h2>Blog Frontend developer</h2>
                    <p>
                      Guides and tips to start with JavaScript,CSS responsive,
                      HTML5 and deployed on github pages.
                    </p>
                  </div>
                  <div className="detail">
                    <div className="detail-icons">
                      <AiFillHtml5 className="html-icon" />
                      <DiCss3 className="css-icon" />
                      <DiJavascript1 className="js-icon" />
                    </div>
                    <p className="detail-date">06-10-2022</p>
                  </div>
                </div>
              </Link>
              <Link
                title="Dashboard with theme switcher"
                target="_blank"
                href="https://n-ignacio-bouffanais.github.io/Social-media-dashboard/"
                rel="noreferrer"
              >
                <div className="card-container">
                  <figure className="proyect-image-container">
                    <Image
                      src="/theme-switcher.JPG"
                      alt="Project image"
                      width={350}
                      height={150}
                    />
                  </figure>
                  <div className="card-body">
                    <h2>Dashboard theme switcher</h2>
                    <p>
                      This is a Social media dashboard with theme switcher build
                      with HTML, CSS GRID, CSS Flexbox y Javascript.
                    </p>
                  </div>
                  <div className="detail">
                    <div className="detail-icons">
                      <AiFillHtml5 className="html-icon" />
                      <DiCss3 className="css-icon" />
                      <DiJavascript1 className="js-icon" />
                    </div>
                    <p className="detail-date">24-10-2022</p>
                  </div>
                </div>
              </Link>
              <Link
                title="time-slots-app"
                target="_blank"
                href="https://time-slots-app.vercel.app/"
                rel="noreferrer"
              >
                <div className="card-container">
                  <figure className="proyect-image-container">
                    <Image
                      src="/time-slot.JPG"
                      alt="Project image"
                      width={350}
                      height={150}
                    />
                  </figure>
                  <div className="card-body">
                    <h2>time-slots-app</h2>
                    <p>
                      This project is about an app where the users can take a
                      time slot and a counter that show how many motorcylces are
                      available. This project was built with nextjs13.
                    </p>
                  </div>
                  <div className="detail">
                    <div className="detail-icons">
                      <AiFillHtml5 className="html-icon" />
                      <DiCss3 className="css-icon" />
                      <DiReact className="react-icon" />
                    </div>
                    <p className="detail-date">28-11-2022</p>
                  </div>
                </div>
              </Link>
              <Link
                title="easybank-landing-page"
                target="_blank"
                href="https://easybank-landing-page-omega-blue.vercel.app/"
                rel="noreferrer"
              >
                <div className="card-container">
                  <figure className="proyect-image-container">
                    <Image
                      src="/easybank-page.JPG"
                      alt="Project image"
                      width={350}
                      height={150}
                    />
                  </figure>
                  <div className="card-body">
                    <h2>easybank-landing-page</h2>
                    <p>
                      This is a solution to the easybank-landing-page challenge
                      on Frontend Mentor.
                    </p>
                  </div>
                  <div className="detail">
                    <div className="detail-icons">
                      <AiFillHtml5 className="html-icon" />
                      <DiSass className="sass-icon" />
                    </div>
                    <p className="detail-date">11-11-2022</p>
                  </div>
                </div>
              </Link>
              <Link
                title="Interactive rating component"
                target="_blank"
                href="https://n-ignacio-bouffanais.github.io/interactive-rating-component-main/"
                rel="noreferrer"
              >
                <div className="card-container">
                  <figure className="proyect-image-container">
                    <Image
                      src="/rating-component.JPG"
                      alt="Project image"
                      width={350}
                      height={150}
                    />
                  </figure>
                  <div className="card-body">
                    <h2>Interactive rating component</h2>
                    <p>
                      This is a solution to the
                      interactive-rating-component-main app challenge on
                      Frontend Mentor.
                    </p>
                  </div>
                  <div className="detail">
                    <div className="detail-icons">
                      <AiFillHtml5 className="html-icon" />
                      <DiCss3 className="css-icon" />
                      <DiJavascript1 className="js-icon" />
                    </div>
                    <p className="detail-date">17-10-2022</p>
                  </div>
                </div>
              </Link>
              <Link
                title="Vue form card"
                target="_blank"
                href="https://vuejs-cards-ruby.vercel.app/"
                rel="noreferrer"
              >
                <div className="card-container">
                  <figure className="proyect-image-container">
                    <Image
                      src="/card-vuejs.JPG"
                      alt="Project image"
                      width={350}
                      height={150}
                    />
                  </figure>
                  <div className="card-body">
                    <h2>Vue form card</h2>
                    <p>
                      This is a solution to the Interactive card details form
                      challenge on Frontend Mentor
                    </p>
                  </div>
                  <div className="detail">
                    <div className="detail-icons">
                      <AiFillHtml5 className="html-icon" />
                      <DiCss3 className="css-icon" />
                      <FaVuejs className="vue-icon" />
                    </div>
                    <p className="detail-date">03-10-2022</p>
                  </div>
                </div>
              </Link>
              <Link
                title="advice-generator"
                target="_blank"
                href="https://n-ignacio-bouffanais.github.io/advice-generator-app/src/"
                rel="noreferrer"
              >
                <div className="card-container">
                  <figure className="proyect-image-container">
                    <Image
                      src="/advice-generator.JPG"
                      alt="Project image"
                      width={350}
                      height={150}
                    />
                  </figure>
                  <div className="card-body">
                    <h2>Advice generator</h2>
                    <p>
                      This is a solution to the Advice generator app challenge
                      on Frontend Mentor.
                    </p>
                  </div>
                  <div className="detail">
                    <div className="detail-icons">
                      <AiFillHtml5 className="html-icon" />
                      <DiCss3 className="css-icon" />
                      <DiJavascript1 className="js-icon" />
                    </div>
                    <p className="detail-date">25-10-2022</p>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
