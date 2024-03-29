import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { projects } from "../config";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import "../index.css";

export default function Projects() {
  return (
    <div className="flex flex-col w-5/6 lg:w-full h-full gap-8 ">
      <h2 className="text-4xl md:text-5xl font-bold text-[#354719]">
        Projects
      </h2>
      <Swiper
        effect={"coverflow"}
        rewind={true}
        slidesPerView={1}
        spaceBetween={10}
        loop={false}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className="w-full ml-7 md:ml-auto md:p-20 lg:py-20 lg:px-02 lg:w-[56rem]"
      >
        {...projects.map((project, index) => (
          <SwiperSlide
            key={project}
            className="lg:snap-center text-center  lg:space-y-5 mt-20 lg:mt-0 pt-5 md:pb-10  px-5 sm:h-screen md:h-[23rem] lg:h-[30rem]  bg-[#abb897]"
          >
            <div className="text-white text-3xl lg:text-6xl font-bold px-10">
              {project.title}
            </div>
            <img
              width={400}
              className="self-center m-auto border-solid border-2 border-[#526635]"
              src={project.image}
            />
            <div className="space-y-[-35px] lg:space-y-[-35px] pb-5">
              <div>{project.description}</div>
              <div className="space-x-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                >
                  <button
                    className={`bg-[#6d8a41] hover:bg-[#394b1e] py-4 px-8 rounded-lg font-bold text-lg mt-16 ${
                      !project.demoUrl ? "cursor-not-allowed" : ""
                    }`}
                    disabled={!project.demoUrl}
                  >
                    <AiOutlineLink color="white" />
                  </button>
                </a>
                <a
                  href={project.gitUrl}
                  target="_blank"
                >
                  <button
                    className={`bg-[#6d8a41] hover:bg-[#394b1e] py-4 px-8 rounded-lg font-bold text-lg mt-16 ${
                      !project.gitUrl ? "cursor-not-allowed" : ""
                    }`}
                    disabled={!project.gitUrl}
                  >
                    <AiFillGithub color="white" />
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
