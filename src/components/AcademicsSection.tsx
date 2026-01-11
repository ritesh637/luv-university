import { ArrowRight, Quote } from "lucide-react";
import library from "@/assets/library.jpg";
import researchLab from "@/assets/research-lab.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const AcademicsSection = () => {
  const programs = [
    {
      title: "Undergraduate Programs",
      image: library,
      quote: "The foundation of critical thinking and lifelong learning.",
      link: "#",
    },
    {
      title: "Graduate Programs",
      image: researchLab,
      quote: "Advanced study for tomorrow's leaders and innovators.",
      link: "#",
    },
    {
      title: "Online Learning",
      image: heroCampus,
      quote: "World-class education accessible from anywhere.",
      link: "#",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-luv-light">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-display text-foreground mb-4">Academic Excellence</h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Discover programs that challenge, inspire, and prepare you for a meaningful career.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <a
              key={program.title}
              href={program.link}
              className="group bg-card card-hover overflow-hidden"
            >
              <div className="aspect-[4/3] card-image-zoom">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <div className="flex items-start gap-3 text-muted-foreground mb-6">
                  <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="font-sans text-sm italic">{program.quote}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-primary font-sans font-semibold text-sm uppercase tracking-wider">
                  Explore Programs
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
