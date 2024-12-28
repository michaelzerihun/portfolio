'use client';
import React, { ChangeEvent, FormEvent } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectGroup,
  SelectContent,
  SelectLabel,
  SelectItem,
} from './ui/select';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import SuccessMessage from './SuccessMessage';

const ContactForm = () => {
  const { toast } = useToast();

  const [status, setStatus] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    Name: '',
    Email: '',
    Phone: '',
    Address: '',
    Message: '',
    Service: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({ ...prevData, Service: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!formData.Name.trim() || !formData.Email.trim()) {
        toast({
          title: 'Error: Something is wrong',
          description: 'Please input your name and email',
          variant: 'destructive',
        });
        return;
      }
      const form = new FormData();
      const currentDateTime = new Date().toLocaleString();
      form.append('Name', formData.Name);
      form.append('Email', formData.Email);
      form.append('Phone', formData.Phone);
      form.append('Address', formData.Address);
      form.append('Message', formData.Message);
      form.append('Service', formData.Service);
      form.append('DateTime', currentDateTime);

      const response = await fetch('https://getform.io/f/bjjjvemb', {
        method: 'POST',
        body: form,
      });
      if (response.ok) {
        setSuccess(true);
        setStatus('Your message has been sent successfully!');
        setFormData({
          Name: '',
          Email: '',
          Phone: '',
          Address: '',
          Message: '',
          Service: '',
        });
      } else {
        setStatus('Error! Please try again later.');
      }
    } catch (error) {
      console.error('Data submission error:', error);
      setStatus('Error! Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='space-y-4'>
      <h3 className='text-2xl md:text-4xl text-lightSky'>
        Let&apos;s get in touch
      </h3>
      <p>
        Feel free to reach out to me if you have any questions or if you&apos;d
        Like to collaborate on a project. I&apos;m always open to new
        opportunities and ideas. Let&apos;s connect and create something amazing
        together!
      </p>
      <>
        {!success ? (
          <SuccessMessage status={status} />
        ) : (
          <form
            onSubmit={handleSubmit}
            // action='https://getform.io/f/bjjjvemb'
            // method='POST'
            className='flex flex-col gap-4'
          >
            <div className='flex flex-col md:flex-row gap-4 items-center'>
              <Input
                placeholder='Your name'
                name='Name'
                id='name'
                required
                type='text'
                value={formData.Name}
                onChange={handleChange}
              />
              <Input
                placeholder='Email address'
                name='Email'
                id='email'
                required
                type='email'
                value={formData.Email}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col md:flex-row gap-4 items-center'>
              <Input
                placeholder='Phone number'
                name='Phone'
                id='phone'
                type='text'
                value={formData.Phone}
                onChange={handleChange}
              />
              <Input
                placeholder='Address'
                name='Address'
                id='address'
                type='text'
                value={formData.Address}
                onChange={handleChange}
              />
            </div>
            <Textarea
              placeholder='Text here'
              name='Message'
              rows={5}
              cols={5}
              value={formData.Message}
              onChange={handleChange}
            />
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder='Select service' />
              </SelectTrigger>
              <SelectContent className='bg-bodyColor text-white border-white/20'>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value='web-development'>
                    Web Development
                  </SelectItem>
                  <SelectItem value='mobile-development'>
                    Mobile Development
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button
              disabled={loading}
              type='submit'
              className='w-full py-4 bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect'
            >
              {loading ? 'Submitting message... ' : 'Send Message'}
            </Button>
          </form>
        )}
      </>
    </div>
  );
};
export default ContactForm;
