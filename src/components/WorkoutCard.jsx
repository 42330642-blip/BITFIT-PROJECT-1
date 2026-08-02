Function WorkoutCard({ item }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card custom-card h-100">
        <div className="card-body p-4">
          <span className="small-label">{item.type}</span>
          <h4 className="mt-3">{item.title}</h4>
          <p className="text-muted">{item.text}</p>
          <div className="d-flex justify-content-between mt-4">
            <span>{item.time}</span>
            <span>{item.level}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkoutCard
