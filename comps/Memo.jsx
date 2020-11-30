import React , {useMemo} from 'react'

function Memo() {
    const log = () => {
        console.log('clicked')
    }
    return (
        <div>
            <button onClick={log} >Log</button>
            <button onClick={log} >Log</button>
        </div>
    )
}

export default Memo
