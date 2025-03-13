import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animations";
import { FiMail, FiMapPin, FiPhone, FiAlertCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import Button from "../ui/Button";

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [submitCount, setSubmitCount] = useState(0);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  // Form validation function
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation - at least 2 characters, no numbers or special chars
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only letters";
    }
    
    // Email validation - proper email format
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Subject validation - at least 4 characters
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 4) {
      newErrors.subject = "Subject must be at least 4 characters";
    } else if (formData.subject.trim().length > 100) {
      newErrors.subject = "Subject must be less than 100 characters";
    }
    
    // Message validation - at least 10 characters
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }
    
    // Check for suspicious content
    const suspiciousPatterns = [
      /\b(viagra|cialis|casino|lottery|prize|winner|http:|https:|www\.)\b/i,
      /<script>|<\/script>|javascript:|onclick=|onerror=|onload=/i,
    ];
    
    if (suspiciousPatterns.some(pattern => 
        pattern.test(formData.name) || 
        pattern.test(formData.subject) || 
        pattern.test(formData.message))) {
      newErrors.general = "Your message contains inappropriate content";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear the specific error when user starts typing again
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Rate limiting check
    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      setErrors({
        ...errors, 
        general: "Please wait 30 seconds before submitting again"
      });
      return;
    }
    
    // Anti-spam check - limit total submissions
    if (submitCount >= 5) {
      setErrors({
        ...errors, 
        general: "Maximum submission limit reached. Please try again later or contact via email."
      });
      return;
    }
    
    // Run form validation
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS configuration is missing");
        setFormStatus("error");
        setIsSubmitting(false);
        return;
      }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (result.status === 200) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        // Update rate limiting trackers
        setSubmitCount(prev => prev + 1);
        setLastSubmitTime(Date.now());
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);

      // Clear status after 5 seconds
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  // Reset submit count after 24 hours
  useEffect(() => {
    const resetTimer = setTimeout(() => {
      if (submitCount > 0) {
        setSubmitCount(0);
      }
    }, 24 * 60 * 60 * 1000);
    
    return () => clearTimeout(resetTimer);
  }, [submitCount]);

  return (
    <section
      id="contact"
      className="section-padding bg-gray-50 dark:bg-dark-bg"
    >
      <div className="container-custom">
        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="heading-lg mb-8">Get In Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
                I'm currently open to new opportunities. Whether you have a
                question or just want to say hi, I'll do my best to get back to
                you!
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <FiMail size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-accent hover:underline"
                    >
                      manasverma012345@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <FiMapPin size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p>Lucknow, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <FiPhone size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p>+91 6388120275</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {errors.general && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-md flex items-center gap-2">
                    <FiAlertCircle />
                    {errors.general}
                  </div>
                )}
              
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border ${
                      errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-dark-card`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-dark-card`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border ${
                      errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-dark-card`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border ${
                      errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-dark-card`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {formStatus === "success" && (
                  <div className="p-3 bg-green-100 text-green-700 rounded-md">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-md">
                    Failed to send message. Please try again or contact me
                    directly via email.
                  </div>
                )}
                
                <p className="text-xs text-gray-500 mt-4">
                  Your information is securely processed and never shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}