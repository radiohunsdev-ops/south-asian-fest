import Image from "next/image";

type Media = {
  id: string;
  url: string;
  alt?: string;
};

type SlideItem = {
  id: string;
  images: Media[];
};

export default function ImageCollage({
  slides,
}: {
  slides: SlideItem[];
}) {
  const images = slides[0]?.images.filter((img) => img.url) || [];

  if (images.length === 0) return null;

  const isGridLayout = images.length >= 4;

  return (
    <div className="w-full h-[85vh] flex bg-white">
      <div className="relative w-[60%] h-full">
        <Image
          src={images[0].url}
          alt={images[0].alt || "image"}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="w-[40%] h-full">
        {!isGridLayout && (
          <div className="flex flex-col h-full">
            <div className="relative h-1/2 w-full">
              {images[1] && (
                <Image
                  src={images[1].url}
                  alt={images[1].alt || "image"}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="relative h-1/2 w-full">
              {images[2] && (
                <Image
                  src={images[2].url}
                  alt={images[2].alt || "image"}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
        )}
        {isGridLayout && (
          <div className="grid grid-cols-2 grid-rows-2 h-full">
            {images.slice(1, 5).map((img) => (
              <div key={img.id} className="relative w-full h-full">
                <Image
                  src={img.url}
                  alt={img.alt || "image"}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}