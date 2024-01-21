import { GrInstagram, GrLinkedin } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";

const About = () => {
  // Sample upcoming features (replace with your actual features)
  const upcomingFeatures = [
    "Rich text formatting",
    "Dark mode enhancement",
    "Collaborative notebooks",
  ];

  return (
    <div className="container my-3">
      <h2 className="mb-5">About Our Note-Taking App</h2>

      {/* Add your app description and other relevant information here */}

      <div className="upcoming-features">
        <h3>Upcoming Features Sneak Peek</h3>
        <p>
          Exciting improvements are on the horizon! Here&apos;s a glimpse of
          what&apos;s coming:
        </p>

        <ul>
          {upcomingFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <p>
          Stay tuned for these enhancements that will take your note-taking
          experience to the next level!
        </p>
      </div>

      <div className="social-media">
        <h3>Connect with Us on Social Media</h3>
        <p>
          Follow us on{" "}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter className="twitter-icon" />
          </a>{" "}
          Twitter,{" "}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedin className="linkedin-icon" />
          </a>{" "}
          LinkedIn, and{" "}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrInstagram className="instagram-icon" />
          </a>{" "}
          Instagram for updates and announcements.
        </p>
      </div>
    </div>
  );
};

export default About;
