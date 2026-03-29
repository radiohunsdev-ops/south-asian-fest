type QuoteSectionProps = {
  quote: string
  author: string
  textColor?: string
  bgColor?: string
  gradientFrom?: string
  gradientTo?: string
}

export default function QuoteSection({
  quote,
  author,
  textColor = "text-white",
  bgColor = "bg-black",
  gradientFrom,
  gradientTo,
}: QuoteSectionProps) {
  const isGradient = gradientFrom && gradientTo

  const backgroundClass = isGradient
    ? `bg-gradient-to-r ${gradientFrom} ${gradientTo}`
    : bgColor

  return (
    <section
      className={`w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 flex items-center justify-center ${backgroundClass}`}
    >
      <div
        className={`max-w-4xl mt-10 sm:mt-14 md:mt-20 text-center ${textColor}`}
      >
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed font-light">
          {quote}
        </p>

        <div className="w-6 h-px bg-current mx-auto my-6 sm:my-8 opacity-60" />

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90">
          {author}
        </p>
      </div>
    </section>
  )
}