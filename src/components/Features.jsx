// Features.jsx
import FeatureCard from './FeatureCard.jsx'

function Features({ features }) {
  return (
    <section className="container my-5 py-4" id="features">
      <h2 className="text-center fw-bold mb-5">Why Travel With Wanderly</h2>
      <div className="row g-4">
        {features.map(({ id, icon, title, description }) => (
          <div className="col-md-4" key={id}>
            {/* props passed down using object destructuring on the receiving end */}
            <FeatureCard icon={icon} title={title} description={description} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
