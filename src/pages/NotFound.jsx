import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page Not Found" />
      <section className="section-padding">
        <div className="container-fluid text-center">
          <p className="text-lg">Sorry, the page you are looking for does not exist or has been moved.</p>
          <Link to="/" className="btn btn-primary mt-8">Back to Home</Link>
        </div>
      </section>
    </>
  )
}
