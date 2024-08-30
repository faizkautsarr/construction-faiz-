import type { Project, ActionType } from './state'
export const actions = {
  removeProject({ commit }: { commit: (mutation: string, value: number) => void }, id: number) {
    commit('removeProject', id)
  },

  editProject(
    {
      commit
    }: {
      commit: (
        mutation: string,
        value: {
          id: number
          project: Project
        }
      ) => void
    },
    payload: {
      id: number
      project: Project
    }
  ) {
    commit('editProject', payload)
  },

  createProject(
    { commit }: { commit: (mutation: string, value: Project) => void },
    payload: Project
  ) {
    commit('createProject', payload)
  },

  setSelectedProject(
    { commit }: { commit: (mutation: string, value: number) => void },
    id: number
  ) {
    commit('setSelectedProject', id)
  },

  setActionType(
    { commit }: { commit: (mutation: string, value: ActionType) => void },
    type: ActionType
  ) {
    commit('setActionType', type)
  },

  resetSelectedProject({ commit }: { commit: (mutation: string) => void }) {
    commit('resetSelectedProject')
  },

  resetActionType({ commit }: { commit: (mutation: string) => void }) {
    commit('resetActionType')
  }
}
