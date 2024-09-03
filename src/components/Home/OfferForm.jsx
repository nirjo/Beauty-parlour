// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faBookOpen,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

const OfferForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
    .send(
      "service_fwraxru",
      "template_d1pzvfl",
      { name: "stella", email: "nirmalraj.joseph86@gmail.com" },
      "user_XREGSHcXzz3AF31p9"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send the message, please try again.");
      }
    );
  

    setFormData({ name: "", email: "", phone: "", service: "", note: "" }); // Reset form
  };

  return (
    <div className="flex flex-col justify-start items-start py-12 bg-[#FFF] ss:px-16 px-6 shadow-[#5C8692] shadow-md rounded-[3px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
        <Input
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          icon={<FontAwesomeIcon icon={faUser} style={{ color: "#5C8692" }} />}
        />
        <Input
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          icon={<FontAwesomeIcon icon={faEnvelope} style={{ color: "#5C8692" }} />}
        />
        <Input
          name="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleChange}
          icon={<FontAwesomeIcon icon={faPhone} style={{ color: "#5C8692" }} />}
        />
        <Input
          name="service"
          label="Service You Need"
          value={formData.service}
          onChange={handleChange}
          icon={<FontAwesomeIcon icon={faBookOpen} style={{ color: "#5C8692" }} />}
        />
        <Input
          name="note"
          label="Any Note For Us"
          value={formData.note}
          onChange={handleChange}
          icon={<FontAwesomeIcon icon={faEdit} style={{ color: "#5C8692" }} />}
          className="h-[135px]"
        />
        <button
          type="submit"
          className="flex items-center justify-center w-full py-4 bg-[#7A9CA5] mt-24 rounded-[2px] hover:bg-[#647f93]"
        >
          <span className="text-[#FFF] font-medium font-manrope text-[14px] uppercase tracking-widest relative">
            get an appointment
          </span>
        </button>
      </form>
    </div>
  );
};

export default OfferForm;
