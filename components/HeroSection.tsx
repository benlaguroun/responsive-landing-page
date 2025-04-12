import { Button } from "../components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroSection = () => (
  <section className="relative isolate pt-14">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/hero.png
        "
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        className="object-center"
      />
    </div>

    {/* Content */}
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 relative z-10">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
          Build something amazing with our platform
        </h1>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" asChild>
            <Link href="/signup">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#features">Learn more</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
