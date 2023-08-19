import React ,{useState} from 'react'


const Home = () => {
    const jobListings = [
        {
          company: "Company X",
          image: "https://via.placeholder.com/300",
          industry: "IT",
          sector: "Private",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          company: "Company Y",
          image: "https://via.placeholder.com/300",
          industry: "Finance",
          sector: "Public",
          description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          company: "Company Z",
          image: "https://via.placeholder.com/300",
          industry: "Healthcare",
          sector: "Private",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          company: "Company A",
          image: "https://via.placeholder.com/300",
          industry: "Retail",
          sector: "Public",
          description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          company: "Company B",
          image: "https://via.placeholder.com/300",
          industry: "Education",
          sector: "Private",
          description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          company: "Company C",
          image: "https://via.placeholder.com/300",
          industry: "Manufacturing",
          sector: "Private",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          company: "Company D",
          image: "https://via.placeholder.com/300",
          industry: "Technology",
          sector: "Public",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          company: "Company E",
          image: "https://via.placeholder.com/300",
          industry: "Telecommunications",
          sector: "Private",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          company: "Company F",
          image: "https://via.placeholder.com/300",
          industry: "Energy",
          sector: "Public",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          company: "Company G",
          image: "https://via.placeholder.com/300",
          industry: "Media",
          sector: "Private",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ];
      

      
    const [isFiltersModalOpen, setFiltersModalOpen] = useState(false);

    const openFiltersModal = () => {
      setFiltersModalOpen(true);
    };
  
    const applyFilters = () => {
      setFiltersModalOpen(false);
    };
  
    const cancelFilters = () => {
      setFiltersModalOpen(false);
    };
  
    return (
        <div>
      <div className="bg-black">
       
        <section class="bg-blue-500 text-white py-20">
      <div class="container mx-auto text-center">
        <h1 class="text-4xl font-bold mb-4">Find Your Dream Job</h1>
        <p class="text-lg mb-8">
          Discover the best job opportunities that match your skills and
          interests.
        </p>
        <a
          href="#jobs"
          class="bg-white text-blue-500 font-bold py-2 px-6 rounded hover:bg-blue-100"
          >Explore Jobs</a
        >
      </div>
    </section>

        
    <section className="flex items-center justify-center p-2 mt-4 gap-2">
  <input
    type="text"
    className="text-sm rounded-2xl p-2 w-96 pl-2"
    placeholder="Search jobs, job Role and Location.."
  />
  <button
    className="text-sm font-bold text-white bg-blue-500 p-2 rounded-2xl ml-2 hover:text-blue-500 hover:bg-white"
    onClick={openFiltersModal}
  >
    Filters
  </button>
  <button
    className="text-sm font-bold text-white bg-blue-500 p-2 rounded-2xl ml-2 hover:text-blue-500 hover:bg-white"
  >
    Search
  </button>
</section>

<div
  id="filtersModal"
  className={`shadow-2xl modal ${isFiltersModalOpen ? '' : 'hidden'}`}
>
  <div className="modal-content bg-white w-96 p-4 rounded-lg border border-gray-900">
    <h2 className="text-lg font-bold mb-4">Filters</h2>

    <div className="flex justify-between">
      
      <div className="w-44">
        <label htmlFor="industryFilter" className="block text-sm font-bold mb-2">Industry:</label>
        <select
          id="industryFilter"
          className="text-sm rounded-2xl p-2 border border-gray-900"
        >
          <option value="it">Technology</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
        </select>
      </div>


      <div className="w-44">
        <label htmlFor="sectorFilter" className="block text-sm font-bold mb-2 mt-4">Sector:</label>
        <select
          id="sectorFilter"
          className="text-sm rounded-2xl p-2 border border-gray-900"
        >
          <option value="private">Private</option>
          <option value="public">Public</option>
        </select>
      </div>
    </div>
    <div className="flex justify-between">
   
      <div className="w-44">
        <label htmlFor="employmentTypeFilter" className="block text-sm font-bold mb-2 mt-2">Employment Type:</label>
        <select
          id="employmentTypeFilter"
          className="text-sm rounded-2xl p-2 border border-gray-900"
        >
          <option value="fulltime">Full Time</option>
          <option value="parttime">Part Time</option>
        </select>
      </div>

 
      <div className="w-44">
        <label htmlFor="workLocationFilter" className="block text-sm font-bold mb-2 mt-4">Work Location:</label>
        <select
          id="workLocationFilter"
          className="text-sm rounded-2xl p-2 border border-gray-900"
        >
          <option value="remote">Remote</option>
          <option value="onsite">On Site</option>
        </select>
      </div>
    </div>


    {/* ... Continue with the remaining filters ... */}

    {/* Buttons in the modal */}
    <div>
      <button
        className="text-sm font-bold text-white bg-blue-500 p-2 rounded-2xl mt-4 hover:text-black hover:bg-blue-700"
        onClick={applyFilters}
      >
        Apply
      </button>
      <button
        className="text-sm font-bold text-white bg-red-500 p-2 rounded-2xl mt-2 hover:text-black hover:bg-red-600"
        onClick={cancelFilters}
      >
        Cancel
      </button>
    </div>
  </div>
</div>


  
     
        <section className="p-4" id="jobs">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {jobListings.map((job, index) => (
      <div key={index} className="bg-white rounded-lg shadow p-4">
        <img
          src={job.image}
          alt={job.company}
          className="w-full h-32 object-cover mb-4 rounded-lg"
        />
        <h2 className="text-xl font-bold mb-2">{job.company}</h2>
        <p className="text-gray-600 mb-2">Industry: {job.industry} | Sector: {job.sector}</p>
        <p className="text-gray-600 mb-4">{job.description}</p>
        <a href="#" className="text-blue-500 block">View Jobs</a>
      </div>
    ))}
  </div>
</section>
    
      </div>
    </div>
    );
}

export default Home