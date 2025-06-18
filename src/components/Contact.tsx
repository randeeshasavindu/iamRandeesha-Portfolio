import React, { useState, FormEvent, useEffect } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status === "SUCCESS") {
      const timer = setTimeout(() => {
        setStatus("");
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [status]);

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

  const openGoogleMaps = () => {
    const address = "Beach Road, Dehiwala, Mount Lavinia, Sri Lanka";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
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
                <a 
                  href="mailto:randeesha1997@gmail.com" 
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  randeesha1997@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="text-purple-600 mr-4" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a 
                  href="tel:+94766307608" 
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  +94-76-630-7608
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="text-purple-600 mr-4" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <button 
                  onClick={openGoogleMaps}
                  className="text-gray-600 hover:text-purple-600 transition-colors text-left"
                >
                  Beach Road, Dehiwala, Mount Lavinia, Sri Lanka
                </button>
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
              <div className="p-3 bg-green-100 text-green-700 rounded transition-opacity duration-300">
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