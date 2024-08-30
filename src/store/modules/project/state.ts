import { Dayjs } from 'dayjs'
export interface Project {
  id: number
  name: string
  location: string
  stage: string
  category: string
  othersCategory: string
  startDate: Dayjs
  description: string
  creatorId: string
}

export type ActionType = 'view' | 'remove' | 'edit' | 'create' | null

export interface ProjectsState {
  projects: Project[]
  selectedProject: Project | null
  actionType: ActionType | null
}

export const state: ProjectsState = {
  projects: [],
  selectedProject: null,
  actionType: null
}

export default state
