import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="hero">
        <div className="hero-left">
          <h1>
            HamidReza
            <br />
            <span>Delshad</span>
          </h1>
          <p>
            I am a Graphic Designer, UI/UX artist and Junior web developer.
            Previously I had Bachelor's degree in Computer Science from Iran. I
            have 18 years of work experience in Graphic Design and many years in
            UI/ UX and tools like Adobe Photoshop, Illustrator, InDesign,
            Lightroom, CorelDraw, Freehand, Figma and Adobe XD and had worked
            within teams as well as on individual projects. Also, I can do
            programming with HTLM5, CSS, Javascript, React.Js, and Python for
            Web Development.
          </p>
          <Link to="/frontend">
            <button className="btn btn-active hover:bg-[#374EA2] w-40">frontend</button>
          </Link>
        </div>
        <div className="hero-right" />
      </div>
      <div className="hero">
        <div className="hero-left2" />
        <div className="hero-right2">
          <h1>
            HamidReza
            <br />
            <span>Delshad</span>
          </h1>
          <p>
            I am a Graphic Designer, UI/UX artist and Junior web developer.
            Previously I had Bachelor's degree in Computer Science from Iran. I
            have 18 years of work experience in Graphic Design and many years in
            UI/ UX and tools like Adobe Photoshop, Illustrator, InDesign,
            Lightroom, CorelDraw, Freehand, Figma and Adobe XD and had worked
            within teams as well as on individual projects. Also, I can do
            programming with HTLM5, CSS, Javascript, React.Js, and Python for
            Web Development.
          </p>
          <Link to="/graphic">
            <button className="btn btn-active hover:bg-[#374EA2] w-40">graphic</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
