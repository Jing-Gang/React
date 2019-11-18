import React, { Component } from 'react';
import styles from './style.css';
import { connect } from "dva";
const mapStateToProps = state=>{
    console.log('state...........',state)
    return {
      dist: state.add.dist
    }
  }
const mapDispatchToProps = dispatch=>{
    return {
        addDist:()=>{
        dispatch({
          type:'add/addDist'
        })
      }
    }
}
  @connect(mapStateToProps,mapDispatchToProps)
class add extends Component {
    state={
        list:[
            {
                name:'转账'
            },
            {
                name:'饿了么'
            },
            {
                name:'充值中心'
            },
            {
                name:'余额宝'
            },
            {
                name:'电影'
            },
            {
                name:'芝麻信用'
            }
        ],
        Add:[
            {
                name:'转账'
            },
            {
                name:'饿了么'
            },
            {
                name:'充值中心'
            },
            {
                name:'余额宝'
            },
            {
                name:'电影'
            },
            {
                name:'芝麻信用'
            }
        ]
    }
    componentDidMount(){
        this.props.addDist()
    }
    // Btnadd(item){
    //     this.state.list.shift(item)
    //     this.state.Add.push(item)
    //     this.setState({})
    // }
    // click(item){
    //     this.state.list.push(item)
    //     this.state.Add.pop(item)
    //     this.setState({})
    // }
    render() {
        return (
            <div>
                <h3>我的应用</h3>
                <div className={styles.one}>
                    {
                    this.state.list.map((item,index)=>{
                        return <div key={index} >{item.name}<span onClick={()=>{this.Btnadd(item)}}>X</span></div>
                    })
                    }
                </div>
                <h3>更多应用</h3>
                <div className={styles.box}>
                    {
                        this.state.Add.map((item,index)=>{
                            return <p key={index} >{item.name}<span onClick={()=>{this.click(item)}}>＋</span></p>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default add;