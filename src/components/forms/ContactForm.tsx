import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  consultationType: string;
  message: string;
}

declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form data:', data);
    // In a real application, you would send this data to your backend or a service like Formspree
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Track form submission conversion
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion();
    }
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      {isSubmitted ? (
        <div className="text-center py-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary-800 mb-2">Thank You!</h3>
          <p className="text-primary-600 mb-4">
            Your message has been sent successfully. We'll get back to you soon!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent-300 focus:border-accent-500 outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-neutral-300'}`}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent-300 focus:border-accent-500 outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-neutral-300'}`}
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Please enter a valid email address',
                }
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-300 focus:border-accent-500 outline-none transition-colors"
              {...register('phone')}
            />
          </div>

          <div>
            <label htmlFor="consultationType" className="block text-sm font-medium text-primary-700 mb-1">
              Consultation Type *
            </label>
            <select
              id="consultationType"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent-300 focus:border-accent-500 outline-none transition-colors ${errors.consultationType ? 'border-red-500' : 'border-neutral-300'}`}
              {...register('consultationType', { required: 'Please select a consultation type' })}
            >
              <option value="">Select a consultation type</option>
              <option value="Virtual Styling">Virtual Styling</option>
              <option value="In-Person Consultation">In-Person Consultation</option>
              <option value="Color Palette Selection">Color Palette Selection</option>
              <option value="Full Room Redesign">Full Room Redesign</option>
              <option value="Other">Other</option>
            </select>
            {errors.consultationType && (
              <p className="mt-1 text-sm text-red-600">{errors.consultationType.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              rows={5}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent-300 focus:border-accent-500 outline-none transition-colors ${errors.message ? 'border-red-500' : 'border-neutral-300'}`}
              {...register('message', { required: 'Please enter a message' })}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-accent-600 hover:bg-accent-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
};