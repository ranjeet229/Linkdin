import Image from 'next/image'
import React from 'react'

const Sidebar = ({user} : {user:any}) => {
  return (
    <div className='hidden md:block w-[20%] h-fit border bordergray-300 bg-white rounded-lg'>
        <div className='flex relative flex-col items-center'>
            <div className='w-full h-16 owverflow-hidden'>
                {
                    user &&(
                        <Image
                        src={"/banner.png"}
                        alt="Banner"
                        width={200}
                        height={200}
                        className='w-full h-full rounded-t'
                        />
                    )
                }

            </div>
        </div>
    </div>
  )
}

export default Sidebar