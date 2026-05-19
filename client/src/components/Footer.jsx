import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const Footer = () => {
  const menuLinks = [
    "Home",
    "Company",
    "ERP Solutions",
    "Clientele",
    "Partners",
    "Careers",
    "Contact",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#050B18] text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-150px] left-[-100px] w-[350px] h-[350px] bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[350px] h-[350px] bg-blue-600/10 blur-[140px]" />

      {/* TOP BORDER */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="max-w-8xl mx-auto px-5 lg:px-8 py-20 relative z-10">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* LOGO + ABOUT */}
          <div className="lg:col-span-2">
            {/* LOGO */}
            <div className="flex items-center gap-1">
              <h1 className="text-6xl font-black tracking-tight">
                <span className="text-[#8BE5D2]">AP</span>
                <span className="text-[#FF6B2C]">X</span>
              </h1>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-8 text-slate-400 leading-8 max-w-xl text-base">
              APX ERP helps retail, wholesale, and distribution businesses
              automate inventory, billing, CRM, finance, and analytics with
              intelligent cloud-based workflow management.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4 mt-10">
              {[
                <BsFacebook size={18} />,
                <BsInstagram size={18} />,
                <BsLinkedin size={18} />,
                <BsTwitter size={18} />,
              ].map((icon, index) => (
                <button
                  key={index}
                  className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center hover:scale-110"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* MENU */}
          <div>
            <h3 className="text-cyan-400 uppercase tracking-[3px] text-sm font-bold">
              Menu
            </h3>

            <div className="mt-8 flex flex-col gap-5">
              {menuLinks.map((item, index) => (
                <a
                  key={index}
                  href="/"
                  className="group flex items-center justify-between text-slate-300 hover:text-white transition-all duration-300"
                >
                  <span>{item}</span>

                  <ArrowUpRight
                    size={18}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-cyan-400 uppercase tracking-[3px] text-sm font-bold">
              Contact
            </h3>

            <div className="mt-8 space-y-8">
              {/* EMAIL */}
              <div>
                <div className="flex items-center gap-3 text-cyan-300">
                  <Mail size={18} />
                  <span className="font-semibold">Email</span>
                </div>

                <a
                  href="mailto:sales@apxsolution.in"
                  className="block mt-4 text-slate-300 hover:text-white transition-all duration-300"
                >
                  sales@apxsolution.in
                </a>
              </div>

              {/* PHONE */}
              <div>
                <div className="flex items-center gap-3 text-cyan-300">
                  <Phone size={18} />
                  <span className="font-semibold">Call</span>
                </div>

                <div className="mt-4 flex flex-col gap-3 text-slate-300">
                  <a
                    href="tel:+914442134770"
                    className="hover:text-white transition-all duration-300"
                  >
                    +91 44 4213 4770
                  </a>

                  <a
                    href="tel:+914449579771"
                    className="hover:text-white transition-all duration-300"
                  >
                    +91 44 4957 9771
                  </a>

                  <a
                    href="tel:+914448646772"
                    className="hover:text-white transition-all duration-300"
                  >
                    +91 44 4864 6772
                  </a>
                </div>
              </div>

              {/* ADDRESS */}
              <div>
                <div className="flex items-center gap-3 text-cyan-300">
                  <MapPin size={18} />
                  <span className="font-semibold">Location</span>
                </div>

                <p className="mt-4 text-slate-300 leading-7">
                  Chennai, Tamil Nadu,
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-20 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* BOTTOM */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2026 APX Solution. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-slate-500 text-sm">
              Built for Modern ERP Businesses
            </p>

            {/* SCROLL TOP */}
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="w-12 h-12 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center hover:scale-110"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;