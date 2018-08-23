import React from 'react'
import Woman from '../../assets/img/woman.svg'

const Avatar = () => {
    return(
    <div style={{width: '3em', height: '3em', borderRadius: '3em', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1em'}}>
        <img src={Woman} alt='Avatar' style={{width: '2em'}}/>
    </div>
)
}

export default Avatar