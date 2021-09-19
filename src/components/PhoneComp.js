import { useSelector, useDispatch } from "react-redux";
import { sellPhone } from '../redux/actions/actions'

const PhoneComp = () => {
    const numberOfPhones = useSelector((state) => state.phone.numberOfPhones);
    const dispatch = useDispatch();
    return (
        <div className="container">
            <h2>Phones [Hooks]</h2>
            <h3>
                Number of Phones :
                <span className="number">{numberOfPhones}</span>
            </h3>
            <button onClick={() => dispatch(sellPhone())}>Sell Phone</button>
        </div>
    )
}

export default PhoneComp
