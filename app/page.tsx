import EnhancedHeroSection from "@/components/enhanced-hero-section"
import FeaturedProjects from "@/components/featured-projects"
import SkillsSection from "@/components/skills-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"

export default function HomePage() {
  return (
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
  )
}
