import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray mt-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="text-gray-600 mt-3">
            Have a project or just want to say hello? Feel free to message me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-[#EB6200]" />
              <span className="text-gray-700">kamalmanna606@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-[#EB6200]" />
              <span className="text-gray-700">+91 95938 64403</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-[#EB6200]" />
              <span className="text-gray-700">Kolkata, India</span>
            </div>

            <p className="text-gray-600 mt-6">
              I'm currently open for freelance work and collaboration.
              If you have any idea or project in mind, let's connect.
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-8 space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#EB6200]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#EB6200]"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#EB6200]"
            />

            <button
              type="submit"
              className="w-full bg-[#EB6200] text-white py-3 rounded-md hover:bg-[#be5204] transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
export default Contact;