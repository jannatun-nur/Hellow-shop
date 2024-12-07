
import bag from "../../../public/assets/images/bag.png";
import signup from "../../../public/assets/images/signup.png";
import "./signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      {/* Left-side form */}
      <div className="form-container">
        <div className="form-content">
          <img src={bag} alt="Bag Icon" className="form-logo" />
          <form className="form">
            <input type="text" placeholder="NAME" className="form-input" />
            <input type="email" placeholder="EMAIL" className="form-input" />
            <input type="tel" placeholder="NUMBER" className="form-input" />
            <input type="text" placeholder="ADDRESS" className="form-input" />
            <input type="url" placeholder="IMAGE URL" className="form-input" />
            <button type="submit" className="submit-button">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Right-side image and icons */}
      <div className="image-container">
        <img src={signup} alt="Signup Illustration" className="illustration" />
        <div className="social-icons">
          <img
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="Google"
            className="icon"
          />
          <img
            src="https://img.icons8.com/ios-filled/48/000000/new-post.png"
            alt="Email"
            className="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
