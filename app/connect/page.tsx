'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<string>(''); // To display submission result
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  // Handle form input change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Start loading
    setLoading(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'd2d474e1-a29d-4c4f-88b1-23b297327f66', // Your access key
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('Form submitted successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        // setSubmitStatus('Form submission failed. Please try again.');
         setSubmitStatus('');
      }
    } catch (error) {
      setSubmitStatus('An error occurred during submission. Please check your internet connection.');
    }

    // End loading
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-400 to-gray-300">
      <div className="w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl text-center font-bold text-white mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-white mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-white mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
              placeholder="Enter your message"
              rows={5}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading} // Disable button while loading
              className={`px-6 py-3 text-white font-semibold rounded-lg ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-teal-500 hover:bg-teal-600 focus:ring-2 focus:ring-teal-400'
              }`}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>

        {/* Submission Status */}
        {submitStatus && (
          <p className="mt-4 text-center text-white font-semibold">{submitStatus}</p>
        )}
      </div>
    </div>
  );
};

export default FormComponent;
