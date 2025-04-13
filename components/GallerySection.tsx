"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/1.jpg", // duplicated for seamless looping
  "/gallery/2.jpg",
];

const GallerySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll horizontally
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 0.5;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += speed;
        scrollContainer.scrollLeft = scrollAmount;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Centered Title and Button */}
        <div className="flex flex-col items-center justify-center mb-8 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center">
            Explore Our Gallery
          </h2>
          <Link
            href="/gallery"
            className="px-6 py-2 rounded-full bg-black text-white hover:bg-blue-700 transition duration-300"
          >
            View All
          </Link>
        </div>

        {/* Auto-scrolling Image Row */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
