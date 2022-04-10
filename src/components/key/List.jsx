import { DotsVerticalIcon } from "@heroicons/react/solid";
import { ClipboardCopyIcon } from "@heroicons/react/outline";

const projects = [
  {
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
    created: "16 Desember 2021",
  },
  {
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
    created: "12 Januari 2022",
  },
  {
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
    created: "16 Februari 2022",
  },
  {
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
    created: "8 Maret 2022",
  },
];

export default function List() {
  return (
    <div>
      <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide mt-6'>
        Key List
      </h2>
      <ul
        role='list'
        className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'
      >
        {projects.map((project) => (
          <li
            key={project.key}
            className='col-span-1 flex shadow-sm rounded-md'
          >
            <button
              onClick={() => {
                navigator.clipboard.writeText(project.key);
              }}
              className={
                "bg-indigo-400 hover:bg-indigo-500 flex-shrink-0 flex items-center justify-center w-16 text-white p-3 text-xs rounded-l-md"
              }
            >
              <ClipboardCopyIcon />
            </button>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm truncate'>
                <h4 className='text-gray-900 font-medium whitespace-nowrap overflow-x-hidden overflow-ellipsis'>
                  {project.key}
                </h4>
                <p className='text-gray-500'>{project.created}</p>
              </div>
              <div className='flex-shrink-0 pr-2'>
                <button
                  type='button'
                  className='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <span className='sr-only'>Open options</span>
                  <DotsVerticalIcon className='w-5 h-5' aria-hidden='true' />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
