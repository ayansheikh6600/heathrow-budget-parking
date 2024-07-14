"use client";
import React, { ChangeEvent, useState } from 'react';
import InputComp from '../shared/InputComp';
import { Button } from '../ui/button';
import DateTimeInput from '../shared/DateTimeInput';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  airport: string;
  PickDate: string;
  PickTime: string;
  DropDate: string;
  DropTime: string;
  PromoCode: string;
}

const AirportForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    airport: "",
    PickDate: "",
    PickTime: "",
    DropDate: "",
    DropTime: "",
    PromoCode: ""
  });

  const airports = [
    // { name: "Gatwick Airport",  },
    { name: "Heathrow Airport",  },
    // { name: "Birmingham Airport", },
    // { name: "Manchester Airport", },
    // { name: "Stansted Airport", },
    // { name: "Luton Airport",  },
    // { name: "Bristol Airport",  },
    // { name: "Edinburgh Airport",},
    // { name: "Glasgow Airport", },
    // { name: "London City Airport",  },
  ]

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
    
  };

  return (
    <div className=' w-full sm:container  sm:mt-[-150px] md:mt-[-180px] z-10'>
      <div className='w-fit mx-auto bg-white rounded-t-xl p-2'>
        {/* <div className='grid grid-cols-1 sm:grid-cols-4 gap-3 '>
          <Button className='outline-primary border-primary text-xs sm:text-sm'>Airport Parking</Button>
          <Button className='outline-primary text-primary border-primary text-xs sm:text-sm' variant={"outline"}>Hotel & Parking</Button>
          <Button className='outline-primary text-primary border-primary text-xs sm:text-sm' variant={"outline"}>Lounge</Button>
          <Button className='outline-primary text-primary border-primary text-xs sm:text-sm' variant={"outline"}>Airport Transfer</Button>
        </div> */}
        <div className='grid grid-cols-1 '>
          <Button className='outline-primary border-primary w-fit px-6 mx-auto text-xs sm:text-sm'>Airport Parking</Button>
          
        </div>
      </div>

<div className='container'>

      <div className='grid grid-cols-12 gap-3 container bg-white rounded-xl shadow-lg p-3 sm:px-6 '>
        <select name="airport" className='w-full text-gray-500 text-xs sm:text-sm p-2 sm:p-3 border-gray-200 border rounded-md col-span-12 sm:col-span-6' onChange={handleChange}>
          <option>Airport</option>
          {airports.map((item, index)=>{
            return <option key={index} value={item?.name}>{item?.name}</option>
          })}
          
        </select>
        <select name="terminal" className='w-full text-gray-500 text-xs sm:text-sm p-2 sm:p-3 border-gray-200 border rounded-md col-span-12 sm:col-span-6' onChange={handleChange}>
          <option className='text-gray-500'>Terminal</option>
          {/* <option value="terminal1">terminal1</option> */}
          <option value="terminal2">Terminal 2</option>
          <option value="terminal3">Terminal 3</option>
          <option value="terminal4">Terminal 4</option>
          <option value="terminal5">Terminal 5</option>
        </select>

        <div className='col-span-12 sm:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:mt-2'>
          <DateTimeInput
            type="time"
            placeholder={"Pick Up Time"}
            classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-white rounded-lg" }}
            name="PickTime"
            value={formData.PickTime}
            onChange={handleChange}
          />
          <DateTimeInput
            type="date"
            placeholder={"Pick Up Date"}
            classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-white rounded-lg" }}
            name="PickDate"
            value={formData.PickDate}
            onChange={handleChange}
          />
        </div>

        <div className='col-span-12 sm:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:mt-2'>
          
          <DateTimeInput
          placeholder={"Drop Off Time"}
            type="time"
            classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-white rounded-lg" }}
            name="DropTime"
            value={formData.DropTime}
            onChange={handleChange}
          />
          <DateTimeInput
          placeholder={"Drop Off Date"}
            type="date"
            classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-white rounded-lg" }}
            name="DropDate"
            value={formData.DropDate}
            onChange={handleChange}
          />
        </div>

        <div className='col-span-12 items-center grid grid-cols-2 gap-3 sm:mt-2'>
          <div className=' '>
            <InputComp
              placeholder="Promo Code"
              classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-white rounded-lg" }}
              name="PromoCode"
              value={formData.PromoCode}
              onChange={handleChange}
            />
          </div>
          <div className='  flex justify-center'>
            <Button className='bg-primary sm:px-20'>
              Get Code
            </Button>
          </div>
        </div>
      </div>
</div>
    </div>
  );
};

export default AirportForm;
