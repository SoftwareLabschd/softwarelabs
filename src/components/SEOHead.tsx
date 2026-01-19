import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}

const SEOHead = ({
  title = '©SoftwareLabs - Fueling the Future with Code & Creativity',
  description = 'SoftwareLabs is a digital innovation label led by young tech minds. We create educational, entertaining web tools.',
  keywords = ['software development', 'web development', 'React', 'JavaScript', 'innovation'],
  image = 'https://storage.googleapis.com/gpt-engineer-file-uploads/spXYxfHil7XwwnqrLm7ykYdhEGm2/social-images/social-1757746603498-softwarelabs2.png',
  url = 'https://softwarelabs.lovable.app/',
  type = 'website',
  author = 'Paras Dhiman & Arhan Saha',
  publishedTime,
  modifiedTime,
  noindex = false,
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      
      meta.content = content;
    };

    // Standard meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords.join(', '));
    updateMeta('author', author);
    
    if (noindex) {
      updateMeta('robots', 'noindex, nofollow');
    }

    // Open Graph
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', image, true);
    updateMeta('og:url', url, true);
    updateMeta('og:type', type, true);
    updateMeta('og:site_name', 'SoftwareLabs', true);

    if (publishedTime) {
      updateMeta('article:published_time', publishedTime, true);
    }
    
    if (modifiedTime) {
      updateMeta('article:modified_time', modifiedTime, true);
    }

    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Cleanup function
    return () => {
      document.title = '©SoftwareLabs';
    };
  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, noindex]);

  return null;
};

export default SEOHead;
