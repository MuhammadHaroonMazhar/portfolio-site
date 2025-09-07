import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:johndoe@example.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-heading-2 text-center mb-12">Contact Me</h2>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-1 focus:ring-2 focus:ring-white transition-all"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-1 focus:ring-2 focus:ring-white transition-all"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          required
          className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-1 focus:ring-2 focus:ring-white transition-all"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        />
        <textarea
          placeholder="Your Message"
          required
          rows={6}
          className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-1 focus:ring-2 focus:ring-white transition-all resize-none"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="relative px-6 py-3 bg-transparent border border-slate-700 rounded-lg font-medium overflow-hidden group w-full md:w-auto"
          >
            <span className="relative z-10 text-slate-200 group-hover:text-white duration-500 flex items-center justify-center gap-2">
              <FaPaperPlane className="w-4 h-4" />
              Send Message
            </span>
            <div className="absolute inset-0 bg-slate-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </button>
        </div>
      </motion.form>
    </>
  );
};

export default ContactMe;
