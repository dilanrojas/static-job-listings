import { useContext } from 'react'
import { FiltersContext } from './JobsContext'

export const useJobsContext = () => {
  const context = useContext(FiltersContext)

  if (!context) {
    throw new Error ('useJobsContext must be used within a CartProvider')
  }

  return context
}