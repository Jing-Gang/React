import {govList} from '../services'
export default {
  namespace: 'gov',
  state: {
    list:[],
    type:'',//new 表示新增，eidt 表示编辑，detail 表示详情
    info: {}
  },

  subscriptions: {
    setup({ dispatcsh, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *getGovList({payload}, {call, put}) {
      let res = yield call(govList, 1, 2);
      console.log('data...', res);
      yield put({
        type: 'changeList',
        payload: res.data.list
      })
    }
  },

  reducers: {
    changeList(state, {payload}){
      return {...state, list: payload}
    },
    goDetail(state,{payload}){
      let {type,info} = payload;
      return {...state,type,info}
    }
  },

};
