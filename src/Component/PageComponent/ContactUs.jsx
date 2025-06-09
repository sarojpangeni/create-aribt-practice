import React, { useState } from "react";
import { toast } from "react-toastify";

function ContactUs() {
  const [loading , setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  setErrors(validationErrors);
  if (Object.keys(validationErrors).length === 0) {
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      console.log(form);
      toast.success("Form submitted successfully!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }
};

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="flex-col py-18 bg-gray-100 flex items-center justify-center px-4">
      <h2 className="text-6xl mb-10">Contact Us</h2>
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        <div className="bg-white w-full md:w-2/3 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold">Contact Form</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className={`w-full border px-4 py-2 rounded-full focus:outline-none ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="First Name"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className={`w-full border px-4 py-2 rounded-full focus:outline-none ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Last Name"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full border px-4 py-2 rounded-full focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={`w-full border px-4 py-2 rounded-full focus:outline-none ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Subject"
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                className={`w-full border px-4 py-2 rounded-2xl focus:outline-none resize-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Write your notes or questions here..."
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="bg-green-400 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-500 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div className="bg-white p-8 w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Address</h3>
          <p className="text-sm mb-4">
            203 Fake St. Mountain View, San Francisco, California, USA
          </p>
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-sm text-teal-500 mb-4">+9779867673699</p>
          <h3 className="text-xl font-semibold mb-2">Email Address</h3>
          <p className="text-sm text-teal-500">sarojpangeni14@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
