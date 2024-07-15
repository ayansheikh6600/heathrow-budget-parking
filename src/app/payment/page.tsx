"use client"
import React, { useState } from 'react';

// Step Components
const ContactDetails = ({ formData, setFormData }:any) => {
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Contact Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="people"
          placeholder="People"
          value={formData.people}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <div className="col-span-2">
          <label className="block mb-2">Flight Details</label>
          <textarea
            name="flightDetails"
            placeholder="Flight Details"
            value={formData.flightDetails}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <div className="flex items-center mt-2">
            <input
              type="radio"
              name="flightDetailsConfirmation"
              value="yes"
              onChange={handleChange}
              className="mr-2"
            />
            <label className="mr-4">Yes</label>
            <input
              type="radio"
              name="flightDetailsConfirmation"
              value="no"
              onChange={handleChange}
              className="mr-2"
            />
            <label>No</label>
          </div>
        </div>
      </div>
    </div>
  );
};

const VehicleDetails = ({ formData, setFormData }:any) => {
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Vehicle Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="make"
          placeholder="Make"
          value={formData.make}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={formData.model}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={formData.color}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="regNo"
          placeholder="Reg No"
          value={formData.regNo}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button className="bg-green-500 text-white py-2 px-4 rounded mt-4 sm:mt-0">
          Add Extra Car
        </button>
      </div>
    </div>
  );
};

const PaymentDetails = ({ formData, setFormData }:any) => {
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
      <div className="grid grid-cols-1 gap-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="paymentOption1"
            onChange={handleChange}
            className="mr-2"
          />
          <span>Payment Option 1</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="paymentOption2"
            onChange={handleChange}
            className="mr-2"
          />
          <span>Payment Option 2</span>
        </label>
        <button className="bg-green-500 text-white py-2 px-4 rounded">Pay For Card</button>
        <button className="bg-gray-200 text-black py-2 px-4 rounded">PayPal</button>
      </div>
    </div>
  );
};

const Confirmation = ({ formData }:any) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Confirmation</h2>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

const page = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    people: '',
    flightDetails: '',
    flightDetailsConfirmation: '',
    make: '',
    model: '',
    color: '',
    regNo: '',
    paymentOption1: false,
    paymentOption2: false,
  });

  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const steps = [
    <ContactDetails key="step1" formData={formData} setFormData={setFormData} />,
    <VehicleDetails key="step2" formData={formData} setFormData={setFormData} />,
    <PaymentDetails key="step3" formData={formData} setFormData={setFormData} />,
    <Confirmation key="step4" formData={formData} />,
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
      {steps[step]}
      <div className="flex justify-between mt-4">
        {step > 0 && (
          <button onClick={prevStep} className="bg-gray-300 text-black py-2 px-4 rounded">
            Previous
          </button>
        )}
        {step < steps.length - 1 && (
          <button onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default page;
