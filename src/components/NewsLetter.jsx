import React, { useState } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const emailIsValid = (email) => /\S+@\S+\.\S+/.test(email);
    const apiUrl = import.meta.env.VITE_API_URL;

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailIsValid(email)) {
      newErrors.email = 'Invalid email format.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${apiUrl}subscribe-newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setName('');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setLoading(false);
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section className="py-16 px-7">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-neutral-700 rounded-2xl shadow-md p-8 md:p-12 relative overflow-hidden">

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="font-montserrat font-semibold text-2xl text-white mb-4">
                Join Our <span className="text-primary-500">Eco Community</span>
              </h2>
              <p className="text-white max-w-lg mx-auto">
                Subscribe to our newsletter for sustainable living tips, exclusive discounts, and new eco-friendly products.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-4 py-3 rounded-full border ${
                    errors.name ? 'border-red-500' : 'border-neutral-200'
                  } focus:border-primary-300 focus:ring focus:ring-primary-100 outline-none`}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-3 rounded-full border ${
                    errors.email ? 'border-red-500' : 'border-neutral-200'
                  } focus:border-primary-300 focus:ring focus:ring-primary-100 outline-none`}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-primary-500 text-white font-montserrat font-medium rounded-full hover:bg-primary-600 transition-all shadow-sm hover:shadow-md flex items-center justify-center"
              >
                {loading ? 'Submitting...' : 'Subscribe'}
                {!loading && <Send size={16} className="ml-2" />}
              </button>

              {status === 'success' && (
                <div className="mt-4 text-primary-600 flex items-center justify-center animate-bounce">
                  <CheckCircle size={18} className="mr-2" />
                  Thanks for subscribing!
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 text-red-400 flex items-center justify-center">
                  <XCircle size={18} className="mr-2" />
                  Error, please try again.
                </div>
              )}

              <p className="text-xs text-neutral-400 mt-4 text-center">
                By subscribing, you agree to receive emails from EcoWorldBuy. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
