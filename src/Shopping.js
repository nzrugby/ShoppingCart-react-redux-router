import React,{Component} from 'react'
import Cart1 from './Cart'
import {connect} from 'react-redux'
import Search1 from './Search'
import {HashRouter} from 'react-router-dom'
import NavHead from './NavHeader'


class Shopping extends Component{
    render(){
        let y;
        return(
            
            <div>
                <HashRouter>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        
                            <h1 style={{'color':'green','margin-left':'12%'}}>Welcome To ReactFruit Cart</h1>
                            <div className='row'>
                                <div className='col-md-10'>
                                    <Search1/>
                                    <hr/>
                                    <NavHead/>
                                </div>
                                <div className='col-md-1'>
                                    <Cart1/>
                                </div>
                            </div>
                    </div>
                </div>
                </HashRouter> 
            </div>
        )
    }
}
const Shopping1 = connect(null,null)(Shopping);
export default Shopping1