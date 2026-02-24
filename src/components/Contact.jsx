import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",     // 🔹 replace
        "YOUR_TEMPLATE_ID",    // 🔹 replace
        formData,
        "YOUR_PUBLIC_KEY"      // 🔹 replace
      )
      .then(
        () => {
          alert("Message Sent Successfully 🚀");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("Failed to send message ❌");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Contact <span className="text-orange-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Let's Connect 👋
            </h3>
            <p className="text-gray-400">
              I'm open to freelance projects, internships, and collaborations.
            </p>

            <div className="space-y-4 text-gray-400">
              <p>📧 Email: nitsh.kumar.ku968@gmail.com</p>
              <p>📍 Location: Karnal, Haryana India</p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500"
            />

            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:scale-105 transition duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;




// import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert("Message Sent Successfully 🚀");
    
//     setFormData({
//       name: "",
//       email: "",
//       message: "",
//     });
//   };

//   return (
//     <section id="contact" className="min-h-screen px-6 py-20">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Section Title */}
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
//           Contact <span className="text-orange-500">Me</span>
//         </h2>

//         <div className="grid md:grid-cols-2 gap-12">
          
//           {/* Contact Info */}
//           <div className="space-y-6">
//             <h3 className="text-2xl font-semibold text-white">
//               Let's Connect 👋
//             </h3>
//             <p className="text-gray-400">
//               I'm open to freelance projects, internships, and collaborations.
//               Feel free to reach out!
//             </p>

//             <div className="space-y-4 text-gray-400">
//               <p>📧 Email: nitsh.kumar.ku968@gmail.com </p>
//               <p>📍 Location: Karnal, Haryana India</p>
//               <p>💼 Available for: Full Stack And MERN Stack Projects</p>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
//           >
//             <div>
//               <label className="block text-gray-300 mb-2">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500"
//                 placeholder="Enter your name"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-300 mb-2">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500"
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-300 mb-2">Message</label>
//               <textarea
//                 name="message"
//                 rows="5"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-orange-500"
//                 placeholder="Write your message..."
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:scale-105 transition duration-300"
//             >
//               Send Message
//             </button>
//           </form>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;