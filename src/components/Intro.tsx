import BlurText from "./BlurText";

function Intro() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-black text-white overflow-hidden">

      <div className="absolute top-20 left-20 h-72 w-72 bg-purple-500/30 rounded-full blur-3xl" />

      <div className="absolute bottom-20 right-20 h-72 w-72 bg-cyan-500/30 rounded-full blur-3xl" />

      <div className="z-10">
        <BlurText
          text="Jisha  Shaji"
          delay={70}
          animateBy="letters"
          direction="top"
          className="text-7xl md:text-8xl font-bold"
        />

        <p className="mt-6 text-2xl text-gray-300">
          Frontend Developer
        </p>
      </div>

    </section>
  );
}

export default Intro;