import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sellWatch } from '../redux/actions/actions'

const WatchComp = () => {
    const numberOfWatches = useSelector((state) => state.watch.numberOfWatches);
    const dispatch = useDispatch();
    const [number, setNumber] = React.useState(1);

    return (
        <div className="container">
            <h2>Watches [Hooks]</h2>
            <h3>Number of Watches - {numberOfWatches}</h3>
            <input value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => dispatch(sellWatch(number))} >Sell Watch</button>
        </div>
    )
}

export default WatchComp