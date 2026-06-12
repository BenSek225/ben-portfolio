import EnhancedHeroSection from "@/components/enhanced-hero-section"
import FeaturedProjects from "@/components/featured-projects"
import SkillsSection from "@/components/skills-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Script from "next/script"

export default function HomePage() {
  return (
    <>
    <head>
      {/* Meta Pixel Code */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1551174763232392');
          fbq('track', 'PageView');
          fbq('track', 'ViewContent');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1551174763232392&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      {/* End Meta Pixel Code */}
    </head>
    <main className="min-h-screen">
      <EnhancedHeroSection />
      <div className="section-padding-sm">
        <FeaturedProjects />
      </div>
      <div className="section-padding-sm">
        <SkillsSection />
      </div>
      <div className="section-padding-sm">
        <TestimonialsSection />
      </div>
      <div className="section-padding-sm">
        <CTASection />
      </div>
    </main>
    </>
  )
}
