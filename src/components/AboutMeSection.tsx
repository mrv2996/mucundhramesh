const AboutMeSection = () => {
  return <section className="py-16 px-6 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in">A Bit More About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/30 hover:shadow-medium transition-all duration-300">
            <p className="text-base text-foreground leading-relaxed font-medium">
              Work is my hobby, which basically makes me a workaholic. I keep telling myself I'll retire and do something else, but then I get infatuated by another business/problem and it sucks me back in. I love business challenges and see them as puzzles (which I also obsess about - nothing better than doing 5,000-piece puzzle over the holidays). 
              <br/><br/>
              I've got an amazing husband and two kids who keep me humble (and oh-so-busy). I'm an animal person through and through: I have chickens, cats, a dog… and I secretly dream of owning a miniature cow one day. Staying active keeps me sane - I traded CrossFit (after one too many injuries) for Orangetheory and recently did 1-mile run in 6:16 min, which I'm very proud of.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutMeSection;