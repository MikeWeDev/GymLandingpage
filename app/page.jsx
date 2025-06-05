import About from "@/Components/About/About"
import Home from "@/Components/Home/Home"
import Goal from "@/Components/Goal/Goal"
import BlogSection from "@/Components/Start/Start"
import CourseSection from "@/Components/Courses/Course"
import Trainers from "@/Components/Trainers/Trainers"
import TestimonialSlider from "@/Components/Testominial/Testmonial"
import Fotter from "@/Components/Fotter/Fotter"
export default function App(){
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