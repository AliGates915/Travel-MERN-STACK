import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PackageList() {
  const [isPackageDropdownOpen, setIsPackageDropdownOpen] = useState(false);
  const [isTourTypeDropdownOpen, setIsTourTypeDropdownOpen] = useState(false);
  const [isFacilitiesDropdownOpen, setIsFacilitiesDropdownOpen] =
    useState(false);
  const [tourTypes, setTourTypes] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedTourType, setSelectedTourType] = useState("");

  const [selectedFacilities, setSelectedFacilities] = useState("");

  const navigate = useNavigate();
  const dropdownRef = useRef(null);

//   const handleSave = async () => {
//     if (!facilityName || !selectedTourType) {
//       alert("Please enter both a facility name and tour type.");
//       return;
//     }

//     const dataToSend = {
//       facilityName, // String
//       tourName: selectedTourType, // Selected tour type
//     };

//     console.log("Data to send to backend:", dataToSend);

//     try {
//       const response = await axios.post("/facility", dataToSend); // Adjust the endpoint as necessary
//       console.log("Saved facility response:", response.data);
      
//       setSelectedTourType("");
//     } catch (error) {
//       console.error("Error saving facility:", error);
//     }
//   };
  

useEffect(() => {
    fetchTourTypes();

    // Event listener for outside click
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchTourTypes = async () => {
    try {
      const response = await axios.get("/tours"); // Adjust the endpoint as necessary
      setTourTypes(response.data);
      console.log("Fetched tour types:", response.data);
    } catch (error) {
      console.error("Error fetching tour types:", error);
      if (error.response && error.response.status === 401) {
        alert("You are not authorized. Redirecting to login.");
        navigate("/login");
      }
    }
  };

  const togglePackageDropdown = () => {
    setIsPackageDropdownOpen(!isPackageDropdownOpen);
  };

  const toggleTourTypeDropdown = () => {
    setIsTourTypeDropdownOpen(!isTourTypeDropdownOpen);
  };

  const toggleFacilitiesDropdown = () => {
    setIsFacilitiesDropdownOpen(!isFacilitiesDropdownOpen);
  };

  const closeDropdowns = () => {
    setIsPackageDropdownOpen(false);
    setIsTourTypeDropdownOpen(false);
    setIsFacilitiesDropdownOpen(false);
  };

  const handlePackageSelect = (packageName) => {
    setSelectedPackage(packageName);
    setIsPackageDropdownOpen(false); // Close dropdown after selection
  };

  const handleTourTypeSelect = (tourTypeName) => {
    setSelectedTourType(tourTypeName);
    setIsTourTypeDropdownOpen(false); // Close dropdown after selection
  };

  const handleFacilitiesSelect = (facilityName) => {
    setSelectedFacilities(facilityName);
    setIsFacilitiesDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="bg-[#f4fcfe] mx-[16rem] w-[50%] border border-blue my-4 p-4">
      <h1 className="flex justify-center text-2xl font-bold mt-4 text-blue">
        LIST OF PACKAGE
      </h1>

      <div className="grid grid-cols-2 gap-4 ml-[3rem] mt-6 w-[75%]">
        {/* Package Name Dropdown */}
        <div className="col-span-2">
          <label
            htmlFor="services"
            className="flex justify-start font-semibold text-gray-800 mb-2"
          >
            Package Name
          </label>
          <div className="relative">
            <div
              className="flex items-center justify-between w-full border rounded-xl border-blue px-2 py-2 cursor-pointer"
              onClick={togglePackageDropdown}
            >
              <input
                type="text"
                className="bg-transparent text-gray-800 text-sm outline-none cursor-pointer w-full"
                value={selectedPackage || "Select a package"} // Display selected package
                readOnly
              />
              <span className="ml-2 text-gray-800">▼</span>
            </div>
            {isPackageDropdownOpen && (
              <div
                className="absolute mt-1 w-full bg-white shadow-lg rounded-xl max-h-40 overflow-auto"
                onMouseLeave={closeDropdowns}
              >
                <ul className="divide-y divide-gray-100">
                  <li
                    className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
                    onClick={() => handlePackageSelect("Web Development")}
                  >
                    Web Development
                  </li>
                  <li
                    className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
                    onClick={() =>
                      handlePackageSelect("Mobile App Development")
                    }
                  >
                    Mobile App Development
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Total Days, Days, Nights */}
        <div className="flex flex-row gap-6 w-[25rem]">
          <div>
            <label className="text-gray-800 font-semibold">Total Days</label>
            <input
              type="number"
              className="border rounded-xl w-full px-2 py-2 border-blue outline-none"
            />
          </div>
          <div>
            <label className="text-gray-800 font-semibold">Days</label>
            <input
              type="number"
              className="border rounded-xl w-full px-2 py-2 border-blue outline-none"
            />
          </div>
          <div>
            <label className="text-gray-800 font-semibold">Nights</label>
            <input
              type="number"
              className="border rounded-xl w-full px-2 py-2 border-blue outline-none"
            />
          </div>
        </div>

        {/* Tour Type Dropdown */}
        <div className="col-span-2" ref={dropdownRef}>
          <label className="text-gray-800 font-semibold">Tour Type</label>
          <div className="relative" ref={dropdownRef}>
            {/* Dropdown input */}
            <div
              className="flex items-center justify-between w-full border rounded-xl border-blue px-2 py-2 cursor-pointer"
              onClick={toggleTourTypeDropdown}
            >
              <input
                type="text"
                className="bg-transparent text-gray-800 text-sm outline-none cursor-pointer w-full"
                value={selectedTourType || "Select a tour type"}
                readOnly
              />
              <span className="ml-2 text-gray-800">▼</span>
            </div>

            {/* Dropdown list */}
            {isTourTypeDropdownOpen && (
              <div className="absolute mt-1 w-full bg-white shadow-lg rounded-xl max-h-40 overflow-auto z-50">
                <ul className="divide-y divide-gray-100">
                  {tourTypes.map((tour, index) => (
                    <li
                      className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
                      key={index}
                      onClick={() => handleTourTypeSelect(tour.tourName)}
                    >
                      {tour.tourName}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Facilities Input */}
        <div className="col-span-2">
          <label className="text-gray-800 font-semibold">Facilities</label>
          <div className="relative">
            <div
              className="flex items-center justify-between w-full border rounded-xl border-blue px-2 py-2 cursor-pointer"
              onClick={toggleFacilitiesDropdown}
            >
              <input
                type="text"
                className="bg-transparent text-gray-800 text-sm outline-none cursor-pointer w-full"
                value={selectedFacilities || "Select a facility"} // Display selected facilities
                readOnly
              />
              <span className="ml-2 text-gray-800">▼</span>
            </div>
            {isFacilitiesDropdownOpen && (
              <div
                className="absolute mt-1 w-full bg-white shadow-lg rounded-xl max-h-40 overflow-auto"
                onMouseLeave={closeDropdowns}
              >
                <ul className="divide-y divide-gray-100">
                  <li
                    className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
                    onClick={() => handleFacilitiesSelect("Facility 1")}
                  >
                    Facility 1
                  </li>
                  <li
                    className="px-4 py-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
                    onClick={() => handleFacilitiesSelect("Facility 2")}
                  >
                    Facility 2
                  </li>
                  {/* Add other facilities here */}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Rate and Logo Picture */}
        <div>
          <label className="text-gray-800 font-semibold">Rate *</label>
          <input
            type="number"
            className="border rounded-xl w-full px-2 py-2 border-blue outline-none"
          />
        </div>
        <div>
          <label className="text-gray-800 font-semibold">Logo Picture *</label>
          <input
            type="file"
            className="border rounded-xl w-full px-2 py-2 border-blue outline-none"
          />
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="text-gray-800 font-semibold">Description</label>
          <textarea
            rows="3"
            className="border rounded-xl w-full px-2 py-2 border-blue outline-none resize-none"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button className="bg-blue text-white text-md font-bold w-48 py-2 mt-6 rounded-xl hover:bg-[#005a59]">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default PackageList;
