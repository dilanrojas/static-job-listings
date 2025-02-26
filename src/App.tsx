import './App.css'
import JobCard from './components/JobCard.tsx'
import Header from './components/Header.tsx'
import { useJobsContext } from './context/useJobsContext.tsx'

export default function App() {
  const { data } = useJobsContext()

  return (
    <>
      <Header />

      <section className="jobs-section">
        <ul className="flow">
          {data.map(({ id, company, logo, isNew, featured, position, role, level, postedAt, contract, location, languages, tools }) => (
            <li key={id}>
              <JobCard
                company={company}
                logo={logo}
                isNew={isNew}
                isFeatured={featured}
                position={position}
                role={role}
                level={level}
                postedAt={postedAt}
                contract={contract}
                location={location}
                languages={languages}
                tools={tools}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
