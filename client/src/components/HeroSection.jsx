import React, { useState } from "react";
import {
  Rocket,
  Package,
  BadgeDollarSign,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import TestimonialSection from "./TestimonialSection";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    businessType: "",
    challenges: "",
  });

  const [loading, setLoading] = useState(false);

  const features = [
    {
      icon: `📦`,
      title: "Inventory Management",
      desc: "Barcode, stock transfer, warehouse control and automation.",
    },
    {
      icon: `💰`,
      title: "Sales & Billing",
      desc: "Fast billing, payment tracking and finance workflow automation.",
    },
    {
      icon: `📊`,
      title: "Reports & Analytics",
      desc: "Real-time reports, profit analysis and smart dashboards.",
    },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.companyName ||
      !formData.email ||
      !formData.phone ||
      !formData.businessType
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      // Example API Call
      // Replace with your backend URL

      const response = await fetch(
        "http://localhost:5000/api/consultation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Consultation booked successfully!");

        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          businessType: "",
          challenges: "",
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#020817] text-white min-h-screen">
      {/* Background Glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[350px] h-[350px] bg-blue-700/20 blur-[120px]" />
   {/* Navbar */}
        <Navbar/>
      <div className="max-w-8xl mx-auto px-2 lg:px-8 py-[10vh] sm:py-[10vh] relative z-10">
     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start py-4">
          {/* LEFT SIDE */}
           <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="sm:inline-flex  hidden items-center gap-2 border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 px-5 py-2 rounded-full text-sm font-medium backdrop-blur-xl">
              <Rocket size={16} />
              THE ULTIMATE ERP FOR RETAIL & DISTRIBUTION
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl leading-tight font-black tracking-tight">
              Accelerate Your{" "} <br/>
              <span className="text-cyan-400">Retail & Distribution</span>{" "}
              Business with APX ERP
            </h1>

            {/* Description */}
            <p className="mt-8 text-slate-300 text-base sm:text-xl leading-8 max-w-2xl">
              APX ERP simplifies inventory, billing, finance, CRM,
              multi-location management, and order processing with intelligent
              automation built for modern retail and distribution businesses.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.35)] hover:scale-105">
                Book Free Demo
              </button>

              <Link target="_blank" to={'https://apxsolution.in/erp'} className="border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300">
                Explore ERP Features
              </Link>
            </div>

            {/* Feature Cards */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-14 ">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white/[0.04] border border-white/10 rounded-3xl p-6 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-xl"
                >
                  <div className="w-14 h-14 rounded-2xl bg-cyan-400 flex items-center justify-center text-black shadow-lg shadow-cyan-500/30">
                   <span >
                     {item.icon}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-400 leading-7 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
           <div className="order-1 lg:order-2 relative">
                   {/* Badge */}
            <div className="sm:hidden  flex items-center gap-2 border border-cyan-400/20 bg-cyan-500/10 text-cyan-200 px-3 py-3 rounded-full text-xs  backdrop-blur-xl mx-auto my-3 justify-center">
              {/* <Rocket size={16} /> */}
              THE ULTIMATE ERP FOR RETAIL & DISTRIBUTION
            </div>
            <div className="bg-[#081529]/95 border border-white/10 rounded-[22px] p-3 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
              {/* Badge */}
              <div className="inline-flex bg-cyan-400 text-black font-semibold px-5 py-3 rounded-full text-xs sm:text-sm">
                GET ERP CONSULTATION
              </div>

              {/* Heading */}
              <h2 className="mt-7 text-3xl sm:text-4xl font-black leading-tight">
                Let’s Build Your Smart ERP Workflow
              </h2>

              <p className="mt-5 text-slate-400 leading-7">
                Talk with ERP experts and discover the right solution for your
                retail or distribution business.
              </p>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-slate-300 mb-2 block">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full h-14 px-5 rounded-xl bg-slate-200 text-black outline-none border-2 border-transparent focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-slate-300 mb-2 block">
                      Company Name *
                    </label>

                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Enter company name"
                      className="w-full h-14 px-5 rounded-xl bg-slate-200 text-black outline-none border-2 border-transparent focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-slate-300 mb-2 block">
                      Business Email *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter business email"
                      className="w-full h-14 px-5 rounded-xl bg-slate-200 text-black outline-none border-2 border-transparent focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-slate-300 mb-2 block">
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                      className="w-full h-14 px-5 rounded-xl bg-slate-200 text-black outline-none border-2 border-transparent focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-slate-300 mb-2 block">
                    Business Type *
                  </label>

             <select
  name="businessType"
  value={formData.businessType}
  onChange={handleChange}
  className="w-full h-14 px-5 rounded-xl bg-slate-200 text-black outline-none border-2 border-transparent focus:border-cyan-400"
>
  <option value="">Select Business Type</option>
  <option value="Retail Business">Retail Business</option>
  <option value="Distribution Business">Distribution Business</option>
  <option value="Wholesale Business">Wholesale Business</option>
  <option value="Electronics Store">Electronics Store</option>
  <option value="FMCG Distribution">FMCG Distribution</option>
</select>
                </div>

                <div>
                  <label className="text-sm text-slate-300 mb-2 block">
                    Business Challenges *
                  </label>

                  <textarea
                    rows="5"
                    name="challenges"
                    value={formData.challenges}
                    onChange={handleChange}
                    placeholder="Tell us about inventory, CRM, billing, sales or workflow challenges"
                    className="w-full p-5 rounded-xl bg-slate-200 text-black outline-none border-2 border-transparent focus:border-cyan-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-black py-4 rounded-2xl transition-all duration-300 hover:scale-[1.01] shadow-[0_0_40px_rgba(34,211,238,0.35)]"
                >
                  {loading
                    ? "Submitting..."
                    : "BOOK YOUR FREE CONSULTATION"}
                </button>

                <div className="flex items-center justify-center gap-2 text-sm text-slate-400 pt-2">
                  <CheckCircle2 size={16} className="text-cyan-400" />
                  Trusted by 10,000+ ERP installations across India
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Testimonial */}
        <div>
          <TestimonialSection/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;