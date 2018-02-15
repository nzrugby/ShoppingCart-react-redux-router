import React,{Component} from 'react'
import {Switch,Route,HashRouter,Link} from 'react-router-dom'
import {Navbar,NavItem,Nav} from 'react-bootstrap' 
import ProductsContainer1 from './ProductsContainer'

class NavHead extends Component{
    
    render(){
        let x;
        return(
        <div>
            <div>
                <Navbar>
                    <Nav>
                        <NavItem><Link to='/Home'>Home</Link></NavItem>
                        <NavItem><Link to='/Fruits'>Fruit</Link></NavItem>
                        <NavItem><Link to='/Vegetibles'>Vegetible</Link></NavItem>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path='/' render={()=><ProductsContainer1 type={'all'}/>}/>
                    <Route exact path='/Home' render={()=><ProductsContainer1 type={'all'}/>}/>
                    <Route exact path='/Fruits' render={()=><ProductsContainer1 type={'fruit'}/>}/>
                    <Route exact path='/Vegetibles' render={()=><ProductsContainer1 type={'vegetible'}/>}/>
                </Switch>    
            </div>
            </div>
        )
    }
}

export default NavHead
