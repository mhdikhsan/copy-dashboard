import { KeyIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { useState } from "preact/hooks";

export default function Registration() {
  const [isRegister, setIsRegister] = useState(false);
  const handleRegistrationSubmit = (event) => {
    // event.target.reportValidity();
    event.preventDefault();
  };
  return (
    <form
      className='mt-5 space-y-3 bg-white p-6 rounded-lg shadow'
      onSubmit={handleRegistrationSubmit}
    >
      <label htmlFor='key' className='block text-sm font-medium text-gray-700'>
        Key registration
      </label>
      <div className='flex rounded-md shadow-sm'>
        <div className='relative flex items-stretch flex-grow focus-within:z-10'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <KeyIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
          </div>
          <input
            type='text'
            name='key'
            id='key'
            className='focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300'
            placeholder='Leave empty to generate a random key'
            onFocus={() => {
              setIsRegister(true);
            }}
            onBlur={(event) => {
              if (event.target.value === "") setIsRegister(false);
            }}
          />
        </div>
        <button
          type='submit'
          className='-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
        >
          <PlusCircleIcon
            className='h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
          <span>{isRegister ? "Register" : "Generate"}</span>
        </button>
      </div>
    </form>
  );
}
