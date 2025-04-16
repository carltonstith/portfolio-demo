"use client";
import emailjs from 'emailjs-com';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const SERVICE_ID = "service_hsb9muf";
  const TEMPLATE_ID = "template_584ox3n";
  const PUBLIC_KEY = "2hBWXs7UO-mWiaoLB";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
      alert("Message sent successfully!");
      setFormData({name: "",email: "",message: ""});
      })
      .catch(() => alert("Error sending message. Please try again later."));
  };

  return (
    <section
    id="contact"
    className="min-h-screen flex items-center justify-center py-20">
      <div className="px-4 w-150">
      <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="relative">
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            value={formData.name}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500" 
            placeholder="Name..." 
            onChange={(e) => setFormData({...formData, name: e.target.value})}/>
        </div>

        <div className="relative">
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            value={formData.email}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500" 
            placeholder="example@email.com"
            onChange={(e) => setFormData({...formData, email: e.target.value})} />
        </div>

        <div className="relative">
          <textarea 
            id="message" 
            name="message" 
            required 
            value={formData.message}
            rows={5} 
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500" 
            placeholder="Your Message..." 
            onChange={(e) => setFormData({...formData, message: e.target.value})}/>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white rounded px-6 py-3 hover:bg-blue-600 transition font-medium relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
          Send Message
        </button>
      </form>
      </div>
    </section>
  );
}