import { Button } from "../components/ui/button";
import Link from "next/link";

const CTASection = () => (
  <section className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to get started?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          Join thousands of satisfied customers who are already building amazing
          things with our platform.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" asChild>
            <Link href="/signup">Sign up now</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/login">Log in</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
