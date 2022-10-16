import "./styles/ContactCard.scss";

const ContactCard = () => {
  const email = "rehmn.nas@gmail.com";

  return (
    <div className="ContentCard ContactCard">
      <h2>Contact</h2>
      <div className="card-content-container contact-card-content">
        <div className="links-container content-box">
          <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
          <p>Resume: <a href="https://google.ca">Click here</a></p>
        </div>
        <div className="horizontal-line-separator"></div>
        <div className="icon-links-container">
          <a className="icon-link" href="https://github.com/naseer-rehman">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 0C115.3 0 0 116.3 0 257c0 139.9 114.3 255 256 255 141.6 0 256-115 256-255C512 116.3 396.7 0 256 0zm45 477.5a222.3 222.3 0 0 1-90 0v-70.2c0-16.8 4.5-22.8 10.5-30.9 3-3.5 4.9-6.6 18.6-27.3l-23.1-3.6c-59.4-8.7-82.8-39.6-92.1-63.6a102 102 0 0 1 15.9-97.8 18 18 0 0 0 3.6-17.4 88.4 88.4 0 0 1-.9-44.1c16 2.3 32.3 13.7 45.9 21.9 6.3 3.7 9.6 2.7 12.6 3 11-2.3 28-7.8 54.3-7.8 16.2 0 33.3 2.4 50.1 7.2 3 0 7.8 2.5 16.2-2.4 14.3-8.7 30-19.7 45.9-21.9 3 8.4 3.6 30.3-.9 44.1a18 18 0 0 0 3.6 17.4 102 102 0 0 1 15.9 97.8c-9.3 24-32.7 54.9-92.1 63.6l-23.1 3.6c14.2 21.4 15.7 24 18.6 27.3 6 8.1 10.5 14.1 10.5 30.9zm30-8.7v-61.5a72 72 0 0 0-8.4-36.9c45.6-12.3 78-39.3 92.4-78a131.9 131.9 0 0 0-17.1-123c4.5-20.1 4.5-52.2-6.3-67.2A23.4 23.4 0 0 0 371.8 92h-.3c-23.3 1.3-41.6 13-61.2 24.9a207.2 207.2 0 0 0-108.3 0c-20.7-12.5-38.8-23.7-62.7-24.9a23 23 0 0 0-18.9 10.2c-10.8 15-10.8 47.1-6.3 67.2a132 132 0 0 0-17.1 123c14.4 38.7 46.8 65.7 92.4 78a65 65 0 0 0-7.8 26.3 40 40 0 0 1-24.7 2 33 33 0 0 1-19.2-16.5c-12-20-32.2-36.3-55.3-34.2l2.6 30c10.7-1 21.4 10.3 26.9 19.7a63 63 0 0 0 36.5 29.9 63.5 63.5 0 0 0 32.6.9v40.4A225.5 225.5 0 0 1 30 257C30 132.8 131.8 30 256 30s226 102.8 226 227c0 97.8-63.7 181.2-151 211.8zm0 0"/>
            </svg>
          </a>
          <a className="icon-link" href="https://www.linkedin.com/in/naseer-rehman/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path d="M44 1H6a5 5 0 0 0-5 5v38a5 5 0 0 0 5 5h38a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5zm3 43a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h38a3 3 0 0 1 3 3v38z"/>
              <path d="M8 42h8V19H8v23zm2-21h4v19h-4V21zm2-14a5 5 0 1 0 .01 10.01A5 5 0 0 0 12 7zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm19 4c-1.36 0-2.7.3-4 .92V19h-8v23h8V31a4 4 0 0 1 8 0v11h8V31c0-6.62-5.38-12-12-12zm10 21h-4v-9a6 6 0 0 0-12 0v9h-4V21h4v2.52l1.56-1.06A7.87 7.87 0 0 1 31 21c5.51 0 10 4.49 10 10v9z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;