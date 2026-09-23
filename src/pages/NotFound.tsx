import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  const { pathname } = useLocation();

  // Vercel rewrites every path to index.html, so the server answers 200 here.
  // Tell crawlers not to index the page, and give the tab an honest title.
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Page not found — GravonLabs';

    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex';
    document.head.appendChild(robots);

    return () => {
      document.title = prevTitle;
      robots.remove();
    };
  }, []);

  return (
    <main className="section section--paper notfound">
      <div className="container">
        <div className="notfound-inner">
          <div className="eyebrow">Error 404</div>
          <h1 className="notfound-title">This page didn&rsquo;t make it to production.</h1>
          <p className="about-lead">
            The link may be out of date, or the address mistyped. Everything else is where you
            left it.
          </p>
          <p className="notfound-path mono">
            No page at <code>{pathname}</code>
          </p>
          <div className="hero-actions">
            <Link to="/" className="btn btn--primary btn--lg">
              <ArrowLeft size={17} />
              Back to home
            </Link>
            <Link to="/about" className="btn btn--secondary btn--lg">
              About GravonLabs
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
