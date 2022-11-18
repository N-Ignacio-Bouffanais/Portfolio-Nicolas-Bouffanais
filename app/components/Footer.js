import Link from "next/link";
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs'
export default function Footer() {
  return (
    <div>
          <footer>
              <div className='footer-container'>
                  <ul>
                      <li>
                          <Link
                              className='icons-footer'
                              href='https://github.com/N-Ignacio-Bouffanais'
                              target='_blank'
                              title='Ver Perfil de Github'
                              rel='noreferrer'
                          >
                              <BsGithub />
                          </Link>
                      </li>
                      <li>
                          <Link
                              className='icons-footer'
                              href='https://twitter.com/N_Bouffanais'
                              target='_blank'
                              title='See Twitter profile'
                              rel='noreferrer'
                          >
                              <BsTwitter />
                          </Link>
                      </li>
                      <li>
                          <Link
                              className='icons-footer'
                              href='https://www.instagram.com/n_bouffanais/'
                              target='_blank'
                              title='See Instagram profile'
                              rel='noreferrer'
                          >
                              <BsInstagram />
                          </Link>
                      </li>
                      <li>
                          <Link
                              className='icons-footer'
                              href='https://www.linkedin.com/in/nicolas-ignacio-bouffanais-lay-941989236/'
                              target='_blank'
                              title='See Linkedin profile'
                              rel='noreferrer'
                          >
                              <BsLinkedin />
                          </Link>
                      </li>
                  </ul>
                  <div className='footer-text'>
                      <p>Designed & Built by Nicolas Bouffanais</p>
                  </div>
              </div>
          </footer>
    </div>
  )
}
