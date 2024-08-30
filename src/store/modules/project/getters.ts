import type { ProjectState } from './state'

export const getters = {
  getProjects: (state: ProjectState) => state.projects,
  getSelectedProject: (state: ProjectState) => state.selectedProject,
  getProjectById: (state: ProjectState) => (id: number) =>
    state.projects.find((project) => project.id === id),
  getActionType: (state: ProjectState) => state.actionType
}
