"use client";

import Image from "next/image";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
];

export default function GalleryPage() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800 dark:text-white">
          Full Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority={index < 4}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
