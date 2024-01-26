import React from 'react';

const Filters = () => {
  return (
    <div className='border-strokeGray p-2 rounded-lg shadow-lg mx-auto'>
  <div className='flex flex-col md:flex-row justify-center items-center rounded-lg cursor-pointer outline-none'>
    <div className="'border-detailsColor p-4 rounded-lg shadow-lg mx-auto  flex my-4 mr-8 ml-4">
      <input type="text" placeholder="Search for jobs..." className="p-2 border border-gray-300 bg-gray-200 rounded-lg" />
      <button className="bg-detailsColor text-white py-2 px-4 ml-2 rounded-lg">Search</button>
    </div>
    <input type="text" placeholder="Location" className="my-4 md:mx-2 p-2 border border-gray-300 rounded-lg" />
    <input type="text" placeholder="Salary Range" className="my-4 md:mx-2 p-2 border border-gray-300 rounded-lg" />
    <select className="my-4 md:mx-2 p-2 border border-gray-300 rounded-lg">
      <option value="">Sort By</option>
      <option value="date">Date</option>
      <option value="salary">Salary</option>
      {/* Add more sorting options as needed */}
    </select>
  </div>
</div>

  
  );
}

export default Filters;
