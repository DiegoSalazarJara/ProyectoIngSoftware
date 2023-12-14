import { useState } from 'react';
import 'tailwindcss/tailwind.css';

export default function TablePatente() {

  
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-white p-8 rounded-lg shadow-md">
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Payment Information</h2>
            <p>
              <strong>Order ID:</strong> EYJHCHEU02
            </p>
            <p>
              <strong>Date:</strong> 12/13/2023
            </p>
            <p>
              <strong>Student Grade:</strong> GRADE 6
            </p>
            <p>
              <strong>Course Name:</strong> Java
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Order Information</h2>
            <p>
              <strong>Order ID:</strong> EYJHCHEU02
            </p>
            <p>
              <strong>Date:</strong> 12/13/2023
            </p>
            <p>
              <strong>Student Grade:</strong> GRADE 6
            </p>
            <p>
              <strong>Course Name:</strong> Java
            </p>
            <p>
              <strong>Chapter:</strong> Chapter 1 - Java
            </p>
            <p>
              <strong>Video Id:</strong> NbY8FJFPpSXbbDUmODD4
            </p>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Amount: LKR 6,000</h2>
            <p>
              <strong>Total:</strong> LKR 6,000
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email address for getting access
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              id="email"
              placeholder="example@gmail.com"
              type="email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="file-upload">
              Upload Payment Slip
            </label>
            <input
              className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              id="file-upload"
              name="file-upload"
              type="file"
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}
