import React from 'react';
import { connect } from 'react-redux';
import { sellComp } from '../redux/actions/actions';

const CompComp = (props) => {
    const [number, setNumber] = React.useState(1)
    // console.log(number)
    return (
        <div className="container" >
            <h2>Computers [Pure Redux]</h2>
            <h3>Number of Computers - {props.numberOfComputers}</h3>
            <input value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => props.sellComp(number)} >Sell Computer</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    numberOfComputers: state.computer.numberOfComputers
})

const mapDispatchToProps = (dispatch) => ({
    sellComp: (number) => dispatch(sellComp(number))
})
export default connect(mapStateToProps, mapDispatchToProps)(CompComp)
