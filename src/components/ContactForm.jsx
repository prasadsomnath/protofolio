import React from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../services/emailService';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  async function onSubmit(data) {
    try {
      await sendEmail({
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      });
      console.log('Email sent successfully:', data);
      reset();
      alert('Message sent successfully!');
    } catch (error) {
      alert('Failed to send message, please try again later.');
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto space-y-6"
      noValidate
      aria-label="Contact form"
    >
      <div>
        <label htmlFor="name" className="block font-semibold mb-1 dark:text-white">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
          className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          } dark:bg-gray-800 dark:text-white`}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'error-name' : undefined}
        />
        {errors.name && (
          <p id="error-name" className="text-red-500 text-sm mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block font-semibold mb-1 dark:text-white">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          })}
          className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          } dark:bg-gray-800 dark:text-white`}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'error-email' : undefined}
        />
        {errors.email && (
          <p id="error-email" className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block font-semibold mb-1 dark:text-white">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          {...register('subject', { required: 'Subject is required' })}
          className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          } dark:bg-gray-800 dark:text-white`}
          aria-invalid={errors.subject ? 'true' : 'false'}
          aria-describedby={errors.subject ? 'error-subject' : undefined}
        />
        {errors.subject && (
          <p id="error-subject" className="text-red-500 text-sm mt-1">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block font-semibold mb-1 dark:text-white">
          Message
        </label>
        <textarea
          id="message"
          {...register('message', { required: 'Message is required' })}
          rows="5"
          className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          } dark:bg-gray-800 dark:text-white`}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'error-message' : undefined}
        ></textarea>
        {errors.message && (
          <p id="error-message" className="text-red-500 text-sm mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {isSubmitSuccessful && (
        <p className="text-green-600 dark:text-green-400">Thank you for your message!</p>
      )}
    </form>
  );
}
