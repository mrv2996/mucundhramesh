import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Update meta tags for 404 page
    document.title = "Page Not Found | Mucundh Ramesh";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'The page you are looking for could not be found. Return to Mucundh Ramesh\'s portfolio.');
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background pt-16">
      <Navigation />
      
      <main className="flex items-center justify-center min-h-[60vh] px-6">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-6xl lg:text-8xl font-bold text-primary mb-6">404</h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Page not found</h2>
          <p className="text-base lg:text-lg text-muted-foreground mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-all duration-300">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
