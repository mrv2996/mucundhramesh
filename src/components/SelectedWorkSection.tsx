import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WorkCard } from "@/components/WorkCard";
import { selectedWork } from "@/lib/work";

const SelectedWorkSection = () => (
  <section id="work" className="px-6 pt-10 lg:pt-14 pb-section">
    <div className="max-w-content mx-auto">
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <h2 className="font-inter text-2xl font-semibold text-primary">Selected work</h2>
        <Link to="/work" className="inline-flex min-h-11 items-center gap-1 text-base font-medium text-secondary hover:underline">All work <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {selectedWork.map((item) => <WorkCard key={item.title} item={item} />)}
      </div>
    </div>
  </section>
);

export default SelectedWorkSection;
