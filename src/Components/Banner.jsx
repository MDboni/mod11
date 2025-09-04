import img from './../assets/imges/54631.jpg'
import img1 from './../assets/imges/521621.jpg'
import { motion } from "motion/react"

const Banner = () => {

  return (
    <div className="w-5/6 mx-auto" >
      <div className="hero bg-base-200 min-h-screen w-full">
            <div className="hero-content  flex-col lg:flex-row-reverse">
                <div className='gap-2'>
              <motion.img
  src={img}
  className="max-w-sm rounded-lg shadow-2xl w-1/2"
  animate={{ x: [0, 100, 0] }}   // 0 → 100 → 0 px movement
  transition={{
    duration: 5,                  // পুরো cycle 5 সেকেন্ড
    repeat: Infinity,             // continuous
    repeatType: "mirror",         // smooth back-and-forth
    ease: "linear"                // constant speed
  }}
/>

                <motion.img
                src={img1}
                className="max-w-sm rounded-lg shadow-2xl w-1/2"
                animate={{ y: [0, 50, 0] }}   // 0 → 100 → 0 px movement
  transition={{
    duration: 5,                  // পুরো cycle 5 সেকেন্ড
    repeat: Infinity,             // continuous
    repeatType: "mirror",         // smooth back-and-forth
    ease: "linear"                // constant speed
  }}
                />
                </div>
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Banner
