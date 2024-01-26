
import jobLogo from '../assets/jobLogo.png'
import ApplyButton from './commun/applyButton'
import JobImage from './JobImage';
import Tags from './Tags'
import React, { useState } from 'react';

import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');
const Job = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [cv, setCv] = useState('');
  const [urls, setUrls] = useState([]);
  const openModal = () => {
    setModalIsOpen(true);
    console.log('Rendering Modal:', modalIsOpen);

  };
  const title = 'Senior Blockchain Developer'

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };
  return (
    <div className='flex flex-col justify-between  md:flex-row  rounded-lg shadow-lg  border-strokeGray mt-11 mx-11 '>
  <div className='flex flex-row mt-4 '>
  <div className=" w-15 h-20  mx-2 bg-strokeGray rounded-lg  ">
    <img src={jobLogo} alt="Image" className="w-full h-full object-cover" />
   
  </div>
  <JobImage imageSrc={jobLogo}></JobImage>

  <div className='flex flex-col'>
  <p className='mt-4 text-secColor font-medium text-1xl' >
 {title} 
  </p>
  <p className='text-primary font-normal text-1x0.5' >
  Binance U.S.
  </p>
  </div>
  </div>
 
 

  <Tags/>
  <div className='flex flex-col'>
  <p className='mt-8 text-strokeGray font-medium text-1xl' >
  124 applicants
  </p>
  <p className=' text-primary font-normal text-1x0.5' >
  12 hours ago
  </p>
  </div>
  <div onClick={openModal}  className="p-1 mr-2 my-8 inline-block text-white font-normal bg-detailsColor rounded-lg">
  Quick Apply
  </div>
  <div>
 <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="max-w-md bg-white p-8 rounded shadow-md overflow-hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
  overlayClassName="modal-overlay"
        appElement={document.getElementById('root')} 
      >

       
       <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="cv" className="block text-sm font-medium text-gray-600">
            Upload CV
          </label>
          <input
            type="file"
            id="cv"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setCv(e.target.files[0])}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="urls" className="block text-sm font-medium text-gray-600">
            portfolio 
          </label>
          <input
            type="text"
            id="urls"
            value={urls.join(',')}
            onChange={(e) => setUrls(e.target.value.split(','))}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mt-6">
          <button onClick={closeModal} className="bg-detailsColor text-white p-2 rounded">
            Close
          </button>
        </div>
      </ReactModal>
  </div>
 
      

         
          
      
    </div>
  )
}

export default Job