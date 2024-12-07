

const Signup = () => {
    return (
        <div>
             <div className="container">
      {/* Sidebar with form */}
      <div className="form-container">
        <img
          src="https://via.placeholder.com/60"
          alt="logo"
          className="form-logo"
        />
        <form className="form">
          <input type="text" placeholder="NAME" className="form-input" />
          <input type="email" placeholder="EMAIL" className="form-input" />
          <input type="tel" placeholder="NUMBER" className="form-input" />
          <input type="text" placeholder="ADDRESS" className="form-input" />
          <input type="url" placeholder="IMAGE URL" className="form-input" />
          <button type="submit" className="submit-button">SUBMIT</button>
        </form>
      </div>

      {/* Right-side image and icons */}
      <div className="image-container">
        <img
          src="https://via.placeholder.com/300x300"
          alt="illustration"
          className="illustration"
        />
        <div className="social-icons">
          <img
            src="https://via.placeholder.com/30"
            alt="Google"
            className="icon"
          />
          <img
            src="https://via.placeholder.com/30"
            alt="Email"
            className="icon"
          />
        </div>
      </div>
    </div>
        </div>
    );
};

export default Signup;