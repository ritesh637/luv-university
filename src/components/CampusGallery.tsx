import library from "@/assets/library.jpg";
import sports from "@/assets/sports.jpg";
import dormitory from "@/assets/dormitory.jpg";
import researchLab from "@/assets/research-lab.jpg";

const CampusGallery = () => {
  const galleryItems = [
    { image: library, label: "Library", span: "col-span-2 row-span-2" },
    { image: sports, label: "Athletics", span: "col-span-1 row-span-1" },
    { image: dormitory, label: "Housing", span: "col-span-1 row-span-1" },
    { image: researchLab, label: "Research", span: "col-span-2 row-span-1" },
  ];

  return (
    <section className="py-16 md:py-24 bg-luv-light">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-display text-foreground mb-4">Campus Life</h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Explore the spaces where learning, discovery, and community come together.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`group relative overflow-hidden ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 right-4">
                <span className="category-pill-blue opacity-90 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#campus" className="btn-outline-dark">
            Explore Campus
          </a>
        </div>
      </div>
    </section>
  );
};

export default CampusGallery;
