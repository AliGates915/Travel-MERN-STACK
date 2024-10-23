// import { useState } from 'react';
import axios from "axios";

function Register() {
  return (
    <div>
      <div>
        <div class="w-90 h-screen bg-white ml-36 font-[sans-serif] pt-4">
          <div class="text-center mb-8">
            <h4 class="text-blue text-2xl font-bold">CUSTOMER REGISTRATION</h4>
          </div>

          <h1 class="ml-20 text-blue text-xl font-bold">
            Personal Information
          </h1>

          <form>
            <div class="mr-48 ml-20 grid sm:grid-cols-2 gap-6">
              <div>
                <label class="text-gray-800 text-lg mb-2 block font-bold">
                  First Name *
                </label>
                <input
                  type="text"
                  class="w-[24rem] text-gray-800 bg-transparent text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label class="text-gray-800 text-lg mb-2 block font-bold">
                  Last Name{" "}
                </label>
                <input
                  type="text"
                  class="w-[24rem] text-gray-800 bg-transparent text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                  placeholder="Enter last name"
                />
              </div>
              <div>
                <label class="text-gray-800 text-lg mb-2 block">
                  Picture *
                </label>
                <input
                  type="file"
                  placeholder="No file chosen"
                  class="w-[24rem]"
                />
              </div>
            </div>

            <div class="my-8 ml-20">
              <label class="text-gray-800 text-lg mb-2 block">Address</label>
              <input
                type="text"
                class="w-[24rem] text-gray-800 bg-transparent text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Enter company name"
              />
            </div>

            <div class="mr-48 ml-20 grid sm:grid-cols-2 gap-6">
              <div>
                <label class="text-gray-800 text-lg mb-2 block">City *</label>
                <input
                  type="text"
                  class="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                  placeholder="Enter City"
                />
              </div>
              <div>
                <label class="text-gray-800 text-lg mb-2 block font-bold">
                  Country{" "}
                </label>
                <input
                  type="text"
                  class="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                  placeholder="Enter Country"
                />
              </div>

              <div>
                <label class="text-gray-800 text-lg mb-2 block">
                  Mobile Number *
                </label>
                <input
                  type="number"
                  class="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div>
                <label class="text-gray-800 text-lg mb-2 block">Website</label>
                <input
                  type="text"
                  class="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                  placeholder="Enter website"
                />
              </div>
            </div>

            <h1 class="ml-20 mt-6 text-blue text-xl font-bold">
              Company Information
            </h1>

            <div class="my-4 ml-20">
              <label class="text-gray-800 text-lg mb-2 block">
                Company Name *
              </label>
              <input
                type="text"
                class="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Username or Email"
              />
            </div>

            <div class="mt-4 mr-48 ml-20 grid sm:grid-cols-2 gap-6">
              <div>
                <label class="text-gray-800 text-lg mb-2 block">
                Designation *
                </label>
                <div class="relative flex">
                  <input
                    type="password"
                    required
                    class="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                    placeholder="Enter Designation"
                  />
                </div>
              </div>

              <div>
                <label class="text-gray-800 text-md mb-2 block">
                  Company Phone No.
                </label>
                <div class="relative flex">
                  <input
                    type="password"
                    required
                    class="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                    placeholder="company number"
                  />
                </div>
              </div>
            </div>

            <h1 class="ml-20 mt-6 text-blue text-xl font-bold">
              Account Information
            </h1>

            <div class="my-4 ml-20">
              <label class="text-gray-800 text-lg mb-2 block">
                Username/Email address *
              </label>
              <input
                type="text"
                class="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                placeholder="Username or Email"
              />
            </div>

            <div class="mt-4 mr-48 ml-20 grid sm:grid-cols-2 gap-6">
              <div>
                <label class="text-gray-800 text-lg mb-2 block">
                  Password *
                </label>
                <div class="relative flex">
                  <input
                    type="password"
                    required
                    class="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                    placeholder="Enter password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    class="w-[18px] h-[18px] absolute right-[5.5rem] cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
                    <circle cx="64" cy="64" r="8" />
                  </svg>
                </div>
              </div>

              <div>
                <label class="text-gray-800 text-md mb-2 block">
                  Confirm Password *
                </label>
                <div class="relative flex">
                  <input
                    type="password"
                    required
                    class="w-[24rem] bg-transparent text-gray-800 text-sm border-b border-gray-300 focus:border-blue px-2 py-2 outline-none"
                    placeholder="Confirm password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    class="w-[18px] h-[18px] absolute right-[5.5rem] cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
                    <circle cx="64" cy="64" r="8" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex justify-start my-6 ml-20">
              <button
                type="submit"
                class="text-white w-60 bg-blue hover:bg-[#005a59] mb-4 py-2 font-semibold rounded-2xl"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
