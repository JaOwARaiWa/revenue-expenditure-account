import Vue from 'vue'
import Vuex from 'vuex'
import Json from '/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data: Json.data || [],
      total: {
        income: 0,
        expenses: 0,
        balance: 0,
      }
  },

  getters: {
      records: (state) => state.data,
      total: (state) => state.total
  },

  mutations: {
      fetch(state, { res }) {
          state.data = res.data
      },
      add(state, { payload }) {
          state.data.push(payload)
      },
      sum(state) {
          state.total.income = 0
          state.total.expenses = 0
          state.total.balance = 0   
          state.data.forEach((rec) => {
              if (rec.type == 1) {
                state.total.income += rec.amount
                state.total.balance += rec.amount
            }
              else {
                state.total.expenses += rec.amount
                state.total.balance -= rec.amount
            }
        })
      }
  },

  actions: {
      /*fetchData({ commit }) {
        let res = {
            data: [
                {
                    type: 1,
                    amount: 1500,
                    date: '20/7/2021',
                    detail: 'เงินค่าขนม'
                },
                {
                    type: 2,
                    amount: 50,
                    date: '20/7/2021',
                    detail: 'ค่าข้าวหมูกรอบ'
                },
            ],
        }
        commit("fetch", { res })
      },*/
      addRecord({ commit }, payload) {
        commit("add", { payload })
      },
      sumTotal({ commit }) {  
        let res = this.state.data
        commit("sum", { res })
      }
  },

  modules: {
  }
})
