import './JobCard.css'
import { JobCardType } from '../ts/types';
import { useJobsContext } from '../context/useJobsContext';

function CardTag({ tag }: { tag: string }) {
  const { addFilter } = useJobsContext()

  return (
    <div className="job-card-tag" onClick={() => addFilter({tag})}>
      <span>{tag}</span>
    </div>
  )
}

export default function JobCard(
  { company, logo, isNew, isFeatured, position, role, level, postedAt, contract, location, languages, tools }: JobCardType ) {

  return (
    <article className={`job-card wrapper ${isFeatured ? 'featured' : ''}`}>

      <div className="job-card-main">
        <img src={logo} alt="Company logo" />
        <div className="job-card-main-content">
          <div className="job-card-main-content-row-1">
            <span className="company-name">{company}</span>
            {isNew && (
              <span className="new-tag">NEW!</span>
            )}
            {isFeatured && (
              <span className="featured-tag">FEATURED</span>
            )}
          </div>
          <div className="job-card-main-content-row-2">
            <h2><a href="#">{position}</a></h2>
          </div>
          <div className="job-card-main-content-row-3">
            <span className="postedAt">{postedAt}</span>
            <span className="contract">{contract}</span>
            <span className="location">{location}</span>
          </div>
        </div>
      </div>

      <div className="job-card-tags-wrapper">
        <ul className="job-card-tags-list">
          {role && ( <li><CardTag tag={role} /></li> )}
          {level && ( <li><CardTag tag={level} /></li> )}
          {tools && tools.map(( tool, index ) => (
            <li key={index}><CardTag tag={tool} /></li>
          ))}
          {languages && languages.map(( language, index ) => (
            <li key={index}><CardTag tag={language} /></li>
          ))}
        </ul>
      </div>

    </article>
  )
}