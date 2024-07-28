export const metadata = {
  title: "Partner with Us - Ziprus",
  description: "Discover how you can partner with Ziprus and benefit from our innovative solutions. Join us in driving success together.",
  openGraph: {
    title: "Partner with Us - Ziprus",
    description: "Discover how you can partner with Ziprus and benefit from our innovative solutions. Join us in driving success together.",
    url: "https://www.ziprus.com/partnership",
    images: [
      {
        url: "https://www.ziprus.com/images/partnership-banner.jpg", // replace with a relevant image
        width: 800,
        height: 600,
        alt: "Partner with Ziprus",
      },
    ],
    siteName: "Ziprus",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ziprus",
    title: "Partner with Us - Ziprus",
    description: "Discover how you can partner with Ziprus and benefit from our innovative solutions. Join us in driving success together.",
    images: ["https://www.ziprus.com/images/partnership-banner.jpg"], // replace with a relevant image
  },
};

export default function Partnership() {
  return (
    <section className="bg-base_color poppins mt-10 mb-16 pb-20">
      <div className="container w-3/4 mx-auto text-white">
        <h1 className="text-4xl text-center pt-32 pb-10">Partner with Us</h1>
        <div>
          <p className="text-sm font-extralight leading-loose mb-4">
            Ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, it has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="text-sm font-extralight leading-loose mb-4">
            The transition from print to digital has seen many innovations, yet the essence of quality and reliability remains our cornerstone. Join us in pushing the boundaries of what's possible.
          </p>
          <p className="text-sm font-extralight leading-loose mb-4">
            At Ziprus, we believe in forging strong partnerships that drive mutual growth and success. Our commitment to excellence ensures that we deliver the best to our partners and clients alike.
          </p>
          
          <h6 className="mt-10">Signed</h6>
          <div>For: Ziprus Chemicals</div>
          <div>Collins Abu</div>
          <div>MD/CEO</div>
        </div>
      </div>
    </section>
  );
}
