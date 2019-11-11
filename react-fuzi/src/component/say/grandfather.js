import React, { Component } from 'react';
import './css/porps.css'

class Son extends Component {
    state = {
        //接受儿子的
        sonVal:''
    }
    sonSay = (val) =>{
        console.log(val)
        this.setState({
            sonVal:val
        })
    }
    //点击发送儿子说给父亲的
    sendFa = (sonVal)=>{
        this.props.funDog(sonVal)
    }
    render() {
        console.log(this)
        const {sonVal} =this.state
        const {said}=this.props
        return <div className='SonBox'>
            <input value={sonVal} type="text" onChange={(e)=>{this.sonSay(e.target.value)}} />
            <button onClick={()=>{this.sendFa(sonVal)}}>发送</button>
            <div>
                <span>爸爸说:</span>
                {
                    said.map((item,key)=>{
                        return <div key={key}>{item}</div>
                    })
                }
            </div>
        </div>
    }
}
// 父亲组件
class Father extends Component {
    state = {
        Val:'',
        fatherlist:[],
        SonList:[]
    }
    getFather = (val)=>{
        console.log(val)
        this.setState({
            Val:val
        })
    }
    sendBtn = (newVal)=>{
        let {fatherlist}=this.state
        fatherlist.push(newVal)
        this.setState({
            fatherlist
        })
    }
    dogs = (sonList)=>{
        let {SonList} = this.state
        SonList.push(sonList)
        this.setState({
            SonList
        })
    }
    render() {
        const { Val,fatherlist,SonList }=this.state
        return <div className='fatherBox'>
            <div className='InBox'>
                <input type="text" value={Val} onChange={(e)=>{this.getFather(e.target.value)}} />
                <button onClick={()=>{this.sendBtn(Val)}}>发送</button>
                <p>儿子说</p>
                <div>
                    {
                        SonList.map((item,key)=>{
                            return <div key={key}>
                                {item}
                            </div>
                        })
                    }
                </div>
            </div>
            <Son said={fatherlist} funDog={this.dogs} />
        </div>
    }
}
export default Father