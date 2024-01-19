import React from 'react';
import emailjs from 'emailjs-com';


  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Form = () => {




  const notify = () => toast("Your Responce Sumitted Thanks for  choosing Cream N Joy!!!");
  const handleSubmit = (e) => {
    e.preventDefault();

    

    // Get your EmailJS service ID, template ID, and user ID from your EmailJS dashboard
    const serviceID = 'service_ul83gns';
    const templateID = 'template_kqkpgdj';
    const userID = 'gnRaqGiWF4q6ONJJt';

    // Get form data
    const formData = new FormData(e.target);

    // Prepare data for sending
    const data = {
      to_name: formData.get('to_name'),
      from_name: formData.get('from_name'),
      message: formData.get('message'),
    };

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, data, userID)
      .then((response) => {
        console.log('Email sent successfully:', response);
        e.target.reset();
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
      });
  };

  return (
    <div className=' w-full m-auto grid grid-cols-1 sm:w-11/12 sm:m-auto p-3 sm:flex'>


      <div className=' z-10 w-full mb-2 m-auto sm:w-5/12 sm:m-auto p-12 bg-blue-900 text-white hover:translate-y-[-50px] transition-all duration-1000 '>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="to_name" className="form-label">
              Recipient Name ( i.e Nilesh Manke )
            </label>
            <input type="text" className="form-control" id="to_name" name="to_name" />
          </div>
          <div className="mb-3">
            <label htmlFor="from_name" className="form-label">
              Your Name
            </label>
            <input type="text" className="form-control" id="from_name" name="from_name" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea className="form-control" id="message" name="message" rows="4"></textarea>
          </div>
          <button  onClick={notify} type="submit" className='bg-red-500 p-2 rounded-lg text-white hover:bg-blue-800'>
            Submit
          </button>
        </form>
      </div>

      <div className=' z-10 w-full  m-auto p-1 sm:w-6/12 sm:m-auto sm:p-12 hover:translate-y-[-50px] transition-all duration-1000'>
        <img className='w-[100%] h-[468px] object-cover' src='src/assets/images/ice-cream.jpg' alt='' />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Form;
