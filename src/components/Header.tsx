import './Header.css'
import { useJobsContext } from '../context/useJobsContext'

const IconRemove = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
)

function FilterTag({ tag }: { tag: string }) {
  const { removeFilter } = useJobsContext()

  return (
    <div className="filter-tag">
      <span>{tag}</span>
      <button className="remove-filter-btn" onClick={() => removeFilter({tag})}>
        <span><IconRemove /></span>
      </button>
    </div>
  )
}

export default function Header() {

  const { filters, clearFilters } = useJobsContext()

  return (
    <header className="pm-header">
      {filters.length != 0 && (
      <div className="current-filters-wrapper wrapper">
        <ul className="current-filters-list">
          {filters.map(({ tag }: { tag: string }, index ) => (
            <li key={index}><FilterTag tag={tag} /></li>
          ))}
        </ul>
        <button className="clear-filters-btn" onClick={() => clearFilters()}><span>Clear</span></button>
      </div>
      )}
    </header>
  )
}