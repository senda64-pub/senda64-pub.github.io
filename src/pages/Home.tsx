import Hero from "../components/Hero";
import WorkCard from "../components/WorkCard";
import { works } from "../data/works";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <Hero />
      <section className="grid md:grid-cols-2 gap-6">
        {works.map((w) => (
          <WorkCard key={w.title} {...w} />
        ))}

      </section>
    </div>
  );
}
