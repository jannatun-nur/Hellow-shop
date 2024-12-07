import './signin.css'
import bag from '../../../public/assets/images/bag.png'
import signin from '../../../public/assets/images/signin (1).png'

const Signin = () => {
    return (
        <div className="signin-container">
        {/* Left-side form */}
        <div className="form-containers">
          <div className="form-content">
            <img src={bag} alt="Bag Icon" className="form-logo" />
            <form className="form">
              <input type="text" placeholder="Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
              <input type="password" placeholder="Password" className="form-input" />
              
              
              <button type="submit" className="submit-buttons">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
  
        {/* Right-side image and icons */}
        <div className="image-container">
          <img src={signin} alt="Signup Illustration" className="illustration" />
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

export default Signin;