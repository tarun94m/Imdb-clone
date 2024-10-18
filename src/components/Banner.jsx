import React from 'react'

function Banner() {
    return (
        <div className='h-[85vh] mh:h-[70vh] bg-cover bg-center flex items-end' style={{ backgroundImage: `url(https://logos-world.net/wp-content/uploads/2020/05/Avengers-Endgame-Logo-2019.jpg)` }}>
            <div className='text-xl w-full text-center bg-gray-900/60 p-4'>Avengers</div>
        </div>
    )
}

export default Banner
