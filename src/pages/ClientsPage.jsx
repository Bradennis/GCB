import PageHeader from '../components/PageHeader'
import Clients from '../components/Clients'

export default function ClientsPage() {
  return (
    <>
      <PageHeader
        title="Client Records"
        subtitle="Universities, polytechnics, international schools and organisations across Ghana that trust GCB."
      />
      <Clients />
    </>
  )
}
