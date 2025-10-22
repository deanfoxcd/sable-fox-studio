'use client';

import Image from 'next/image';
import { Button } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { customTheme } from '../styles/themes';

const ContactForm: React.FC = function () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generate a unique ID for the widget container on each mount
  const [recaptchaId] = useState(() => `recaptcha-widget-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    // Remove any previous widget
    const widgetContainer = document.getElementById(recaptchaId);
    if (widgetContainer) widgetContainer.innerHTML = '';

    // Type for grecaptcha
    type Grecaptcha = {
      render: (container: string, params: { sitekey: string }) => void;
    };
    function renderWidget() {
      const grecaptcha = (window as unknown as { grecaptcha?: Grecaptcha }).grecaptcha;
      if (grecaptcha && widgetContainer && widgetContainer.childNodes.length === 0) {
        grecaptcha.render(recaptchaId, {
          sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        });
      }
    }

    // Ensure script is present
    if (!document.getElementById('recaptcha-script')) {
      const script = document.createElement('script');
      script.id = 'recaptcha-script';
      script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoadCallback&render=explicit';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      (window as unknown as { onRecaptchaLoadCallback?: () => void }).onRecaptchaLoadCallback = renderWidget;
    } else {
      renderWidget();
    }

    // Cleanup: Remove script and widget on unmount
    return () => {
      const script = document.getElementById('recaptcha-script');
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      const widget = document.getElementById(recaptchaId);
      if (widget) widget.innerHTML = '';
    };
  }, [recaptchaId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const token = (
      window as unknown as { grecaptcha?: { getResponse: () => string } }
    ).grecaptcha?.getResponse();
    if (!token) {
      alert('Please complete the reCAPTCHA');
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/contactPage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });

      if (res.ok) {
        alert('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        });
        router.push('/');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('An error occurred.');
    } finally {
      setIsSubmitting(false);
      (
        window as unknown as { grecaptcha?: { reset: () => void } }
      ).grecaptcha?.reset();
    }
  };

  // Common classes
  const inputClass = 'shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 shadow-sm-light placeholder:text-gray-400';
  const labelClass = 'block mb-2 text-lg font-medium';
  const subjectInputClass = 'block p-3 w-full text-sm text-black bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 shadow-sm-light placeholder:text-gray-400';
  const textareaClass = 'block p-2.5 w-full text-sm text-black bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder:text-gray-400';

  return (
    <div className='flex flex-col md:flex-row gap-8 !bg-[#868469] pt-8'>
      <div className='md:w-1/2 flex flex-col items-center justify-center text-white px-20 py-6'>
        <p className='py-2'>
          I’m so excited to work with you! If you have any questions about the
          process please feel free to contact me by email or through the contact
          form to the right.
        </p>
        <a
          className='py-2 text-blue-100 hover:text-blue-200 underline underline-offset-2'
          href='mailto:sablefoxstudio@gmail.com'
        >
          sablefoxstudio@gmail.com
        </a>
        <p className='py-2'>
          You can also contact me here to check on orders, send photo
          references, availability for a consultation to discuss details,
          shipping information, and more.
        </p>
        <Image
          src='/images/contact.jpg'
          alt='contact form'
          width='500'
          height='20'
          className='py-4'
        />
      </div>

      <div className='md:w-1/2'>
        <section className='bg-transparent text-white'>
          <div className=' pb-16 px-4 mx-auto max-w-screen-md'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center '>
              Contact Me
            </h2>
            <form
              onSubmit={handleSubmit}
              className='space-y-8'
            >
              <div className='flex gap-4'>
                <div>
                  <label
                    htmlFor='firstName'
                    className={labelClass}
                  >
                    First Name
                  </label>
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    className={inputClass}
                    placeholder=''
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='lastName'
                    className={labelClass}
                  >
                    Last Name
                  </label>
                  <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    className={inputClass}
                    placeholder=''
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='email'
                  className={labelClass}
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className={inputClass}
                  placeholder='name@email.com'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='subject'
                  className={labelClass}
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  className={subjectInputClass}
                  placeholder='For example: Commissions, Originals, other'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className={labelClass}
                >
                  Message
                </label>
                <textarea
                  name='message'
                  id='message'
                  rows={6}
                  className={textareaClass}
                  placeholder='Let me know how I can help you or what service you are looking for.'
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <Button
                theme={customTheme.button}
                color='alternative'
                pill
                type='submit'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending message' : 'Send Message'}
              </Button>
              <div id={recaptchaId} className='mt-4' />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactForm;
