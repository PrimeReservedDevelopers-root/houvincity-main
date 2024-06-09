"use client";
import React, { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";
import NigeriaFlag from "@/public/images/property/NigeriaFlag.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

interface CountryCode {
  code: string;
  flag: string;
  name: string;
}

const PaymentsPage: React.FC = () => {
  const publicKey = "pk_test_e33df513bcf2d1fd7affd081e4e4076acf94f3ed"; // Replace with your actual test key
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [amount, setAmount] = useState<number>(0); // Initialize with a default value

  useEffect(() => {
    // Get amount from query param
    const urlParams = new URLSearchParams(window.location.search);
    const amountFromParam = urlParams.get("amount") || "";
    setAmount(Number(amountFromParam) * 100); // Convert to kobo and set as amount
  }, []); // Run only once on component mount

  const componentProps = {
    email,
    amount,
    metadata: {
      custom_fields: [
        { display_name: "Name", variable_name: "name", value: name },
        { display_name: "Phone", variable_name: "phone", value: phone },
        { display_name: "Company", variable_name: "company", value: company },
        { display_name: "Address", variable_name: "address", value: address },
      ],
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Your payment was successful! Thank you for your support."),
    onClose: () =>
      alert("Are you sure you don't want to complete your payment?"),
  };

  const styles = {
    container: "flex justify-center items-center min-h-screen px-4 mt-20 py-16",
    form: "w-full max-w-lg bg-white py-12 px-10 rounded-xl shadow-lg overflow-hidden",
    input: `block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-sky-500 
            shadow-[rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset]
            transition duration-300 ease-in-out mb-4`,
    button:
      "block w-full px-4 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-700 transition duration-300 ease-in-out mt-6",
    heading: "text-center text-3xl font-semibold mb-8",
  };

  const fields = [
    {
      id: "1",
      title: "Full Name",
      placeholder: "Mark Joe",
    },
    {
      id: "2",
      title: "E-mail",
      placeholder: "markjoe@gmail.com",
    },
    {
      id: "3",
      title: "Address",
      placeholder: "123 home",
    },
    {
      id: "4",
      title: "City",
      placeholder: "Port harcourt",
    },
    {
      id: "5",
      title: "State",
      placeholder: "Rivers",
    },
    {
      id: "6",
      title: "Country",
      placeholder: "Nigeria",
    },
  ];

  const countryCodes: CountryCode[] = [
    { code: "+234", flag: NigeriaFlag, name: "Nigeria" },
    // Add more country codes here
  ];

  const [selected, setSelected] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(countryCodes[0]);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [value, setValue] = useState<string | undefined>("");

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = countryCodes.find(
      (country) => country.code === e.target.value
    );
    if (selectedCountry !== undefined) {
      setSelectedCountry(selectedCountry);
    }
  };

  return (
    <div className="md:pt-[10rem] pt-[8rem] pb-[3rem] mx-[1rem] md:mx-8 ">
      <h1 className=" text-customSecondary text-xl md:text-3xl font-medium">
        Payment Information
      </h1>
      <div className="flex flex-col gap-3 md:gap-5 w-[100%] px-20 justify-center items-center lg:items-start h-[157px] md:h-[340px] font-medium mt-5 text-[20px] md:text-[40px] rounded-xl bg-anotherBlack text-white">
        <h5 className="text-[12px] md:text-[28px]">Total Amount</h5>
        <p>N6,000,000</p>
      </div>

      <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 mt-5 xl:mt-10">
        {fields.map((field) => (
          <div key={field.id} className=" mt-3 w-[100%] ">
            <p className="text-customSecondary mb-1 text-sm font-medium">{field.title} </p>
            <input
              type="text"
              placeholder={field.placeholder}
              className="outline-none border-[1px] text-xs font-medium rounded-md text-customSecondary p-4 w-[100%] border-[#8D8D8D]"
            />
          </div>
        ))}

        <div className="mt-5 ">
          <p className="text-customSecondary mb-1 text-sm font-medium">Phone Number</p>
          <div className=" border-[1px] text-xs rounded-md text-customSecondary w-[100%] border-[#8D8D8D] ">
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={(newValue: string | undefined) => setValue(newValue)}
              className="outline-none focus:ring-transparent focus:border-transparent p-4 focus:outline-none text-xs"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className=" justify-center bg-primary border-[1px] hover:text-primary hover:border-primary hover:bg-white text-white font-medium text-sm shadow-sm px-20 py-3 rounded-md flex gap-3">
          Continue
        </button>
      </div>
    </div>
  );
};

export default PaymentsPage;
