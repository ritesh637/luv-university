import { ArrowRight, Calendar } from "lucide-react";
import dormitory from "@/assets/dormitory.jpg";

const EventsSection = () => {
  const featuredEvent = {
    title: "Spring Open House 2025",
    date: "March 15, 2025",
    description: "Experience campus life firsthand. Meet faculty, tour facilities, and discover your future at Luv University.",
    image: dormitory,
    category: "Admissions",
  };

  const upcomingEvents = [
    { date: "Dec 12", title: "Graduate Research Symposium", category: "Research" },
    { date: "Dec 18", title: "Winter Commencement Ceremony", category: "Events" },
    { date: "Jan 8", title: "Spring Semester Begins", category: "Academic" },
    { date: "Jan 15", title: "Career Fair 2025", category: "Career" },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-wide">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-display text-foreground">Upcoming Events</h2>
          <a href="#events" className="btn-outline-dark hidden md:flex">
            All Events
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Event */}
          <a href="#" className="group relative card-hover overflow-hidden">
            <div className="aspect-[16/10] card-image-zoom">
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="overlay-gradient" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="category-pill mb-4 inline-block">
                {featuredEvent.category}
              </span>
              <h3 className="text-heading text-white group-hover:text-primary transition-colors">
                {featuredEvent.title}
              </h3>
              <p className="text-white/80 font-sans mt-2 text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {featuredEvent.date}
              </p>
            </div>
          </a>

          {/* Event List */}
          <div className="flex flex-col">
            {upcomingEvents.map((event, index) => (
              <a
                key={index}
                href="#"
                className="group flex items-center gap-6 py-5 border-b border-border hover:bg-muted/50 px-4 -mx-4 transition-colors"
              >
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="bg-primary text-primary-foreground font-sans font-bold text-lg px-3 py-2">
                    {event.date.split(" ")[0]}
                  </div>
                  <div className="text-muted-foreground text-xs font-sans uppercase mt-1">
                    {event.date.split(" ")[1]}
                  </div>
                </div>
                <div className="flex-grow">
                  <span className="text-primary text-xs font-sans font-semibold uppercase tracking-wider">
                    {event.category}
                  </span>
                  <h4 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors mt-1">
                    {event.title}
                  </h4>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
            ))}
            <a
              href="#events"
              className="mt-6 inline-flex items-center gap-2 text-primary font-sans font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
            >
              View Full Calendar
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
