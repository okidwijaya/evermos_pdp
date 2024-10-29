import React from 'react'
import loadingsvg from "@/pictures/svg/tube-spinner.svg";
import Image from 'next/image';

export default function Loading() {
  return (
    <div className='' style={{height: '100%', margin: 'auto',color:"#121212", width: '100%', display: 'flex', maxWidth: '75px'}}>
          <Image
              src={loadingsvg}
              priority={false}
              width={75}
                height={75}
              alt="placeholder image"
          />
    </div>
  )
}