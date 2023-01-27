import "./Footer.css";
import { BsLinkedin, BsInstagram, BsGithub,BsWhatsapp } from "react-icons/bs";
import {SiDiscord} from 'react-icons/si'
import {ReactComponent as LogoFooter} from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">left</div>
      <div className="footer-center footer-left">
        <LogoFooter/>
      </div>
      <div className="footer-right footer-left">
        Contact me:
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/hamidreza-delshad/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin fontSize={30} />
          </a>
          <a
            href="https://github.com/Hamidswed"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub fontSize={30} />
          </a>
          <a href='https://github.com/Hamidswed' target='_blank' rel="noreferrer">
            <SiDiscord fontSize={30}/>
          </a>
          <a
            href="https://www.instagram.com/hrddesigner/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram fontSize={30} />
          </a>
          <a href='https://wa.me/0046735883889' target='_blank' rel="noreferrer">
            <BsWhatsapp fontSize={30}/>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
