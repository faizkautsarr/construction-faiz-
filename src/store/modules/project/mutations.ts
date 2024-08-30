import type { ProjectState, Project, ActionType } from './state'

export const mutations = {
  createProject(state: ProjectState, payload: Project) {
    state.projects.push(payload)
  },
  removeProject(state: ProjectState, id: number) {
    console.log(state.projects.filter((project) => project.id !== id))
    state.projects = state.projects.filter((project) => project.id !== id)
  },
  editProject(state: ProjectState, payload: { id: number; project: Project }) {
    const index = state.projects.findIndex((project) => project.id === payload.id)
    state.projects[index] = payload.project
  },
  setActionType(state: ProjectState, type: ActionType) {
    state.actionType = type
  },
  setSelectedProject(state: ProjectState, id: number) {
    state.selectedProject = state.projects.find((project) => project.id === id)!
  },
  resetSelectedProject(state: ProjectState) {
    state.selectedProject = null
  },

  resetActionType(state: ProjectState) {
    state.actionType = null
  }
}
