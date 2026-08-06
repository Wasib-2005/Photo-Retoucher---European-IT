import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import ContactUsFormImg from "../../assets/ContactUsFormImg.svg";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-6">
          <div className="w-full flex justify-center items-center">
            <img
              src={ContactUsFormImg}
              alt="Contact Us Illustration"
              className="w-full max-w-md lg:max-w-full h-auto object-contain"
            />
          </div>

          <div className="bg-[#BACBF7] text-[#1B263B] rounded-2xl p-6 md:p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <HiOutlineMail className="text-xl flex-shrink-0" />
              <a
                href="mailto:hello@pathedits.com"
                className="text-sm md:text-base hover:underline"
              >
                hello@pathedits.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <HiOutlinePhone className="text-xl flex-shrink-0" />
              <a
                href="tel:+18557370370"
                className="text-sm md:text-base hover:underline"
              >
                US toll-free: (855) 737-0370
              </a>
            </div>

            <div className="flex items-center gap-3">
              <HiOutlinePhone className="text-xl flex-shrink-0" />
              <a
                href="tel:+448081960370"
                className="text-sm md:text-base hover:underline"
              >
                UK toll-free: +44 8081 960370
              </a>
            </div>

            <div className="flex items-center gap-3">
              <HiOutlineLocationMarker className="text-xl flex-shrink-0" />
              <a
                href="mailto:heeeeeello@gamil.com"
                className="text-sm md:text-base hover:underline"
              >
                heeeeeello@gamil.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center h-full pt-2 gap-5">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B263B] mb-6">
            Contact Information
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#1B263B]">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-[#F3F4F6] border border-gray-300 rounded-lg px-4 py-3 text-sm text-[#1B263B] placeholder-gray-400 focus:outline-none focus:border-[#0041FF]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#1B263B]">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your number"
                  className="w-full bg-[#F3F4F6] border border-gray-300 rounded-lg px-4 py-3 text-sm text-[#1B263B] placeholder-gray-400 focus:outline-none focus:border-[#0041FF]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#1B263B]">
                  E-Mail<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your e-mail"
                  className="w-full bg-[#F3F4F6] border border-gray-300 rounded-lg px-4 py-3 text-sm text-[#1B263B] placeholder-gray-400 focus:outline-none focus:border-[#0041FF]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#1B263B]">
                Message
              </label>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message...."
                className="w-full md:h-100 bg-[#F3F4F6] border border-gray-300 rounded-lg p-4 text-sm text-[#1B263B] placeholder-gray-400 focus:outline-none focus:border-[#0041FF] resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-[#0041FF] text-white font-semibold py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-sm"
            >
              <span>Send Message</span>
              <FaArrowRight className="text-sm" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
