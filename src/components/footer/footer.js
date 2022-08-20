import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faWeixin,
  faCodepen
} from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './footer.css';


export default function Footer() {
  return (
    <div className="footer">
      <div className="footCont">
        <span className="copyrightText">
          Copyright © {new Date().getFullYear()}. &nbsp;&nbsp; <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noreferrer">鲁ICP备2022021073号-1</a>
        </span>
        <div className="socialinks">
          <span>Follow me</span>
          <a href="https://github.com/oneshark5" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="onesahrk5" target="_blank">
            <FontAwesomeIcon icon={faWeixin} />
          </a>
          <a href="" target="_blank">
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </div>
      </div>
    </div>
  )
}
