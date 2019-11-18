import {addDist} from '../services/index'
export default {
  namespace: 'add',

  state: {
    dist:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *addDist({ payload }, { call, put }) { 
       // eslint-disable-line
      let res=yield call(addDist,1,2);
      console.log('res...',res)
      yield put({
        type:'addDist',
        payload:res.data.data
      })
    },
  },

  reducers: {
    addDist(state, {payload}){
      console.log('payload.....',payload)
      return {...state, dist: payload}
    },
  },

};
