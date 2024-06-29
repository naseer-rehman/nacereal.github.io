import "../styles/AboutMeSection.scss";
import portraitText from "../modules/portrait";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import EmailIcon from "./icons/EmailIcon";

const AboutMeRow = ({label, value}) => {
  return <div className="about-me__row">
    <span className="about-me__label">{`${label}: `}</span><span className="about-me__label-text">{value}</span>
  </div>;
};

const SocialLink = (props) => {
  return (
    <a href={props.href} className="about-me__social-link">
      {props.children}
      {props.name}
    </a>
  );
};

function AboutMeSection() {
  return (
    <div className="about-me">
      <div className="about-me__portrait" aria-label="ASCII portrait of Naseer Rehman">
        {portraitText}
      </div>
      <div className="about-me__body">
        <div className="about-me__body-title">
          naseer-rehman@my-website<br/>
          ------------------------
        </div><br/>
        <AboutMeRow label="OS" value="Naseer Rehman on naseer.io" />
        <AboutMeRow label="Kernel" value="Corn" />
        <AboutMeRow label="Shell" value="Turtle" />
        <AboutMeRow label="Theme" value="Problem-solver, Challenge-seeker" />
        <AboutMeRow label="CPU" value="B.S. Computer Science (3rd year)" />
        <AboutMeRow label="GPU" value="RX580 that needs to be replaced" />
        <AboutMeRow label="Interest" value="Cooking, Coding, Canoeing" />
        {/* TODO: Add email link, maybe another icon? */}
        <div className="about-me__socials">
          <SocialLink href="https://google.ca" name="GitHub"><GithubIcon /></SocialLink>
          <SocialLink href="https://google.ca" name="LinkedIn"><LinkedinIcon /></SocialLink>
          <SocialLink href="https://google.ca" name="email"><EmailIcon /></SocialLink>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;