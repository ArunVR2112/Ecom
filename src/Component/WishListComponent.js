import { Fragment, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import AppContext from '../context/AppContext/AppContext'
import WishListProduct from './WishListProducts';
// import emptyCart from '../images/empty-cart.png';
export default function CartComponent({ openWishList, setOpenWishList }) {
  let appContext = useContext(AppContext);


  return (
    <Transition.Root show={openWishList} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenWishList}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          Wish List
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setOpenWishList(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            x
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {appContext.wishListItem.length < 1 ? (<>
                        <img className="w-full" alt="Empty Cart" />
                        <p className='text-center'>
                          Pls! Item to Your Wish List
                        </p>
                      </>) : (appContext.wishListItem?.map((product) => {
                        return (
                          <>
                            <WishListProduct product={product} />
                          </>
                        )
                      }))}




                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}