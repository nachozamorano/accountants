import { createStore } from 'vuex'

export interface Counter {
  id: string
  name: string
  value: number
}

export interface State {
  counters: Counter[]
  filterType: string
  filterValue: number | null
  sortBy: string
  sortDir: string
  showModal: boolean
  searchQuery: string
}

function loadState(): Partial<State> {
  if (typeof window === 'undefined') return {}
  const counters = localStorage.getItem('counters')
  const filters = sessionStorage.getItem('filters')
  return {
    counters: counters ? JSON.parse(counters) : [],
    ...(filters ? JSON.parse(filters) : {})
  }
}

export default createStore({
  state: {
    counters: [] as Counter[],
    filterType: 'none',
    filterValue: null as number | null,
    sortBy: 'name',
    sortDir: 'asc',
    showModal: false,
    searchQuery: '',
    ...(typeof window !== 'undefined' ? loadState() : {})
  },
  mutations: {
    addCounter(state: State, name: string) {
      state.counters.push({
        id: Date.now().toString() + Math.floor(Math.random() * 10000),
        name,
        value: 0
      })
      localStorage.setItem('counters', JSON.stringify(state.counters))
    },
    removeCounter(state: State, id: string) {
      state.counters = state.counters.filter(c => c.id !== id)
      localStorage.setItem('counters', JSON.stringify(state.counters))
    },
    incrementCounter(state: State, id: string) {
      const counter = state.counters.find(c => c.id === id)
      if (counter) counter.value++
      localStorage.setItem('counters', JSON.stringify(state.counters))
    },
    decrementCounter(state: State, id: string) {
      const counter = state.counters.find(c => c.id === id)
      if (counter) counter.value--
      localStorage.setItem('counters', JSON.stringify(state.counters))
    },

    // filtros en sessionStorage
    setFilterType(state: State, type: string) {
      state.filterType = type
      sessionStorage.setItem('filters', JSON.stringify({
        filterType: state.filterType,
        filterValue: state.filterValue,
        sortBy: state.sortBy,
        sortDir: state.sortDir
      }))
    },
    setFilterValue(state: State, value: number | null) {
      state.filterValue = value
      sessionStorage.setItem('filters', JSON.stringify({
        filterType: state.filterType,
        filterValue: state.filterValue,
        sortBy: state.sortBy,
        sortDir: state.sortDir
      }))
    },
    clearFilters(state: State) {
      state.filterType = 'none'
      state.filterValue = null
      sessionStorage.removeItem('filters')
    },

    // ordenación en sessionStorage
    setSortBy(state: State, value: string) {
      state.sortBy = value
      sessionStorage.setItem('filters', JSON.stringify({
        filterType: state.filterType,
        filterValue: state.filterValue,
        sortBy: state.sortBy,
        sortDir: state.sortDir
      }))
    },
    setSortDir(state: State, value: string) {
      state.sortDir = value
      sessionStorage.setItem('filters', JSON.stringify({
        filterType: state.filterType,
        filterValue: state.filterValue,
        sortBy: state.sortBy,
        sortDir: state.sortDir
      }))
    },

    setShowModal(state: State, value: boolean) {
      state.showModal = value
    },
    setSearchQuery(state: State, query: string) {
      state.searchQuery = query
    }
  },
  getters: {
    filteredCounters(state: State): Counter[] {
      let arr = [...state.counters]

      if (state.filterType !== 'none' && state.filterValue !== null && !Number.isNaN(state.filterValue)) {
        const v = Number(state.filterValue)
        arr = state.filterType === 'greater'
          ? arr.filter(c => c.value > v)
          : arr.filter(c => c.value < v)
      }

      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase()
        arr = arr.filter(c => c.name.toLowerCase().includes(q))
      }

      arr.sort((a, b) => {
        if (state.sortBy === 'name') {
          const ra = a.name.toLowerCase()
          const rb = b.name.toLowerCase()
          if (ra < rb) return state.sortDir === 'asc' ? -1 : 1
          if (ra > rb) return state.sortDir === 'asc' ? 1 : -1
          return 0
        } else if (state.sortBy === 'value') {
          if (a.value < b.value) return state.sortDir === 'asc' ? -1 : 1
          if (a.value > b.value) return state.sortDir === 'asc' ? 1 : -1
          return 0
        }
        return 0
      })

      return arr
    },
    totalSum(state: State): number {
      return state.counters.reduce((sum, c) => sum + c.value, 0)
    }
  }
})
