import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    admissions: [
      "Apply Now",
      "Visit Campus",
      "Request Info",
      "Financial Aid",
      "Tuition & Fees",
    ],
    academics: [
      "Undergraduate",
      "Graduate",
      "Online Programs",
      "Colleges & Schools",
      "Academic Calendar",
    ],
    campus: [
      "Housing",
      "Dining",
      "Athletics",
      "Student Life",
      "Health Services",
    ],
    quickLinks: [
      "News & Events",
      "Alumni",
      "Careers",
      "Library",
      "Maps & Directions",
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-luv-dark text-white py-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Logo & Tagline */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
              <div className="bg-primary text-primary-foreground px-4 py-3 font-serif font-bold text-lg tracking-tight inline-block mb-4">
                Luv University
              </div>
              <p className="text-white/70 font-sans text-sm mb-6">
                Where research gets to work. Transforming lives through education and discovery since 1892.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/70 hover:text-white hover:border-primary hover:bg-primary/20 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h3 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4">
                Admissions
              </h3>
              <ul className="space-y-2">
                {footerLinks.admissions.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/70 hover:text-white font-sans text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4">
                Academics
              </h3>
              <ul className="space-y-2">
                {footerLinks.academics.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/70 hover:text-white font-sans text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4">
                Campus
              </h3>
              <ul className="space-y-2">
                {footerLinks.campus.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/70 hover:text-white font-sans text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/70 hover:text-white font-sans text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="bg-luv-blue text-white py-6">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              <a href="#" className="flex items-center gap-2 text-white/90 hover:text-white font-sans text-sm transition-colors">
                <MapPin className="w-4 h-4" />
                123 University Avenue, City, State 12345
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-white/90 hover:text-white font-sans text-sm transition-colors">
                <Phone className="w-4 h-4" />
                (123) 456-7890
              </a>
              <a href="mailto:info@luvuniversity.edu" className="flex items-center gap-2 text-white/90 hover:text-white font-sans text-sm transition-colors">
                <Mail className="w-4 h-4" />
                info@luvuniversity.edu
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-luv-black text-white/60 py-4">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs font-sans">
            <p>© {new Date().getFullYear()} Luv University. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
