import { DiGithubBadge } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';

export default function AboutPage() {
  return (
    <div>
      <header className="jams">
        <h1>Meet the J A M S !</h1>
      </header>
      <div className="about-developers">
       
        <div className="single-dev">
          <h2>Jenna Graham</h2>
          <img className="dev-image" src="/Jenna.jpeg" />
          <p className="dev-p">Jenna is a Full Stack Software Developer based in Portland, Oregon. When she is not in front of the computer screen she enjoys yoga, photography and teaches a dance called Kizomba.</p>
          <span>
            <a
              className="dev-link"
              href="https://www.linkedin.com/in/jenna-lee-graham/
"
              target="blank"
            >
              {' '}
            LinkedIn
              <AiFillLinkedin />
            </a>
            <a
              className="dev-link"
              href="https://github.com/jenna-graham
"
              target="blank"
            >
            GitHub
              <DiGithubBadge />
            </a>
          </span>
        </div>
        <div className="single-dev">
          <h2>Aaron Enyetu</h2>
          <img className="dev-image" src="/Aaron1.jpg" />
          <p className="dev-p">Aaron is a Software Engineer based in Austin, Texas. He is passionate about sustainable organic agriculture.</p> <br /> <br />
          <span>
            <a
              className="dev-link"
              href="https://www.linkedin.com/in/aaron-enyetu/
"
              target="blank"
            >
            LinkedIn
              <AiFillLinkedin />
            </a>
            <a
              className="dev-link"
              href="https://github.com/aaronEnyetu/
"
              target="blank"
            >
            GitHub
              <DiGithubBadge />
            </a>
          </span>
        </div>
        <div className="single-dev">
          <h2>Mariah Schock</h2>
          <img className="dev-image" src="/Mariah.jpg" />
          <p className="dev-p">Mariah is a Full Stack Software Engineer based in Sherwood, Oregon. Outside of coding, she enjoys hiking and paddle-boarding.</p> <br /> <br />
          <span>
            <a className="dev-link" href="https://www.linkedin.com/in/mariah-schock" target="blank">
            LinkedIn
              <AiFillLinkedin />
            </a>
            <a className="dev-link" href="https://github.com/mariahschock" target="blank">
            GitHub
              <DiGithubBadge />
            </a>
          </span>
        </div>
        <div className="single-dev">
          <h2>Sebastian Simek</h2>
          <img className="dev-image" src="/crab.jpg" />
          <p className="dev-p">Sebastian is a Full Stack Software engineer based in Portland Oregon. Outside of coding he enjoys kayaking and playing tennis.</p> <br /> <br />
          <span>
            <a
              className="dev-link"
              href="https://www.linkedin.com/in/sebastian-simek/"
              target="blank"
            >
            LinkedIn
              <AiFillLinkedin />
            </a>
            <a className="dev-link" href="https://github.com/sebastian-Simek/" target="blank">
            GitHub
              <DiGithubBadge />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
