/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getHomePageData } from "@/sanity/lib/api";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const { hero, features } = await getHomePageData();

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-600">
            Weed Man
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Get a Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-screen">
        <Image
          src={hero.backgroundImage.asset.url}
          alt={hero.backgroundImage.alt || "alt"}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {hero.mainHeading}
            </h1>
            <p className="text-xl md:text-2xl mb-8">{hero.subheading}</p>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              {hero.ctaButton.text}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Your Season Ticket to a Winning Lawn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature: any, index: any) => (
              <Card key={index}>
                <CardHeader>
                  <Image
                    src={feature.icon.asset.url}
                    alt={feature.title || 'alt'}
                    width={64}
                    height={64}
                    className="mb-4"
                  />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {location.heading}
          </h2>
          <div className="flex flex-wrap justify-center mb-12">
            {location.statistics.map((stat, index) => (
              <div key={index} className="text-center px-8 mb-8">
                <p className="text-4xl font-bold text-green-600">
                  {stat.number}
                  {stat.suffix}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="relative h-96 md:h-[500px]">
            <Image
              src={location.mapImage.asset.url}
              alt="Service area map"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      {/* <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            It's Lawn Care Worth Celebrating
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.images.map((image, index) => (
              <div key={index} className="relative h-48 md:h-64">
                <Image
                  src={image.asset.url}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Customer Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.customerImage.asset.url}
                      alt={testimonial.customerName}
                      width={64}
                      height={64}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">
                        {testimonial.customerName}
                      </h3>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p>{testimonial.testimonialText}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Learn Section */}
      {/* <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Learn Your Lawn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={resource.image.asset.url}
                  alt={resource.title}
                  width={300}
                  height={200}
                  layout="responsive"
                />
                <CardHeader>
                  <CardTitle>{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{resource.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Help Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How We Help Your Lawn Thrive
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Customized lawn care programs",
              "Trained and certified professionals",
              "Environmentally responsible practices",
              "100% satisfaction guarantee",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="text-green-600 mr-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section> */}
    </main>
  );
}
