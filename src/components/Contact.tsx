import React, { useState, FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xgvyzwew", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="text-purple-600 mr-4" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">randeesha1997@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="text-purple-600 mr-4" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+94-76-630-7608</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="text-purple-600 mr-4" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">Beach Road, Dehiwala, Mount Lavinia, Sri Lanka</p>
              </div>
            </div>
          </div>
          <form 
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-600" 
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-600" 
              required
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows={4} 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-600" 
              required
            />
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-4 rounded hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
            {status === "SUCCESS" && (
              <div className="p-3 bg-green-100 text-green-700 rounded">
                Thanks for your message! I'll get back to you soon.
              </div>
            )}
            {status === "ERROR" && (
              <div className="p-3 bg-red-100 text-red-700 rounded">
                There was an error submitting your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};