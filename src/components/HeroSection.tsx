import { ArrowRight } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          alt="Luv University campus aerial view with classical architecture and autumn trees"
          className="w-full h-full object-cover"
        />
        <div className="overlay-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container-wide">
          <div className="max-w-2xl animate-slide-up">
            <p className="category-pill mb-6 opacity-0 animate-fade-in stagger-1">
              Research Excellence
            </p>
            <h1 className="text-hero text-white mb-6 opacity-0 animate-fade-in stagger-2 text-balance">
              Research That Moves the World Forward
            </h1>
            <p className="text-white/80 text-lg font-sans mb-8 opacity-0 animate-fade-in stagger-3">
              At Luv University, we're solving the world's most complex challenges through groundbreaking research, innovative education, and collaborative partnerships.
            </p>
            <a
              href="#research"
              className="btn-outline-white opacity-0 animate-fade-in stagger-4"
            >
              Where Research Gets to Work
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Quick Links Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 bg-luv-black/80 backdrop-blur-sm">
            {[
              { label: "Apply Now", desc: "Start your journey" },
              { label: "Visit Campus", desc: "Schedule a tour" },
              { label: "Programs", desc: "Explore degrees" },
              { label: "Financial Aid", desc: "Scholarships & more" },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className="group px-6 py-5 border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-colors"
              >
                <p className="text-white font-sans font-semibold text-sm group-hover:text-primary transition-colors">
                  {item.label}
                </p>
                <p className="text-white/60 text-xs font-sans mt-1">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
