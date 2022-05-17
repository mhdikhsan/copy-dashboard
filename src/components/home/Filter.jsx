import { DownloadIcon, FilterIcon } from "@heroicons/react/outline";
import { lightFormat, subDays } from "date-fns";
import { useHandleDownload, useGraphFilter } from "../../hooks";

const Filter = () => {
  const reporters = [
    { id: 1, email: "pengguna 1" },
    { id: 2, email: "pengguna 2" },
    { id: 3, email: "pengguna 3" },
  ];
  const handleApplyFilter = useGraphFilter((state) => state.handleApplyFilter);
  const { handleDownload } = useHandleDownload();

  return (
    <form
      className='mt-5 space-y-8 divide-y divide-indigo-200 bg-white p-6 rounded-lg shadow'
      onSubmit={handleApplyFilter}
      onReset={handleDownload}
    >
      <div className='space-y-6'>
        <h4 className='text-lg leading-6 font-medium text-gray-900'>
          Filter Controller
        </h4>

        <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-8'>
          <div className='col-span-6 sm:col-span-2'>
            <label
              htmlFor='from'
              className='block text-sm font-medium text-gray-700'
            >
              From
            </label>
            <div className='mt-1'>
              <input
                required
                type='datetime-local'
                name='from'
                id='from'
                className='shadow-sm focus:ring-indigo-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md'
                defaultValue={lightFormat(
                  subDays(new Date(), 7),
                  "yyyy-MM-dd hh:mm"
                ).replace(" ", "T")}
              />
            </div>
          </div>

          <div className='col-span-6 sm:col-span-2'>
            <label
              htmlFor='to'
              className='block text-sm font-medium text-gray-700'
            >
              To
            </label>
            <div className='mt-1'>
              <input
                required
                type='datetime-local'
                name='to'
                id='to'
                className='shadow-sm focus:ring-indigo-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md'
                defaultValue={lightFormat(
                  new Date(),
                  "yyyy-MM-dd hh:mm"
                ).replace(" ", "T")}
              />
            </div>
          </div>

          

          <div className='col-span-6 sm:col-span-2 flex items-end space-x-2'>
            <button
              type='submit'
              className='flex-grow inline-flex justify-center items-center py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <FilterIcon
                className='mr-3 flex-shrink-0 h-6 w-6 text-white'
                aria-hidden='true'
              />
              Apply
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Filter;
