import React from 'react';
import Button from '../ui/Button';
import useForm, { FormValues } from '../../hooks/useForm';

interface ContactFormValues extends FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const initialValues: ContactFormValues = {
    name: '',
    email: '',
    message: ''
  };

  const validateForm = (values: ContactFormValues) => {
    const errors: { [key: string]: string } = {};
    
    if (!values.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!values.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    
    if (!values.message.trim()) {
      errors.message = 'Message is required';
    } else if (values.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
  };

  const handleFormSubmit = (values: ContactFormValues) => {
    // In a real application, you would make an API call here
    console.log('Form submitted:', values);
    alert('Thank you for your message! I will get back to you soon.');
    resetForm();
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit, resetForm } = useForm<ContactFormValues>({
    initialValues,
    validate: validateForm,
    onSubmit: handleFormSubmit
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block mb-2 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          className={`w-full p-3 border rounded focus:ring-2 focus:outline-none ${
            errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>
      
      <div>
        <label htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className={`w-full p-3 border rounded focus:ring-2 focus:outline-none ${
            errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
          placeholder="Your email"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>
      
      <div>
        <label htmlFor="message" className="block mb-2 font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={5}
          className={`w-full p-3 border rounded focus:ring-2 focus:outline-none ${
            errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
          placeholder="Your message"
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>
      
      <Button type="submit" fullWidth disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm; 