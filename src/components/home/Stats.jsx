// import { useGraphData } from "../../hooks";
import { useMemo } from "preact/hooks";
import { stats } from "../../static";

export default function Stats() {
  // const { items } = useGraphData();
  const items = useMemo(async () => ([]), []);
  const { sum, avg, high , avgmonth, highmonth, today } = useMemo(async () => {
    let res = await fetch("https://gpt-3-api.herokuapp.com/site-traffic", {
      method: "POST",
      body: JSON.stringify({
        dateFrom, daTeto
      }),
      headers: { "Content-Type": "application/json", Authorization: key },
    });
    res = await res.json();
    let sum = res.length;
    let avg = res.length;
    let high = res.length;
    let avgmonth = res.length;
    let highmonth = res.length;
    let today = res.length;
    // if (items?.length) {
    //   items.forEach((item) => {
    //     sum += +item.count.unique_id;
    //     high = high > +item.count.unique_id ? high : +item.count.unique_id;
    //   });
    //   avg = sum / items.length;
    // }
    return { sum, avg, high , avgmonth, highmonth, today };
  }, [items]);

  return (
    <dl className='my-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x'>
      {stats.map((item) => (
        <div key={item.name} className='px-4 py-5 sm:p-6'>
          <dt className='text-base font-normal text-gray-900'>{item.name}</dt>
          <dd className='mt-1 flex justify-between items-baseline md:block lg:flex'>
            <div className='flex items-baseline text-2xl font-semibold text-indigo-600'>
              {item.name === "Total Usage"
                ? sum
                : item.name === "Average Daily"
                ? avg
                : item.name === "Usage Today"
                ? today
                : item.name === "Average Monthly"
                ? avgmonth
                : item.name === "Highest Daily"
                ? high
                : highmonth
                }
              <span className='ml-2 text-sm font-medium text-gray-500'>
                call(s)
              </span>
            </div>
          </dd>
        </div>
      ))}
    </dl>
  );
}
