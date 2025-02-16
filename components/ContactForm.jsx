"use client"

import React, {useState} from "react";

const ContactForm = () => {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  subject: "", 
  message: "",
 });

 const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData({...formData, [name]: value});
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch("https://formspree.io/f/xeoerwyj", {
   method: "POST",
   headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
   },
   body: JSON.stringify(formData),
  });

  if (response.ok) {
   alert("Pesan berhasil dikirim!");
   setFormData({name: "", email: "", phone: "", subject: "", message: ""}); // Reset form
  } else {
   alert("Terjadi kesalahan, silakan coba lagi.");
  }
 };

 return (
  <div className="max-w-md mx-auto mt-10">
   <h2 className="text-2xl font-bold mb-6">Kontak Kami</h2>
   <form
    onSubmit={handleSubmit}
    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
     <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="name">
      Nama
     </label>
     <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required
     />
    </div>
    <div className="mb-4">
     <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="email">
      Alamat Email
     </label>
     <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required
     />
    </div>
    <div className="mb-4">
     <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="phone">
      No HP
     </label>
     <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required
     />
    </div>
    <div className="mb-4">
     <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="subject">
      Subjek
     </label>
     <input
      type="text"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required
     />
    </div>
    <div className="mb-4">
     <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="message">
      Pesan
     </label>
     <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required
     />
    </div>
    <div className="flex items-center justify-between">
     <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Kirim
     </button>
    </div>
   </form>
  </div>
 );
};

export default ContactForm;
