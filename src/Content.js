import React from 'react';
import images from './ImageLoader'; // Import the dynamically loaded images

const Content = () => {

  return (
    <>
      <section>
        <h1>Take charge of <em style={{ color: 'royalblue' }}>your well-being with</em> AfyaYangu</h1>
        <p>AfyaYangu simplifies medical record management, insurance tracking, and health monitoring <br></br>
          Seamlessly organize your healthcare data, appointment, and insurance covers with our user-friendly platform. </p>
          <p><a href="">Get Started</a></p>
          <p><img src={require('./images/hero.png')}></img></p>
      </section>

      <section id="section1">
        <h2>About AfyaYangu</h2>
        <p>
          At AfyaYangu, we aim to streamline medical services for Kenyans. We provide a single source of truth for all your medical records while helping you keep track of your doctor visits and facilities you attend.
        </p>
        <div>
          <h3>Guides</h3>
          <ul>
            <li><a href="/">How to register on AfyaYangu</a></li>
            <li><a href="/">About SHA</a></li>
            <li><a href="/">Learn more about AfyaYangu</a></li>
          </ul>
        </div>
      </section>

      <div className="insurance">
        <h2>Manage your insurance cover</h2>
        <p>
          Take control of your insurance coverage effortlessly. With AfyaYangu, you can easily add and manage the usage of your insurance covers, ensuring that you make the most of your benefits without the hassle.
        </p>
        <p><img src={require('./images/insurance.png')}></img></p>
      </div>

      <div className="records">
        <h2>Track your health records</h2>
        <p>
          Experience the convenience of centralized health record tracking. With AfyaYangu, all your medical information is at your fingertips, allowing you to effortlessly monitor your health journey from one secure location.
          <p><img src={require('./images/track.png')}></img></p>
        </p>
      </div>

      <div className="appointments">
        <h2>Schedule Appointments</h2>
        <p>Take charge of your schedule with ease. AfyaYangu enables you to schedule appointments, receive confirmations from your doctors and timely reminders to ensure you never miss a visit. Stay organized and on top of your healthcare journey effortlessly.
        </p>
        <p><img src={require('./images/schedule.png')}></img></p>
      </div>

      <div className="profile">
        <h2>Manage Your Health Profile</h2>
        <p>
          Your health, your way. With AfyaYangu, effortlessly manage your personal health details and ensure they're always up to date. Receive tailored updates and insights for continuous personal health improvement, empowering you to take control of your well-being like never before.
        </p>
        <p><img src={require('./images/manage.png')}></img></p>
      </div>

      <div className="consent">
        <h2>Consent Management</h2>
        <p>
          Your information your rules. With AfyaYangu, easily manage hospitals' access to your personal information and medical records. Rest assured knowing that you're in control of who can view your sensitive data, ensuring your privacy and peace of mind.
        </p>
        <p><img src={require('./images/consent.png')}style={{width:'500px'}}></img></p>
      </div>

      <div className="prescription">
        <h2>Prescription Information</h2>
        <p>
          Never lose track of your prescriptions again. With AfyaYangu, accessing your current and past prescriptions is simple and convenient. Everything you need to know about your medications is available on your personalized portal, ensuring you stay informed and empowered about your health journey.
          <p><img src={require('./images/prescription.png')}></img></p>
        </p>
      </div>
    </>
  );
}

export default Content;
