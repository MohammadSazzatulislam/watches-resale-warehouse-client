import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Banner = () => {
  return (
    <div className="2xl:mx-auto 2xl:container w-full mx-auto h-[500px] flex justify-center">
      <div className=" w-full h-[500px] ">
        {/* Carousel for Small-Sized Screen */}
        <CarouselProvider
          className="relative block sm:hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={3}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="js-flickity flex justify-center items-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="w-7 h-20 flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-0 focus:outline-none focus:bg-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <Slider>
              <Slide index={0}>
                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-[500px]">
                  <div className="relative w-full h-[500px] lg:block hidden">
                    <img
                      src="https://www.wallpaperup.com/uploads/wallpapers/2014/07/22/402970/bc6b51fca31a552449a5c9bcd06edfb2-700.jpg"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pt-6 lg:pl-8 lg:pt-8 absolute left-5 top-10">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        WELCOME TO <br />
                        KARATE AND MARTIAL <br /> ARTS SCHOOL
                      </h1>
                    </div>
                  </div>
                  <div className="relative w-full h-[500px] lg:hidden">
                    <img
                      src="https://www.wallpaperup.com/uploads/wallpapers/2014/07/22/402970/bc6b51fca31a552449a5c9bcd06edfb2-700.jpg"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pt-6 lg:pl-8 lg:pt-8 absolute left-5 top-10">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        WELCOME TO <br />
                        KARATE AND MARTIAL <br /> ARTS SCHOOL
                      </h1>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-[500px]">
                  <div className="relative w-full h-[500px] lg:block hidden">
                    <img
                      src="http://unblast.com/wp-content/uploads/2019/10/Dark-Apple-Watch-Mockup-1.jpg"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pt-6 lg:pl-8 lg:pt-8 absolute left-5 top-10">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        WELCOME TO <br /> KARATE AND MARTIAL <br /> ARTS SCHOOL
                      </h1>
                    </div>
                  </div>
                  <div className="relative w-full h-[500px] lg:hidden">
                    <img
                      src="http://unblast.com/wp-content/uploads/2019/10/Dark-Apple-Watch-Mockup-1.jpg"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pt-6 lg:pl-8 lg:pt-8 absolute left-5 top-10">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        WELCOME TO <br />
                        KARATE AND MARTIAL <br /> ARTS SCHOOL
                      </h1>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-[500px]">
                  <div className="relative w-full h-[500px] lg:block hidden">
                    <img
                      src="https://www.wallpaperup.com/uploads/wallpapers/2014/07/22/401804/e86814e76e899c55b479550a0430f6bc.jpg"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pt-6 lg:pl-8 lg:pt-8 absolute left-5 top-10">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        WELCOME TO <br />
                        KARATE AND MARTIAL <br /> ARTS SCHOOL
                      </h1>
                    </div>
                  </div>
                  <div className="relative w-full h-[500px] lg:hidden">
                    <img
                      src="https://www.wallpaperup.com/uploads/wallpapers/2014/07/22/401804/e86814e76e899c55b479550a0430f6bc.jpg"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pt-6 lg:pl-8 lg:pt-8 absolute left-5 top-10">
                      <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">
                        WELCOME TO <br />
                        KARATE AND MARTIAL <br /> ARTS SCHOOL
                      </h1>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="w-7 h-20  flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-0 focus:outline-none cursor-pointer "
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for Medium and Large-Sized Screen */}
        <CarouselProvider
          className="relative hidden sm:block"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={3}
          visibleSlides={1}
          step={1}
          infinite={true}
          currentSlide={1}
        >
          <div className="js-flickity flex justify-center items-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="w-7 h-20 flex justify-center items-center bg-gray-300 border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-0 focus:outline-none focus:bg-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <Slider className="carousel__sliderLarge">
              <Slide className="carousel__inner-slideLarge" index={0}>
                <div className="gallery-cell w-full h-[500px]">
                  <div className="relative w-full h-[500px] lg:block hidden">
                    <img
                      src="https://www.wallpaperup.com/uploads/wallpapers/2014/07/22/402970/bc6b51fca31a552449a5c9bcd06edfb2-700.jpg"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pt-6 md:-pt-5  md:pl-8 absolute left-5 top-32">
                      <h1 className=" md:text-2xl lg:text-5xl  font-medium text-white">
                        WELCOME TO <br /> KARATE AND MARTIAL <br /> ARTS SCHOOL
                      </h1>
                      <h2 className=" md:text-sm lg:text-lg mt-5 lg:leading-normal font-medium text-white">
                        Karate is martial art and way of life that <br /> trains
                        a practitioner to be peaceful.
                      </h2>
                    </div>
                  </div>
                  <div className="relative w-full h-[500px] lg:hidden">
                    <img
                      src="https://www.wallpaperup.com/uploads/wallpapers/2014/07/22/402970/bc6b51fca31a552449a5c9bcd06edfb2-700.jpg"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pt-6 md:pt-12 md:pl-8 absolute left-5 top-32">
                      <h1 className="md:text-2xl lg:text-5xl  font-medium text-white">
                        WELCOME TO <br /> KARATE AND MARTIAL <br /> ARTS SCHOOL
                      </h1>
                      <h2 className=" md:text-sm lg:text-lg mt-5 lg:leading-normal font-medium text-white">
                        Karate is martial art and way of life that <br /> trains
                        a practitioner to be peaceful.
                      </h2>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide className="carousel__inner-slideLarge" index={1}>
                <div className="gallery-cell w-full h-[500px]">
                  <div className="relative w-full h-[500px] lg:block hidden">
                    <img
                      src="http://unblast.com/wp-content/uploads/2019/10/Dark-Apple-Watch-Mockup-1.jpg"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pt-6 md:pt-12 md:pl-8 absolute left-5 top-32">
                      <h1 className="md:text-2xl lg:text-5xl  font-medium text-white">
                        WELCOME TO <br /> KARATE AND MARTIAL <br /> ARTS SCHOOL
                      </h1>
                      <h2 className=" md:text-sm lg:text-lg mt-5 lg:leading-normal font-medium text-white">
                        Karate is martial art and way of life that <br /> trains
                        a practitioner to be peaceful.
                      </h2>
                    </div>
                  </div>
                  <div className="relative w-full h-[500px] lg:hidden">
                    <img
                      src="http://unblast.com/wp-content/uploads/2019/10/Dark-Apple-Watch-Mockup-1.jpg"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pt-6 md:pt-12 md:pl-8 absolute left-5 top-32">
                      <h1 className="md:text-2xl lg:text-5xl  font-medium text-white">
                        WELCOME TO <br /> KARATE AND MARTIAL <br /> ARTS SCHOOL
                      </h1>
                      <h2 className=" md:text-sm lg:text-lg mt-5 lg:leading-normal font-medium text-white">
                        Karate is martial art and way of life that <br /> trains
                        a practitioner to be peaceful.
                      </h2>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide className="carousel__inner-slideLarge" index={2}>
                <div className="gallery-cell w-full h-[500px]">
                  <div className="relative w-full h-[500px] lg:block hidden">
                    <img
                      src="https://www.wallpaperup.com/uploads/wallpapers/2014/07/22/401804/e86814e76e899c55b479550a0430f6bc.jpg"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pt-6 md:pt-12 md:pl-8 absolute left-5 top-32">
                      <h1 className="md:text-2xl lg:text-5xl  font-medium text-white">
                        WELCOME TO <br /> KARATE AND MARTIAL <br /> ARTS SCHOOL
                      </h1>
                      <h2 className=" md:text-sm lg:text-lg mt-5 lg:leading-normal font-medium text-white">
                        Karate is martial art and way of life that <br /> trains
                        a practitioner to be peaceful.
                      </h2>
                    </div>
                  </div>
                  <div className="relative w-full h-[500px] lg:hidden">
                    <img
                      src="https://www.wallpaperup.com/uploads/wallpapers/2014/07/22/401804/e86814e76e899c55b479550a0430f6bc.jpg"
                      alt="sitting area"
                      className="object-center object-cover w-full h-full"
                    />
                    <div className="pl-6 pt-6 md:pt-12 md:pl-8 absolute left-5 top-32">
                      <h1 className="md:text-2xl lg:text-5xl  font-medium text-white">
                        WELCOME TO <br /> KARATE AND MARTIAL <br /> ARTS SCHOOL
                      </h1>
                      <h2 className=" md:text-sm lg:text-lg mt-5 lg:leading-normal font-medium text-white">
                        Karate is martial art and way of life that <br /> trains
                        a practitioner to be peaceful.
                      </h2>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="w-7 h-20  flex justify-center items-center bg-gray-300 border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-0 focus:outline-none cursor-pointer"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="black"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default Banner;
