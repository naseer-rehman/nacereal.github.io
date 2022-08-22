import "./styles/AboutCard.scss";
import AvatarImage from "../images/avat.jpg";

const AboutCard = () => {
  return (
    <div className="ContentCard AboutCard">
      <h2>About</h2>
      <div className="about-me-photo-container">
        <img className="about-me-photo" src={AvatarImage} alt=""/>
      </div>
      <div className="content-box paragraph-container">
        <div className="text-center">
          <p>Hi, I'm Naseer.</p>
        </div>
        <p>
          I am a CS student at UWO with an interest in web development. While you're here, check out some of my projects.
        </p>
        <p>In my free time, I like to:</p>
        <ul>
          <li>learn programming</li>
          <li>go hiking/explore</li>
          <li>play video games</li>  
        </ul>
        <p>I want to learn more about:</p>
        <ul>
          <li>computer networks</li>
          <li>algorithms</li>
          <li>system design</li>
        </ul>
        <p>Check my contact information if you would like to get in touch. :)</p>
      </div>
    </div>
  );
};

export default AboutCard;