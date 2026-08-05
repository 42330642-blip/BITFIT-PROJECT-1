import { Link } from 'react-router-dom'
import { Activity, Apple, Dumbbell, ShieldCheck } from 'lucide-react'
import Hero from '../components/Hero.jsx'

function Home() {
  const cards = [
    { icon: <Dumbbell size={34} />, title: 'Workout Library', text: 'Choose routines for cardio, strength, yoga, and HIIT.' },
    { icon: <Activiy size={34} />, title: 'BMI Tool', text: 'Calculate body mass index using height and weight.' },
    { icon: <Apple size={34} />, title: 'Nutrition Tips', text: 'Learn simple daily habits for better eating.' },
    { icon: <ShieldCheck size={34} />, title: 'Safe Progress', text: 'Start slowly and increase difficulty with time.' }
  ]

  return (
    <>
      <Hero />
      <section className="container py-5">
        <div className="text-center mb-5">
          <p className="section-label">Why BitFit Studio</p>
          <h2 className="fw-bold">A fitness app for pros and beginners</h2>
          <p className="text-muted mx-auto max-text">The app gives clear information without making fitness complicated. It is designed to be easy to use by all users.</p>
        </div>
        <div className="row g-4">
          {cards.map((item) => (
            <div className="col-md-6 col-lg-3" key={item.title}>
              <div className="feature-box h-100 p-4">
                <div className="icon-box mb-3">{item.icon}</div>
                <h5>{item.title}</h5>
                <p className="text-muted mb-0">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="soft-section py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h2 className="fw-bold">Plan your week and stay consistent</h2>
              <p className="text-muted">Consistency is more important than hard training for one day. BitFit Studio focuses on realistic plans that users can follow during school, work, or daily life.</p>
              <Link className="btn btn-main" to="/plans">View Plans</Link>
            </div>
            <div className="col-lg-6">
              <div className="quote-box p-4">
                <p className="fs-5">“The best workout is the one you can repeat. Small progress every week can make a big change.”</p>
                <span className="text-muted">BitFit Studio Motivation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
