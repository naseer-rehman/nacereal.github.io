import "../styles/AboutMeSection.scss";
import portraitText from "../modules/portrait";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import EmailIcon from "./icons/EmailIcon";
import ASCIIPortrait from "./icons/ASCIIPortrait";

const AboutMeRow = ({label, value}) => {
  return <div className="about-me__row">
    <span className="about-me__label">{`${label}: `}</span><span className="about-me__label-text">{value}</span>
  </div>;
};

const SocialLink = ({href, children, name, ...props}) => {
  return (
    <a href={href} className="about-me__social-link" {...props}>
      {children}
      {name}
    </a>
  );
};

function AboutMeSection() {
  return (
    <div className="about-me">
      {/* TODO: Change this icon to the bolded version, not the regular version... also maybe a file with smaller size? */}
      <ASCIIPortrait className="about-me__portrait" aria-label="ASCII portrait of Naseer Rehman" />
      <div className="about-me__body">
        <div className="about-me__body-title">
          naseer-rehman@my-website<br/>
          ------------------------
        </div><br/>
        <AboutMeRow label="OS" value="Naseer Rehman on naseer.io" />
        <AboutMeRow label="Experience" value="Front-End Developer, SQA Analyst" />
        <AboutMeRow label="Languages" value="C++, C, JS, Java, Python, SQL" />
        <AboutMeRow label="Theme" value="Problem-solver, Challenge-seeker" />
        <AboutMeRow label="CPU" value="3rd B.S. Computer Science" />
        <AboutMeRow label="GPU" value="RX580 that needs to be replaced" />
        <AboutMeRow label="Interests" value="Exercising, Coding, Gaming" />
        <div className="about-me__socials">
          <SocialLink href="https://github.com/naseer-rehman" name="GitHub" target="_blank"><GithubIcon /></SocialLink>
          <SocialLink href="https://www.linkedin.com/in/naseer-rehman/" name="LinkedIn" target="_blank"><LinkedinIcon /></SocialLink>
          <SocialLink href="mailto:rehmn.nas@gmail.com" name="email"><EmailIcon /></SocialLink>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;