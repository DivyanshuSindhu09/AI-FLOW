import React from 'react'
import NavLinks from './navbar/NavLinks'
import { Button } from '../ui/button'
import Link from 'next/link'
import ROUTES from '@/constants/routes'
import Image from 'next/image'

const LeftSideBar = () => {
  return (
    <section className='background-light900_dark200 light-border flex flex-col p-6 sticky top-0 left-0 h-screen justify-between pt-24 overflow-y-auto shadow-light-300 max-sm:hidden lg:w-[266px]'>
        <div className='flex flex-1 flex-col gap-6'>
            <NavLinks/>
        </div>
        <div className='flex flex-col gap-3'>
            
                <Button asChild className="small-medium btn-secondary flex items-center min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Link href={ROUTES.SIGN_IN}>
              <Image
              src="/icons/account.svg"
              width={20}
              height={20}
              alt='Account'
              className=''
              />
                  <span className="primary-text-gradient font-bold max-md:hidden font-absans text-xl">Login</span>
              </Link>
                </Button>
            
            
                <Button asChild className="small-medium btn-tertiary flex items-center min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Link href={ROUTES.SIGN_IN}>
              <Image
              src="/icons/sign-up.svg"
              width={20}
              height={20}
              alt='Account'
              className=''
              />    
                  <span className=" font-semibold font-absans max-md:hidden text-light-800 text-xl">Sign Up</span>
              </Link>
                </Button>
            
        </div>
    </section>
  )
}

export default LeftSideBar