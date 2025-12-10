"use client";

import RotatingText from "../RotatingText/RotatingText";
import SplitText from "../SplitText/SplitText";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 sm:px-10 md:px-20"
    >
      <div className="container mx-auto flex flex-col items-center justify-center text-center gap-6 -mt-10">
        {/* 🔹 Baris "I'm Ready For Job" */}
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <h1 className="text-lg sm:text-xl md:text-2xl text-white font-bold whitespace-nowrap">
              I'm Ready For Job
            </h1>
            <RotatingText
              texts={[
                "Web Design",
                "Web Development",
                "Web Programming",
                "AI Development",
              ]}
              mainClassName="px-2 bg-[#5AB4E6] text-black rounded-lg text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </AnimatedContent>

        {/* 🔹 Nama & Role */}
        <div className="flex flex-col items-center justify-center">
          <SplitText
            text="Maulana Jafar Sidiq"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white"
            delay={50}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
          />
          <SplitText
            text="Front-End Developer"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#5AB4E6]"
            delay={75}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
          />
        </div>

        {/* 🔸 Tombol ke Experience (Background biru lebih menarik) */}
        <div className="mt-6">
          <a href="#experience">
            <SplitText
              text="Lihat Pengalaman Saya"
              className="inline-block text-sm sm:text-base text-black px-5 py-2 rounded-full shadow-lg shadow-[#5AB4E6]/40 hover:shadow-[#5AB4E6]/70 transition-all duration-300 bg-gradient-to-r from-[#4FA8FF] via-[#5AB4E6] to-[#4FCBFF] hover:brightness-110 hover:scale-105"
              delay={60}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
