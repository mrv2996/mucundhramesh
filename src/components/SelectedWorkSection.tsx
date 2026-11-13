import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WorkCard } from "@/components/WorkCard";
import { selectedWork } from "@/lib/work";
import { Reveal } from "@/components/Reveal";

const SelectedWorkSection = () => (
  <section id="work" className="px-6 pt-3 lg:pt-4 pb-section">
    <div className="max-w-content mx-auto">
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <h2 className="font-inter text-2xl font-semibold text-primary">Selected work</h2>
        <Link to="/work" className="inline-flex min-h-11 items-center gap-1 text-base font-medium text-secondary hover:underline">All work <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {selectedWork.map((item, i) => <Reveal key={item.title} delay={i * 90} className="flex"><WorkCard item={item} /></Reveal>)}
      </div>
    </div>
  </section>
);

export default SelectedWorkSection;
