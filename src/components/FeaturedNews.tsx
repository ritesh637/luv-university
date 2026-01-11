import researchLab from "@/assets/research-lab.jpg";
import library from "@/assets/library.jpg";

const FeaturedNews = () => {
  const featuredArticle = {
    category: "Cybersecurity & Privacy",
    title: "New Center Tackles Global Cybersecurity Challenges",
    excerpt: "Luv University launches a groundbreaking research center to address emerging threats in digital security and privacy.",
    image: researchLab,
    link: "#",
  };

  const sideArticles = [
    {
      category: "AI & Robotics",
      title: "Researchers Develop AI System for Early Disease Detection",
      image: library,
      link: "#",
    },
    {
      category: "Sustainability",
      title: "Campus Achieves Carbon Neutrality Goal Ahead of Schedule",
      image: researchLab,
      link: "#",
    },
    {
      category: "Student Success",
      title: "Graduate Program Ranked #1 in Innovation Studies",
      image: library,
      link: "#",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-wide">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-display text-foreground">Latest News</h2>
          <a href="#news" className="btn-outline-dark hidden md:flex">
            All News
          </a>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-3">
            <a href={featuredArticle.link} className="group block card-hover">
              <div className="relative aspect-[16/10] card-image-zoom">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="overlay-gradient" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="category-pill mb-4 inline-block">
                    {featuredArticle.category}
                  </span>
                  <h3 className="text-heading text-white group-hover:text-primary transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-white/80 font-sans mt-3 hidden md:block">
                    {featuredArticle.excerpt}
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Side Articles */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {sideArticles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                className="group flex gap-4 card-hover"
              >
                <div className="w-24 h-24 flex-shrink-0 card-image-zoom">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-primary text-xs font-sans font-semibold uppercase tracking-wider mb-2">
                    {article.category}
                  </span>
                  <h4 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>

        <a href="#news" className="btn-outline-dark mt-8 md:hidden w-full justify-center">
          All News
        </a>
      </div>
    </section>
  );
};

export default FeaturedNews;
