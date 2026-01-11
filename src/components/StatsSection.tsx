import { useEffect, useRef, useState } from "react";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

const AnimatedStat = ({ value, suffix, label, delay = 0 }: StatProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => {
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= value) {
                setCount(value);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, delay, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-serif font-bold text-white mb-2">
        {count.toLocaleString()}
        <span className="text-primary">{suffix}</span>
      </div>
      <p className="text-white/70 font-sans text-sm uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 1300, suffix: "+", label: "Faculty Members" },
    { value: 98, suffix: "%", label: "Employment Rate" },
    { value: 50, suffix: "+", label: "Research Centers" },
    { value: 15000, suffix: "+", label: "Students Enrolled" },
  ];

  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-display text-white mb-4">By the Numbers</h2>
          <p className="text-white/70 font-sans max-w-2xl mx-auto">
            Our commitment to excellence is reflected in every metric of our institution.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
