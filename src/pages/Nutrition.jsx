import { meals } from '../data/meals.js'

Function Nutrition() {
  return (
    <section className="container py-5 page-space">
      <div className="text-center mb-5">
        <p className="section-label">Nutrition</p>
        <h1 className="fw-bold">Simple nutrition habits</h1>
        <p className="text-muted mx-auto max-text">Fitness does not only depend on training. Food, water, and sleep are also important parts of progress.</p>
      </div>
      <div className="row g-4 mb-5">
        {meals.map((meal) => (
          <div className="col-md-6 col-lg-3" key={meal.name}>
            <div className="card custom-card h-100">
              <div className="card-body p-4">
                <h4>{meal.name}</h4>
                <p className="text-muted mb-0">{meal.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="water-box p-4 p-md-5 text-white">
        <div className="row align-items-center g-4">
          <div className="col-lg-8">
            <h2 className="fw-bold">Daily water reminder</h2>
            <p className="mb-0 text-white-75">A good habit is to drink water during the day instead of waiting until feeling very thirsty. This supports energy and recovery.</p>
          </div>
          <div className="col-lg-4 text-lg-end">
            <span className="big-number">6-8</span>
            <p className="mb-0">cups per day</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nutrition
