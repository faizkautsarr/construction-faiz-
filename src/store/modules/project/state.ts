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

export interface ProjectState {
  projects: Project[]
  selectedProject: Project | null
  actionType: ActionType | null
}

export const state: ProjectState = {
  projects: [],
  selectedProject: null,
  actionType: null
}

export default state
