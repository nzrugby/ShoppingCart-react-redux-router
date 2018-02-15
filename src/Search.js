import React,{Component} from 'react'
import {connect} from 'react-redux'
import {mapStateToPropsProductsContainer, mapDispatchToPropsProductsContainer } from './Reducer/reducer';
import {Link} from 'react-router-dom'

class Search extends Component{
    render(){
        const {searchClick} = this.props;
        return(
            <div className='row'>
                <div className='col-md-8 col-md-offset-2'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <input className="form-control"  id="search" type="text" placeholder="Please input here"/>
                        </div>
                        <div className='col-md-3'>
                            <button className="btn" onClick={searchClick}><Link to='/Home'>Search</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const Search1 = connect(mapStateToPropsProductsContainer,mapDispatchToPropsProductsContainer)(Search)
export default Search1