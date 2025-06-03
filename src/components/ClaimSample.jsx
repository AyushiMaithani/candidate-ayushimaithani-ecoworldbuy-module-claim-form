import React, { useState } from 'react';
import { Send } from 'lucide-react';

function ClaimSample() {
  const [sampleForm, setSampleForm] = useState({
    name: '',
    email: '',
    shippingAddress: '',
    productOfInterest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const emailIsValid = (email) => /\S+@\S+\.\S+/.test(email);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSampleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, shippingAddress, productOfInterest } = sampleForm;

    if (!name || !email || !shippingAddress || !productOfInterest) {
      setMessage({ type: 'error', text: 'Please fill all fields.' });
      return;
    }
    if (!emailIsValid(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email.' });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const res = await fetch(`${apiUrl}claim-sample`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          address: shippingAddress,
          product: productOfInterest
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setMessage({ type: 'success', text: '✅ Your sample request has been received!' });
        setSampleForm({ name: '', email: '', shippingAddress: '', productOfInterest: '' });
      } else {
        setMessage({ type: 'error', text: '❌ Error, please try again.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: '❌ Error, please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <div className="flex flex-col lg:flex-row items-start justify-center gap-12 px-6 py-12 ">
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in w-full max-w-lg">
      <h2 className="font-montserrat text-2xl font-semibold text-[#2B5B3E] mb-2">
        Claim a Free Sample
      </h2>
      <p className="text-neutral-600 mb-6">
        Fill out the form below to request a free sample
      </p>

      <form onSubmit={handleSampleSubmit} className="space-y-4" noValidate>
        <input
          type="text"
          placeholder="Name"
          value={sampleForm.name}
          onChange={(e) => setSampleForm({ ...sampleForm, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white/80 backdrop-blur-sm focus:border-primary-300 focus:ring focus:ring-primary-100 focus:ring-opacity-50 outline-none hover:shadow-sm transition"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={sampleForm.email}
          onChange={(e) => setSampleForm({ ...sampleForm, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white/80 backdrop-blur-sm focus:border-primary-300 focus:ring focus:ring-primary-100 focus:ring-opacity-50 outline-none hover:shadow-sm transition"
          required
        />
        <input
          type="text"s
          placeholder="Shipping Address"
          value={sampleForm.shippingAddress}
          onChange={(e) => setSampleForm({ ...sampleForm, shippingAddress: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white/80 backdrop-blur-sm focus:border-primary-300 focus:ring focus:ring-primary-100 focus:ring-opacity-50 outline-none hover:shadow-sm transition"
          required
        />

        <div className="relative">
          <select
            value={sampleForm.productOfInterest}
            onChange={(e) => setSampleForm({ ...sampleForm, productOfInterest: e.target.value })}
            className="w-full appearance-none px-4 py-3 pr-10 rounded-lg border border-neutral-200 bg-white/80 backdrop-blur-sm focus:border-primary-300 focus:ring focus:ring-primary-100 focus:ring-opacity-50 outline-none hover:shadow-sm transition"
            required
          >
            <option value="">Product of Interest</option>
            <option value="Recycled Tote Bag">Recycled Tote Bag</option>
            <option value="Bamboo Products">Bamboo Products</option>
            <option value="Organic Skincare">Organic Skincare</option>
            <option value="Eco Cleaning">Eco Cleaning</option>
            <option value="Sustainable Fashion">Sustainable Fashion</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
            ▼
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-[#2B5B3E] text-white font-montserrat font-medium rounded-lg transition-all hover:bg-[#234B32] hover:shadow-md relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? 'Submitting...' : 'Request Sample'}
            <Send size={16} className="transition-transform group-hover:translate-x-1" />
          </span>
        </button>
      </form>

      {message && (
        <div
          className={`mt-4 text-center font-semibold ${
            message.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message.text}
        </div>
      )}
    </div>

    <div className="flex-1 max-w-2xl text-neutral-800 leading-relaxed">
      <h3 className="text-5xl font-semibold mb-4 text-[#2B5B3E]">Why Claim a Sample?</h3>
      <p className="text-lg">
        <strong>Claim a Free Sample</strong> is a great opportunity for customers to experience our
        eco-friendly products firsthand—completely free of charge. Just fill out the form with your
        name, email, shipping address, and product of interest, and we'll send a sample directly to
        your door. Whether you're curious about bamboo alternatives, organic skincare, or
        sustainable fashion, this initiative lets you explore our offerings risk-free and make
        informed, eco-conscious choices for a greener lifestyle.
      </p>
    </div>
  </div>
);

}

export default ClaimSample;
