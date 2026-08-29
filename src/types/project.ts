export type ProjectStatus = 'Production' | 'Active Development' | 'Completed' | 'Ongoing'

export type ProjectStage = {
  title: string
  description: string
}

export type Project = {
  id: string
  title: string
  kicker: string
  summary: string
  challenge: string
  contribution: string[]
  outcome: string
  tags: string[]
  image?: string
  gallery?: string[]
  href?: string
  repo?: string
  badge?: string
  featured?: boolean
  status?: ProjectStatus
  metrics?: string[]
  architecture?: string[]
  stages?: ProjectStage[]
}
