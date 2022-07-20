import { DiGithubBadge } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';

export default function AboutPage() {
  return (
    <div className='about-developers'>
      <div className='single-dev'>
        <h2>Aaron Enyetu</h2>
        <img src="/Aaron1.jpg" />
        <p className='dev-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <span>
          <a className="dev-link" href="https://www.linkedin.com/in/aaron-enyetu/
" target='blank'>LinkedIn<AiFillLinkedin /></a>
          <a className="dev-link" href="https://github.com/aaronEnyetu/
" target='blank'>GitHub<DiGithubBadge /></a>
        </span>
      </div>
      <div className='single-dev'>
        <h2>Jenna Graham</h2>
        <img src="/Jenna.jpeg" />
        <p className='dev-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <span>
          <a href="https://www.linkedin.com/in/jenna-lee-graham/
" target='blank'> LinkedIn<AiFillLinkedin /></a>
          <a href="https://github.com/jenna-graham
" target='blank'>GitHub<DiGithubBadge /></a>
        </span>
      </div>
      <div className='single-dev'>
        <h2>Mariah Schock</h2>
        <img src="/Mariah.jpg" />
        <p className='dev-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <span>
          <a href="https://www.linkedin.com/in/mariah-schock" target='blank'>LinkedIn<AiFillLinkedin /></a>
          <a href="https://github.com/mariahschock" target='blank'>GitHub<DiGithubBadge /></a>
        </span>
      </div>
      <div className='single-dev'>
        <h2>Sebastian Simek</h2>
        <img src="/crab.jpg" />
        <p className='dev-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <span>
          <a href="https://www.linkedin.com/in/sebastian-simek/" target='blank'>LinkedIn<AiFillLinkedin /></a>
          <a href="https://github.com/sebastian-Simek/" target='blank'>GitHub<DiGithubBadge /></a>
        </span>
      </div>
    </div>
  );
}
