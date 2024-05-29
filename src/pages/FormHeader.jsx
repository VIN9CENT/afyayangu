import React, { useState, useEffect } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

const FormHeader = ({ user }) => {
  const [step, setStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showDatalist, setShowDatalist] = useState(false);
  const [selectedDisability, setSelectedDisability] = useState('');
  const [userInfo, setUserInfo] = useState({
    employmentStatus: '',
    income: '',
    civilStatus: '',
    disability: '',
    additionalDetails: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const database = getDatabase();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        email: user.email,
      }));
    }
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step === 1) {
      setStep(step + 1);
    } else if (step === 2) {
      saveToDatabase();
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDisabilityChange = (event) => {
    if (event.target.value === 'yes') {
      setShowDatalist(true);
      setUserInfo({ ...userInfo, disability: 'yes' });
    } else {
      setShowDatalist(false);
      setSelectedDisability('');
      setUserInfo({ ...userInfo, disability: 'no' });
    }
  };

  const handleDisabilityCategoryChange = (event) => {
    setSelectedDisability(event.target.value);
    setUserInfo({ ...userInfo, additionalDetails: event.target.value });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const getAdditionalDatalist = () => {
    switch (selectedDisability) {
      case 'Visual impairment':
        return (
          <div>
            <label htmlFor="visual-impairment-details">Details</label>
            <input list="visual-impairment-options" id="visual-impairment-details" onChange={handleInputChange} name="additionalDetails" />
            <datalist id="visual-impairment-options">
              <option value="Complete blindness" />
              <option value="Partial blindness" />
            </datalist>
          </div>
        );
      case 'Hearing impairment':
        return (
          <div>
            <label htmlFor="hearing-impairment-details">Details</label>
            <input list="hearing-impairment-options" id="hearing-impairment-details" onChange={handleInputChange} name="additionalDetails" />
            <datalist id="hearing-impairment-options">
              <option value="Complete deafness" />
              <option value="Partial deafness" />
            </datalist>
          </div>
        );
      case 'Mobility impairment':
        return (
          <div>
            <label htmlFor="mobility-impairment-details">Details</label>
            <input list="mobility-impairment-options" id="mobility-impairment-details" onChange={handleInputChange} name="additionalDetails" />
            <datalist id="mobility-impairment-options">
              <option value="Paralysis" />
              <option value="Amputation" />
            </datalist>
          </div>
        );
      case 'Cognitive impairment':
        return (
          <div>
            <label htmlFor="cognitive-impairment-details">Details</label>
            <input list="cognitive-impairment-options" id="cognitive-impairment-details" onChange={handleInputChange} name="additionalDetails" />
            <datalist id="cognitive-impairment-options">
              <option value="Memory loss" />
              <option value="Dyslexia" />
            </datalist>
          </div>
        );
      default:
        return null;
    }
  };

  const saveToDatabase = () => {
    if (user) {
      const userId = user.uid;
      const userRef = ref(database, `users/${userId}`);
      set(userRef, {
        ...userInfo,
        fileName: selectedFile ? selectedFile.name : '',
      }).then(() => {
        console.log('Data saved successfully');
        setStep(3);
        setTimeout(() => {
          navigate('/dashboard'); // Redirect to the dashboard
        }, 3000); // Wait for 3 seconds before navigating
      }).catch((error) => {
        console.error('Error saving data: ', error);
      });
    }
  };

  return (
    <header>
      {step === 1 && (
        <form onSubmit={handleSubmit}>
          <label>
            Upload Image:
            <input type="file" onChange={handleFileChange} required />
          </label>
          <fieldset>
            <legend>What is your employment status?</legend>
            <p>
              <label htmlFor="employment">Employed</label>
              <input type="checkbox" name="employmentStatus" id="employment" value="Employed" onChange={handleInputChange} />
              <p style={{ margin: '1px', fontSize: '13px' }}>Applies if you are hired by an employer who remits monthly PAYE for you.</p>
            </p>
            <p>
              <label htmlFor="sponsored">Sponsored</label>
              <input type="checkbox" name="employmentStatus" id="sponsored" value="Sponsored" onChange={handleInputChange} />
              <p style={{ margin: '1px', fontSize: '13px' }}>Applies if you lack a form of employment generating income and instead receive an income from other sources.</p>
            </p>
            <p>
              <label htmlFor="self-employed">Self Employed</label>
              <input type="checkbox" name="employmentStatus" id="self-employed" value="Self Employed" onChange={handleInputChange} />
              <p style={{ margin: '1px', fontSize: '13px' }}>Applies if you operate your own business, which serves as your monthly income source.</p>
            </p>
            <p>
              <label htmlFor="organized">Organized Group</label>
              <input type="checkbox" name="employmentStatus" id="organized" value="Organized Group" onChange={handleInputChange} />
              <p style={{ margin: '1px', fontSize: '13px' }}>Applies if you earn income by working for companies that are not officially recognized by the business registration service.</p>
            </p>
          </fieldset>
          <br />
          <fieldset>
            <label htmlFor="income">What is your average monthly income?</label>
            <p><input type="text" name="income" id="income" placeholder="KES" size="100" onChange={handleInputChange} /></p>
          </fieldset>
          <br />
          <fieldset>
            <legend>What is your civil status?</legend>
            <p>
              <input type="radio" name="civilStatus" id="single" value="Single" onChange={handleInputChange} />
              <label htmlFor="single">Single</label>
            </p>
            <p>
              <input type="radio" name="civilStatus" id="married" value="Married" onChange={handleInputChange} />
              <label htmlFor="married">Married</label>
            </p>
          </fieldset>
          <br />
          <fieldset>
            <legend>Do you have any form of disability?</legend>
            <p>
              <input type="radio" name="disability" id="yes" value="yes" onChange={handleDisabilityChange} />
              <label htmlFor="yes">Yes</label>
            </p>
            <p>
              <input type="radio" name="disability" id="no" value="no" onChange={handleDisabilityChange} />
              <label htmlFor="no">No</label>
            </p>
            {showDatalist && (
              <div>
                <label htmlFor="disability-category">Select the type of disability:</label>
                <select id="disability-category" name="disabilityCategory" onChange={handleDisabilityCategoryChange}>
                  <option value="">Select</option>
                  <option value="Visual impairment">Visual impairment</option>
                  <option value="Hearing impairment">Hearing impairment</option>
                  <option value="Mobility impairment">Mobility impairment</option>
                  <option value="Cognitive impairment">Cognitive impairment</option>
                </select>
                {getAdditionalDatalist()}
              </div>
            )}
          </fieldset>
          <br />
          <button type="submit">Next</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Personal Information</legend>
            <p>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" onChange={handleInputChange} required />
            </p>
            <p>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" onChange={handleInputChange} required />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" value={userInfo.email} readOnly />
            </p>
            <p>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" name="phone" id="phone" onChange={handleInputChange} required />
            </p>
          </fieldset>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
      {step === 3 && (
        <div>
          <h2>Thank you for submitting your information!</h2>
          <p>You will be redirected to the dashboard shortly.</p>
        </div>
      )}
    </header>
  );
};

export default FormHeader;
