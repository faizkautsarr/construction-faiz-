import type { Project, ActionType } from './state'
export const actions = {
  removeProject({ commit }: { commit: (mutation: string, value: any) => void }, id: number) {
    commit('removeProject', id)
  },

  editProject(
    { commit }: { commit: (mutation: string, value: any) => void },
    payload: {
      id: number
      project: Project
    }
  ) {
    commit('editProject', payload)
  },

  createProject({ commit }: { commit: (mutation: string, value: any) => void }, payload: Project) {
    commit('createProject', payload)
  },

  setSelectedProject({ commit }: { commit: (mutation: string, value: any) => void }, id: number) {
    commit('setSelectedProject', id)
  },

  setActionType({ commit }: { commit: (mutation: string, value: any) => void }, type: ActionType) {
    commit('setActionType', type)
  },

  resetSelectedProject({ commit }: { commit: (mutation: string) => void }) {
    commit('resetSelectedProject')
  },

  resetActionType({ commit }: { commit: (mutation: string) => void }) {
    commit('resetActionType')
  }
}
