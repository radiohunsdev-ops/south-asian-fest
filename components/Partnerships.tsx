export default function Partnerships() {
  return (
    <section className="w-full bg-linear-to-b from-[#d9d4cc] to-[#6b2cff] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-5xl md:text-6xl font-light text-[#6b2cff] mb-16">
          Our partnerships
        </h2>

        <div className="bg-[#d2c7b6] rounded-sm px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left Logo */}
          <div className="flex items-center gap-4">
            <div className="text-white text-6xl font-light leading-tight">
              <div>O</div>
              <div>S</div>
              <div>A</div>
              <div>C</div>
              <div>A</div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-6 h-6 border-2 border-red-500 rotate-45"></div>
              <div className="w-6 h-6 border-2 border-red-500"></div>
              <div className="grid grid-cols-3 gap-1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 bg-red-500 block"></span>
                ))}
              </div>
              <div className="w-6 h-6 border-2 border-red-500 rotate-12"></div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-24 bg-purple-400 opacity-40"></div>

          {/* Center Logo */}
          <div className="text-center">
            <h3 className="text-white text-4xl font-serif leading-tight">
              Radio <br /> Huns
            </h3>
            <p className="text-[#f4a640] text-2xl mt-2">97.9FM</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-24 bg-purple-400 opacity-40"></div>

          {/* Right Logo */}
          <div>
            <h3 className="text-white text-4xl font-light tracking-widest">
              fineqia
            </h3>
          </div>

        </div>
      </div>
    </section>
  )
}