import React from "react";

const Hero = (props) => {
  const { handleLogout } = props;
  return (
    <section className="hero nav button">
      <nav>
        <h2>Welcome! This is Your Current Location</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  );
};

export default Hero;
