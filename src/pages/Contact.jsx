import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success / error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_4rkrzx8",
        "template_1fijzkc",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "QntfTSCTTvYCGn8IY",
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Let’s <span className="text-[#5B5A5A]">build</span>{" "}
            <span className="text-[#EB6200]">something great</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Have a project or just want to say hello? Feel free to message me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-[#EB6200]" />
              <a
                href="mailto:kamalmanna606@gmail.com"
                className="text-gray-700"
              >
                kamalmanna606@gmail.com
              </a>
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
              I'm open for freelance work and collaboration. Let’s connect.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#EB6200]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#EB6200]"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#EB6200]"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#EB6200] text-white py-3 rounded-md 
             hover:bg-[#be5204] transition 
             animate-pulse"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Success / Error Message */}
            {status === "success" && (
              <p className="text-green-600 text-sm text-center">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-sm text-center">
                ❌ Something went wrong. Try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
