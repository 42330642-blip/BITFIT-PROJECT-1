import { useState } from 'react'

Function Plans() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [msg, setMsg] = useState('')

  const plans = [
    { name: 'Starter', price: 'Free', text: 'Basic workouts and simple weekly goals for beginners.' },
    { name: 'Active', price: '$9', text: 'Extra plans, BMI support, and better workout organization.' },
    { name: 'Pro', price: '$15', text: 'Advanced training ideas and detailed weekly fitness tracking.' }
  ]

  const calculateBmi = () => {
    const h = Number(height)
    const w = Number(weight)
    if (h <= 0 || w <= 0) {
      setBmi('')
      setMsg('Please enter valid height and weight values.')
      return
    }
    const result = w / ((h / 100) * (h / 100))
    const fixed = result.toFixed(1)
    setBmi(fixed)
    if (result < 18.5) setMsg('Your BMI is under the normal range.')
    else if (result < 25) setMsg('Your BMI is in the normal range.')
    else if (result < 30) setMsg('Your BMI is above the normal range.')
    else setMsg('Your BMI is high, so healthy changes may help.')
  }

  return (
    <section className="container py-5 page-space">
      <div className="text-center mb-5">
        <p className="section-label">Plans</p>
        <h1 className="fw-bold">Fitness plans and BMI calculator</h1>
        <p className="text-muted mx-auto max-text">This page gives users simple choices and a useful health calculation tool.</p>
      </div>
      <div className="row g-4 mb-5">
        {plans.map((plan) => (
          <div className="col-md-4" key={plan.name}>
            <div className="card custom-card h-100 text-center">
              <div className="card-body p-4">
                <h3>{plan.name}</h3>
                <h2 className="price-text my-3">{plan.price}</h2>
                <p className="text-muted">{plan.text}</p>
                <button className="btn btn-outline-dark">Choose Plan</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="calc-box p-4 p-md-5">
            <h2 className="fw-bold mb-3">BMI Calculator</h2>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Height in cm</label>
                <input className="form-control" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Weight in kg</label>
                <input className="form-control" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
              </div>
            </div>
            <button className="btn btn-main mt-4" onClick={calculateBmi}>Calculate BMI</button>
            {bmi && <h3 className="mt-4">Your BMI is {bmi}</h3>}
            {msg && <p className="mt-2 mb-0 text-muted">{msg}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plans
