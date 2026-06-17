// app/components/Contact.js
"use client";

import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      info: "duaf3292@gmail.com",
      link: "mailto:duaf3292@gmail.com",
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Phone",
      info: "+92 329 2256242",
      link: "tel:+92329 2256242",
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Location",
      info: "Karachi, Pakistan",
      link: "#",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div className="lg:w-2/5">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-text-muted mb-8">
                I'm always open to discussing new opportunities, creative projects, or just having a friendly chat about technology and design.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="group block"
                  target={item.title === "Email" || item.title === "Phone" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <div className="glass-effect rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300 group-hover:border-primary/50">
                    <div className="flex items-start">
                      <div className="p-3 rounded-xl bg-surface text-primary mr-4 group-hover:bg-primary/10 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-text mb-1">{item.title}</h4>
                        <p className="text-text-muted">{item.info}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-effect rounded-2xl p-6">
              <h4 className="text-lg font-bold text-text mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/duadeveloper34-hue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-surface text-text hover:text-primary hover:bg-surface/80 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/dua-fatima-854114368/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-surface text-text hover:text-primary hover:bg-surface/80 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-surface text-text hover:text-primary hover:bg-surface/80 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-3/5">
            <div className="glass-effect rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
              <p className="text-text-muted mb-8">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full md:w-auto px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center border border-b-amber-50  ${
                isSubmitted
                      ? "bg-green-600 text-white"
                      : "bg-primary text-background hover:bg-primary-dark"
                    } ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin mr-3"></div>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <FiCheckCircle className="mr-2 w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2 w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-8">
              <h4 className="text-lg font-bold text-text mb-4">Frequently Asked</h4>
              <div className="space-y-4">
                <div className="glass-effect rounded-2xl p-6">
                  <h5 className="font-bold text-text mb-2">What's your typical response time?</h5>
                  <p className="text-text-muted text-sm">
                    I usually respond within 24 hours on weekdays. For urgent matters, please mention it in your message.
                  </p>
                </div>
                <div className="glass-effect rounded-2xl p-6">
                  <h5 className="font-bold text-text mb-2">Do you work with international clients?</h5>
                  <p className="text-text-muted text-sm">
                    Yes, I work with clients worldwide. Timezone differences are not an issue for me.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}