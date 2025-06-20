'use client'
import { useEffect } from "react"
import About from "@/Components/About/About"
import Home from "@/Components/Home/Home"
import Goal from "@/Components/Goal/Goal"
import BlogSection from "@/Components/Blog/Blog"
import CourseSection from "@/Components/Courses/Course"
import Trainers from "@/Components/Trainers/Trainers"
import TestimonialSlider from "@/Components/Testominial/Testmonial"
import Fotter from "@/Components/Fotter/Fotter"
import AOS from "aos";
import "aos/dist/aos.css";
export default function App(){
 useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return(
    <>
    <Home />
    <About />
    <Goal />
    <BlogSection />
    <CourseSection />
    <Trainers />
    <TestimonialSlider />
    <Fotter />
    </>
  )
}