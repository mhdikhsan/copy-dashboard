import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "preact";
import { useAuth, useLoginSubmit } from "../../hooks";
import Input from "./Input";

export default function LoginForm() {
  const auth = useAuth((state) => state.auth);
  const { loginSubmit } = useLoginSubmit();

  return (
    <Transition.Root appear show={!auth} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-10 overflow-y-auto'
        onClose={() => {}}
      >
        <div className='min-h-screen px-4 text-center flex justify-center items-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0  bg-gray-100 opacity-50' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <form
              className='relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'
              onSubmit={loginSubmit}
            >
              <div>
                <img
                  className='h-8 w-auto mx-auto'
                  src='https://geodashboard.braga.co.id/images/ic-logo-horizontal.svg'
                  alt='Braga Technplogies'
                />

                <div className='mt-3 text-center sm:mt-5 flex flex-col space-y-3'>
                  <Input type='email' />
                  <Input type='password' />
                </div>
              </div>
              <div className='mt-5 sm:mt-6'>
                <button
                  type='submit'
                  className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'
                >
                  Login
                </button>
              </div>
            </form>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
