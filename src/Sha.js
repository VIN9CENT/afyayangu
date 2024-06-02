import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'; 
import {Link}from 'react-router-dom';

const Sha = () => {
  const [selectedOption, setSelectedOption] = useState('self');

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><img src={require('./images/logo.png')} alt="logo" style={{ width: '250px', margin: '10px' }} /></li>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#registration">Registration</a></li>
            <li><a href="#FAQ"><abbr title="Frequently Ask Questions">FAQs</abbr></a></li>
            <li> <Link to="/terms">Register</Link></li>
            <li> <Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
      
      <main>
      <section id='introduction'className='introduction'>
        <div>
        <h2>Introducing Social Health Authority</h2>
        <p>Ensuring a healthier, more equitable future for all through comprehensive coverage and quality care without financial worry</p>
        <p>  <Link to="/terms">Register</Link></p>
        </div>
        </section>

        <section id='overview'className='overview'>
          <div>
          <h2>Overview</h2>
          <p>SHA facilitates healthcare services from enlisted providers by pooling contributions—ensuring equitable distribution of quality healthcare. The Social Health Authority is established under section 25 of the Act and is utilized to pool all contributions made under the Act.</p>
          <p>SHA is designed to provide healthcare services from empaneled and contracted healthcare providers and healthcare facilities on referral from primary health facilities. The Social Health Authority ensures that every resident in Kenya can access a comprehensive range of quality health services they need without the burden of financial hardship.</p>
          </div>
          <div>
         <p><img src={require('./images/example.jpg')} alt="doctor giving injection" style={{ width: '500px', margin: '10px' }} /></p>
         </div>
         </section>

          <section id='benefits' className="benefits">
            <div>
            <h2>Benefits</h2>
            <p>The benefits under the Social Health Authority include Preventive, Promotive, Curative, Rehabilitative, and Palliative health services. These are provided at level 4, 5, and 6 health facilities under the fund.</p>
            <h2>Who Qualifies To Register?</h2>
            <p>Every person resident in Kenya is required to apply for registration to the Authority as a member of the Social Health Authority within ninety days upon the coming into force of these Regulations.</p>
            <p>The application must be accompanied by a copy of the national identification document or any other approved document, and for children without identification, documentation provided by the state department responsible for social protection.</p>
            </div> 
            <div>
            <p><img src={require('./images/benefit.jpg')} alt="doctor listening to patient" style={{ width: '500px', margin: '10px' }} /></p>

            </div>
          </section>
          <section id='covered'className='covered'>
          <div>
          <p><img src={require('./images/clinician.jpg')} alt="clinician" style={{ width: '500px', margin: '10px' }} /></p>
          </div>
          <div>
          <h2 >What Is Covered?</h2>
          <p>The Social Health Authority covers integrated preventive, promotive, curative, rehabilitative, and palliative health services at level 4, 5, and 6 health facilities.</p>
          <p>This includes emergency services, critical care services beyond the benefits in the essential healthcare benefits package, treatment and management of chronic illnesses beyond the benefits in the essential healthcare benefits package of the Social Health Authority.</p>
          </div>
        </section>
        
        <section id='registration'>
          <div className='registration'>
          <h2>How To Register</h2>
          <select value={selectedOption} onChange={handleSelect} className='dropdown'>
            <option value="self">Self Registration</option>
            <option value="assisted">Assisted enrollment</option>
          </select>
          </div>

          {selectedOption === 'self' && (
           <>
            <h2 id='guide'>Self Registration</h2>

            <section className='process'>
              <div>
                <h3> 1. Download & Log into your eCitizen App</h3>
                <p>Search for the eCitizen Gava Mkononi App on Google Playstore and download the app.</p>
                <p>Once installed, log into your eCitizen account.</p>
                <p>
                  <a href="https://play.google.com/store/apps/details?id=ke.go.ecitizen" target="_blank" rel="noopener noreferrer"class="styled-link">Google Play
                    <img src={require('./images/googleplay.png')} alt="playstore icon" style={{ width: '50px', margin: '2px', display: 'block' }} />
                  </a>
                </p>
              </div>
              <div>
                <p><img src={require('./images/step-1.png')} alt="step 1"/></p>
                </div>
              <div> 
                <p><img src={require('./images/step-2.png')} alt="step 2"/></p>
                </div>
                <div>
                <h3>2. Go through the self-activation guide</h3>
                <p>Take a few minutes to go through the policies, instructions for self-onboarding, and the terms and conditions before continuing to the next step.</p>
              </div>
              <div>
                <h3>3. Scan your face for verification</h3>
                <p>To verify that it is you, you are required to scan your face or fingerprint with your phone camera. The app will then verify your biometrics relying on government records.</p>
                <p>If you are unable to scan your face or fingerprints, you can use the assisted activation route to activate your digital ID.</p>
                <p>
                  <a href="https://play.google.com/store/apps/details?id=ke.go.ecitizen" target="_blank" rel="noopener noreferrer"class="styled-link">Google Play
                    <img src={require('./images/googleplay.png')} alt="playstore icon" style={{ width: '50px', margin: '2px', display: 'block' }} />
                  </a>
                </p>
              </div>
              <div>
                <p><img src={require('./images/step-3.png')} alt="step 3"/></p>
                </div>
            </section>
            </>
          )}

          {selectedOption === 'assisted' && (
            <>
             <h2 id='guide'>Assisted Enrollment</h2>
            <section className='process'>
              <div>
                <h3>1. Visit your nearest Huduma Center/agent</h3>
                <p>Go to your nearest Huduma Center or verified enrollment agent and ask for assisted activation for your Social Health Insurance.</p>
                <p>Make sure you carry your National ID card to facilitate the process.</p>
                <p>
                  <a href="https://play.google.com/store/apps/details?id=ke.go.ecitizen" target="_blank" rel="noopener noreferrer"class="styled-link">Google Play
                    <img src={require('./images/googleplay.png')} alt="playstore icon" style={{ width: '50px', margin: '2px', display: 'block' }} />
                  </a>
                </p>
                </div>
                <div>
                <p><img src={require('./images/assist-1.png')} alt="assisted 1"/></p>
              </div>
             <div>
                <p><img src={require('./images/assist-2.png')} alt="assisted 2"/></p>
                </div>
                <div>
                <h3>2. Scan your ID card</h3>
                <p>Scan your ID for identification and send a request to your eCitizen app to scan the QR code that shows up.</p>
              </div>
            </section>
            </>
          )}
        </section>

        <section id="FAQ">
          <h2>Frequently Ask Questions</h2>
          <details>
            <summary>What is the Social Health Authority?</summary>
            <p>The Social Health Authority is established to pool all contributions made under the Act, purchase healthcare services from empaneled and contracted healthcare providers, and pay for the provision of quality healthcare services to beneficiaries. It also receives contributions for indigents, vulnerable persons, and persons under lawful custody.</p>
          </details>
          <details>
            <summary>How can I register for the Social Health Authority?</summary>
            <p>Every person resident in Kenya shall apply for registration to the Authority as a member of the Social Health Authority within ninety days upon the coming into force of the regulations, using Form 1 set out in the First Schedule and accompanied by a copy of the national identification document or any other document approved by the Authority.</p>
          </details>
          <details>
            <summary>Who is eligible for the Social Health Authority?</summary>
            <p>Every person residing in Kenya is required to apply for registration to the Social Health Authority, with specific provisions for children who lack identification documents.</p>
          </details>
          <details>
            <summary>What identifications documents are required for registration?</summary>
            <p>You require a National ID Number as an adult. For children, a birth certificate. Foreign residents may use their Foreign Resident Certificate (Alien ID) or a Refugee ID for refugees.</p>
          </details>
          <details>
            <summary>Can children be registered for the Social Health Authority? If yes, how?</summary>
            <p>Yes, children can be registered for the Social Health Authority. An application for a child without a form of identification should be accompanied by documentation provided by the state department responsible for social protection.</p>
          </details>
          <details>
            <summary>What are the benefits covered under Social Health Authority?</summary>
            <p>The fund covers integrated preventive, promotive, curative, rehabilitative, and palliative health services provided at level 4, 5, and 6 health facilities.</p>
          </details>
          <details>
            <summary>How are the contributions to Social Health Authority made?</summary>
            <p>Contributions to a Social Health Authority shall be through payroll deductions for employed individuals, direct contributions from self-employed individuals, and government subsidies for indigent and vulnerable populations.</p>
          </details>
          <details>
            <summary>Are employers required to contribute to the Social Health Authority for their employees?</summary>
            <p>Employers will contribute 2.75% of their employees' salaries to the health insurance fund.</p>
          </details>
          <details>
            <summary>Are there any specific benefits for chronic and critical illnesses?</summary>
            <p>The fund provides for the treatment and management of chronic illnesses and critical care services beyond the essential healthcare benefits package.</p>
          </details>
        </section>
      </main>

      <div id="footer" className="footer">
        <h2>Help & Support</h2>
        <div className="footer-grid">
          <div className="footer-section">
            <h3><i className="fas fa-envelope"></i> Email</h3>
            <p>Talk to us.</p>
            <p><a href="mailto:Support@ecitizen.go.ke"><strong>Support@ecitizen.go.ke</strong></a></p>
          </div>
          <div className="footer-section">
            <h3><i className="fas fa-map-marker-alt"></i> Visit us</h3>
            <p>Physical Assistance</p>
            <p>Any Huduma Center Countrywide</p>
          </div>
          <div className="footer-section">
            <h3><i className="fas fa-phone"></i> Call us</h3>
            <p>Mon-Fri from 8am to 5pm.</p>
            <p><a href="tel:+254207903260"><strong>+254 20 790 3260</strong></a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sha;
