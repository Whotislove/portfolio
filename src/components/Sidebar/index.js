import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/img/logo-s.png'
import LogoSubtitle from '../../assets/img/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
    </Link>
    <nav>
      {/*activeclassname добавляет класс когда активна именно эта ссылка */}
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4e4e4d" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4e4e4d" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4e4e4d" />
      </NavLink>
    </nav>
    <ul>
      <li>
        {/* target-открывает ссылку в новом окне, rel */}
        <a target="_blank" rel="noreferrer" href="https://vk.com/vladlobunets">
          <FontAwesomeIcon icon={faLinkedin} color="#4e4e4d" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Whotislove"
        >
          <FontAwesomeIcon icon={faGithub} color="#4e4e4d" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.codewars.com/users/Whotislove"
        >
          <FontAwesomeIcon icon={faCode} color="#4e4e4d" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://t.me/whotislove">
          <FontAwesomeIcon icon={faTelegram} color="#4e4e4d" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
