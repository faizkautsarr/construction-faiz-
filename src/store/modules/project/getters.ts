import type { ProjectsState } from './state'

export const getters = {
  getProjects: (state: ProjectsState) => state.projects,
  getSelectedProject: (state: ProjectsState) => state.selectedProject,
  getProjectById: (state: ProjectsState) => (id: number) =>
    state.projects.find((project) => project.id === id),
  getActionType: (state: ProjectsState) => state.actionType
}
