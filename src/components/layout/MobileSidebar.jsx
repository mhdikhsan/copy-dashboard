import { Fragment } from "preact";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { classNames } from "../../utils";
import { navigation } from "../../static";
import { Link, useLocation } from "wouter-preact";

const MobileSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [loc] = useLocation();

  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 flex z-40 md:hidden'
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='transition ease-in-out duration-300 transform'
          enterFrom='-translate-x-full'
          enterTo='translate-x-0'
          leave='transition ease-in-out duration-300 transform'
          leaveFrom='translate-x-0'
          leaveTo='-translate-x-full'
        >
          <div className='relative flex-1 flex flex-col max-w-xs w-full bg-gray-800'>
            <Transition.Child
              as={Fragment}
              enter='ease-in-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in-out duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='absolute top-0 right-0 -mr-12 pt-2'>
                <button
                  type='button'
                  className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className='sr-only'>Close sidebar</span>
                  <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
                </button>
              </div>
            </Transition.Child>
            <div className='flex-1 h-0 pt-5 pb-4 overflow-y-auto'>
              <div className='flex-shrink-0 flex items-center px-4'>
                <span className="text-gray-300">GPT 3 DASHBOARD</span>
              </div>
              <nav className='mt-5 px-2 space-y-1'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.href === loc
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                    )}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon
                      className={classNames(
                        item.href === loc
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300",
                        "mr-4 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden='true'
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className='flex-shrink-0 flex bg-gray-700 p-4'>
              <a href='#' className='flex-shrink-0 group block'>
                <div className='flex items-center'>
                  <div>
                    <img
                      className='inline-block h-10 w-10 rounded-full'
                      src='https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHNvbWV8ZW58MHx8MHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </div>
                  <div className='ml-3'>
                    <p className='text-base font-medium text-white'>
                      Agung Dewandaru
                    </p>
                    <p className='text-sm font-medium text-gray-400 group-hover:text-gray-300'>
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </Transition.Child>
        <div className='flex-shrink-0 w-14'>
          {/* Force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileSidebar;
