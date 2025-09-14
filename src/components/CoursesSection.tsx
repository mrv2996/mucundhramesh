import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, TrendingUp, DollarSign, Users } from "lucide-react";
const CoursesSection = () => {
  const courses = [{
    title: "Experimentation and Testing",
    url: "https://www.reforge.com/courses/experimentation-testing-od/details",
    icon: BookOpen,
    description: "Master data-driven experimentation frameworks and testing methodologies"
  }, {
    title: "Monetization and Pricing Strategy",
    url: "https://www.reforge.com/courses/monetization-and-pricing/",
    icon: DollarSign,
    description: "Build sustainable revenue models and optimize pricing strategies"
  }, {
    title: "Product-Led Growth",
    url: "https://www.reforge.com/courses/product-led-growth/",
    icon: TrendingUp,
    description: "Transform your product into your primary growth engine"
  }, {
    title: "Growth Leadership",
    url: "https://www.reforge.com/courses/growth-leadership/",
    icon: Users,
    description: "Scale growth teams and develop leadership skills for sustainable growth"
  }];
  return <section className="py-4 px-6 bg-muted/30">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Courses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Learn from my experience through my courses on Reforge</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {courses.map((course, index) => {
          const IconComponent = course.icon;
          return <div key={index} className="group">
                <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-primary/20 h-full">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {course.description}
                      </p>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full border-primary hover:bg-primary hover:text-primary-foreground transition-colors group-hover:bg-gradient-primary group-hover:border-transparent group-hover:text-white" asChild>
                    <a href={course.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Course
                    </a>
                  </Button>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default CoursesSection;