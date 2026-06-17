// app/components/Hero.js
import { FiArrowRight, FiDownload } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-32 lg:pt-40 pb-20 lg:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-surface text-primary font-medium text-sm">
                Frontend Developer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Hi, I'm</span>
              <span className="block text-gradient">Dua Fatima</span>
              <span className="block">Digital Creator</span>
            </h1>

            <p className="text-lg text-text-muted mb-8 max-w-2xl">
              I build modern, responsive web applications with cutting-edge
              technologies. Passionate about creating digital experiences that
              make a difference.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-background font-semibold hover:bg-primary-dark transition-colors duration-200"
              >
                View Projects
                <FiArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/Dua_Ali_CV_2.pdf"
                download="/Dua_Ali_CV_2.pdf"  // یہ لائن شامل کریں
                className="inline-flex items-center px-6 py-3 rounded-lg border border-border hover:bg-surface transition-colors duration-200 font-medium"
              >
                <FiDownload className="mr-2 w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-primary to-accent rounded-3xl blur-2xl opacity-20 animate-pulse"></div>

              <div className="relative glass-effect rounded-3xl overflow-hidden p-4 lg:p-6">
                {/* Your Image Here */}
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/duapic.jpg"
                    alt="Dua Fatima - Professional Photo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
