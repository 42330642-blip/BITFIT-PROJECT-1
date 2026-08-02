import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero-box text-white">
      <div className="container py-5">
        <div className="row align-items-center min-vh-75">
          <div className="col-lg-7 py-5">
            <span className="tag-text">Train smarter every day</span>
            <h1 className="display-4 fw-bold mt-3">Build a stronger body with simple fitness routines</h1>
            <p className="lead mt-3 text-white-75">BitFit Studio helps users discover workouts, choose plans, calculate BMI, and learn easy nutrition tips in one responsive web application.</p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Link className="btn btn-main btn-lg" to="/workouts">Explore Workouts</Link>
              <Link className="btn btn-outline-light btn-lg" to="/plans">Check Plans</Link>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-card p-4">
              <h3>Weekly Goal</h3>
              <p className="mb-4 text-white-75">Complete 4 workouts and drink enough water.</p>
              <div className="progress mb-3" role="progressbar" aria-label="progress" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" style={{ width: '75%' }}>75%</div>
              </div>
              <div className="row g-3 text-center">
                <div className="col-4"><div className="mini-box">4<br /><span>Days</span></div></div>
                <div className="col-4"><div className="mini-box">6L<br /><span>Water</span></div></div>
                <div className="col-4"><div className="mini-box">3<br /><span>Meals</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default hero
