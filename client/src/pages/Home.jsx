import { Link } from 'react-router-dom';
import Pricing from '../components/Pricing';
import PostCard from '../components/PostCard';
import { gradient } from '../assets';
import Collaboration from '../components/Collaboration';
import Roadmap from '../components/Roadmap';
import { curve, heroBackground, robot,  r, r1, r2 } from "../assets";
import{ Button} from "flowbite-react";
import Section from "../components/Section";
import { BackgroundCircles, BottomLine, Gradient } from "../components/design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "../components/Generating";
import Notification from "../components/Notification";
import CompanyLogos from "../components/CompanyLogos";
import Services from '../components/Services';
import Benefits from '../components/Benefits';

const Home = () => {
  const parallaxRef = useRef(null);
  const staticPosts = [
    {
      _id: 1,
      title: 'Post 1',
      content: 'Content of Post 1',
      image: gradient,
      slug: 'post-1'
    },
    {
      _id: 2,
      title: 'Post 2',
      content: 'Content of Post 2',
      image: gradient,
      slug: 'post-2'
    },
  ];

  return (
    <Section
      className="pt-[12rem] -mt-[2rem]"
      crossesOffset="lg:translate-y-[4.1rem]"
      crosses
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="mb-6 h1">
            Discover the Innovation in Road Construction with {` `}
            <span className="relative inline-block">
              REDZM{" "}
              <img
                src={curve}
                className="absolute left-0 w-full top-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
        </div>
          <p className="max-w-3xl mx-auto mb-6 body-1 text-n-2 lg:mb-8">
            Revolutionize your infrastructure projects with REDZM. 
            Enhance efficiency and streamline operations with REDZM, 
            the ultimate solution for road construction management.
            </p>
          <Button className='self-center lg:translate-x-16 ml-96'              
          gradientDuoTone="purpleToPink"
          outline
          type="submit" >
            Get started
          </Button>
        </div>
        <div className="relative max-w-[20rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={r2}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="Road"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[100%] -translate-x-1/2 md:-top-[46%] md:w-[100%] lg:-top-[104%]">
          </div>
          <BackgroundCircles />
        </div>
      </div>
      <CompanyLogos className="relative z-10 hidden mt-20 lg:block" />        
      <Benefits />
      {/* <BottomLine /> */}
      <Services />
      <Collaboration />
      <Pricing />

    

    </Section>
  );
};

export default Home;
