import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <p>
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-lg">
                We are a team of passionate developers and designers dedicated
                to creating beautiful and functional websites and applications.
                Our mission is to deliver high-quality solutions that meet the
                needs of our clients and exceed their expectations.
              </p>
              <p className="mb-4 text-lg">
                With a focus on innovation and excellence, we strive to stay
                ahead of the curve in the ever-evolving world of technology. Our
                team is committed to continuous learning and growth, ensuring
                that we always bring the best to our projects.
              </p>
              <p className="text-lg">
                We believe in the power of collaboration and communication,
                working closely with our clients to bring their visions to life.
                Thank you for considering us for your next project. We look
                forward to working with you!
              </p>
            </div>
          </p>
          <p>
            <div className="flex justify-center">
              <img
                src="https://via.placeholder.com/400"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
