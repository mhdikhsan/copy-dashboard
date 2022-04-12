import { MailIcon, KeyIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { useState } from "preact/hooks";

export default function Input({ type }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className='mt-1 relative rounded-md shadow-sm'>
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
        {type === "email" ? (
          <MailIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
        ) : (
          <KeyIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
        )}
      </div>
      <input
        type={visible ? "text" : type}
        name={type}
        autoComplete={type}
        placeholder={type === "email" ? "example@braga.co.id" : ""}
        className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md'
      />
      {type === "password" && (
        <div
          onClick={() => setVisible(!visible)}
          className='absolute inset-y-0 right-0 pr-3 flex items-center hover:cursor-pointer'
        >
          {visible ? (
            <EyeIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
          ) : (
            <EyeOffIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
          )}
        </div>
      )}
    </div>
  );
}
