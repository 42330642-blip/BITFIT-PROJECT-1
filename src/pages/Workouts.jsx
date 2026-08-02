import { useState } from 'react'
import WorkoutCard from '../components/WorkoutCard.jsx'
import { workouts } from '../data/workouts.js'

Function Workouts() {
  const [pick, setPick] = useState('All')
  const types = ['All', 'Cardio', 'Strength', 'Yoga', 'HIIT']
  const list = pick === 'All' ? workouts : workouts.filter((item) => item.type === pick)

  return (
    <section className="container py-5 page-space">
      <div className="text-center mb-4">
        <p className="section-label">Workout Library</p>
        <h1 className="fw-bold">Choose a workout that fits your day</h1>
        <p className="text-muted mx-auto max-text">Use the buttons to filter workouts by category. This makes the page more useful and interactive for users.</p>
      </div>
      <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
        {types.map((type) => (
          <button className={pick === type ? 'btn btn-main' : 'btn btn-outline-dark'} key={type} onClick={() => setPick(type)}>
            {type}
          </button>
        ))}
      </div>
      <div className="row g-4">
        {list.map((item) => <WorkoutCard item={item} key={item.title} />)}
      </div>
    </section>
  )
}

export default Workouts
