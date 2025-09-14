const AdvisedCompaniesSection = () => {
  const companies = [{
    name: "Krisp",
    logo: "🎤",
    url: "https://krisp.ai/"
  }, {
    name: "MongoDB",
    logo: "🍃",
    url: "https://mongodb.com"
  }, {
    name: "Builder.io",
    logo: "🏗️",
    url: "https://builder.io"
  }, {
    name: "Vimeo",
    logo: "📹",
    url: "https://vimeo.com"
  }, {
    name: "Redis",
    logo: "📊",
    url: "https://redis.com"
  }, {
    name: "Manychat",
    logo: "💬",
    url: "https://manychat.com"
  }, {
    name: "Sanity",
    logo: "🎨",
    url: "https://www.sanity.io/"
  }, {
    name: "Clockwise",
    logo: "⏰",
    url: "https://www.getclockwise.com/"
  }, {
    name: "Roofr",
    logo: "🏠",
    url: "https://roofr.com"
  }, {
    name: "Maze",
    logo: "🧩",
    url: "https://maze.co"
  }, {
    name: "HP",
    logo: "💻",
    url: "https://HP.com"
  }, {
    name: "Browserstack",
    logo: "🌐",
    url: "https://browserstack.com"
  }, {
    name: "GoFundMe",
    logo: "💝",
    url: "https://gofundme.com"
  }, {
    name: "Bonusly",
    logo: "🎯",
    url: "https://bonusly.com"
  }, {
    name: "SimilarWeb",
    logo: "📚",
    url: "https://similarweb.com"
  }, {
    name: "Ledgy",
    logo: "🎬",
    url: "https://ledgy.com"
  }];
  return <section className="py-4 px-6">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Advised Companies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Helped lots of companies with their growth efforts
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {companies.map((company, index) => <a key={index} href={company.url} target="_blank" rel="noopener noreferrer" className="group bg-card rounded-xl p-4 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-primary/20 block cursor-pointer">
              <div className="text-center">
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
              </div>
            </a>)}
        </div>

        <div className="text-center mt-8">
          
        </div>
      </div>
    </section>;
};
export default AdvisedCompaniesSection;