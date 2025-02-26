import { createContext, useState, ReactNode, useEffect } from 'react'
import { Filter, JobsData } from '../ts/types'
import jobsData from '../lib/data.json'

export const FiltersContext = createContext<{
  filters: Filter[]
  setFilters: React.Dispatch<React.SetStateAction<Filter[]>>
  data: JobsData[]
  setData: React.Dispatch<React.SetStateAction<JobsData[]>>
  addFilter: (filter: Filter) => void
  removeFilter: (filter: Filter) => void
  clearFilters: () => void
} | undefined > (undefined)

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Filter[]>([])
  const [data, setData] = useState<JobsData[]>([])

  const applyFilters = (filters: Filter[]) => {
    if (filters.length === 0) {
      setData(jobsData)
      return
    }

    setData(
      jobsData.filter((item) =>
        filters.every(filter =>
          item.languages.includes(filter.tag) ||
          item.tools.includes(filter.tag) ||
          item.role === filter.tag ||
          item.level === filter.tag
        )
      )
    )
  }

  useEffect(() => {
    applyFilters(filters)
  }, [filters])

  const addFilter = (filter: Filter) => {
    setFilters((prevItems) =>
      prevItems.some((item) => item.tag === filter.tag)
        ? prevItems
        : [...prevItems, filter]
    )
  }

  const removeFilter = (filter: Filter) => {
    setFilters((prevItems) =>
      prevItems.filter((item) => item.tag !== filter.tag)
    )
  }

  const clearFilters = () => {
    setFilters([])
  }

  return (
    <FiltersContext.Provider value={{ data, setData, filters, setFilters, addFilter, removeFilter, clearFilters}}>
      {children}
    </FiltersContext.Provider>
  )
}