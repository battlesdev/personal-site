import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'


export default function Footer() {
    return (
      <footer className="container mx-auto flex justify-center flex-col items-center h-60 gap-10">
        <Link href="https://twitter.com/nulldogma"><FontAwesomeIcon icon={faTwitter} /></Link>
        <nav>
          <ul className="flex gap-6">
            <li>
                <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <a href='#'>
                <svg></svg>
              </a>
            </li>
            <li>
              <a href='https://github.com/jerodestapa'>
              <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </nav>
        <p>&copy; 2023 Jerod Estapa. All rights reserved.</p>
      </footer>
    );
  }