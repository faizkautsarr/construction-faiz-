import type { ProjectsState, Project, ActionType } from './state'

export const mutations = {
  createProject(state: ProjectsState, payload: Project) {
    state.projects.push(payload)
  },
  removeProject(state: ProjectsState, id: number) {
    console.log(state.projects.filter((project) => project.id !== id))
    state.projects = state.projects.filter((project) => project.id !== id)
  },
  editProject(state: ProjectsState, payload: { id: number; project: Project }) {
    const index = state.projects.findIndex((project) => project.id === payload.id)
    state.projects[index] = payload.project
  },
  setActionType(state: ProjectsState, type: ActionType) {
    state.actionType = type
  },
  setSelectedProject(state: ProjectsState, id: number) {
    state.selectedProject = state.projects.find((project) => project.id === id)!
  },
  resetSelectedProject(state: ProjectsState) {
    state.selectedProject = null
  },

  resetActionType(state: ProjectsState) {
    state.actionType = null
  }
}
