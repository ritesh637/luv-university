import { ArrowRight } from "lucide-react";

const EditorialSection = () => {
  return (
    <section className="section-dark py-20 md:py-32">
      <div className="container-wide text-center">
        <h2 className="text-display text-white max-w-3xl mx-auto mb-6 text-balance">
          "Education is not preparation for life; education is life itself."
        </h2>
        <p className="text-white/60 font-sans mb-8">— John Dewey</p>
        <a href="#about" className="btn-outline-white">
          Our Mission & Values
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default EditorialSection;
