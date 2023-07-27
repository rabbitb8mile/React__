
const To = (props) => {
    return (
        <div>
            <input type="text" value={props.amount} onChange={event => props.onAmountChange(event.target.value)}  />
            <select value={props.currency} onChange={(e) => { props.setTo(e.target.value) }} placeholder="Country currency">
                {props.currencies.map((currency => (
                    <option value={currency}>{currency}</option>
                )))}
            </select>
        </div>
    )
}

export default To;