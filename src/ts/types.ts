export type JobCardType = {
  company: string
  logo: string
  isNew: boolean
  isFeatured: boolean
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages?: string[]
  tools?: string[]
}

export type JobsData = {
  id: number
  company: string
  logo: string
  isNew: boolean
  featured: boolean
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages: string[]
  tools: string[]
}

export type Filter = {
  tag: string
}
