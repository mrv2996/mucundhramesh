import { recommendations } from "@/components/RecommendationsSection";

const HomeRecommendation = () => {
  const rec = recommendations[0];
  return (
    <section className="px-6 py-section border-t">
      <div className="max-w-content mx-auto grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <h2 className="font-inter text-2xl font-semibold text-primary">Recommendation</h2>
        <figure>
          <blockquote className="text-base lg:text-lg leading-relaxed text-foreground">“{rec.text}”</blockquote>
          <figcaption className="mt-4 text-base text-muted-foreground">
            <span className="font-semibold text-foreground">{rec.name}</span> · {rec.title}, {rec.company}
            <div className="text-sm italic mt-1">{rec.relationship}</div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default HomeRecommendation;
