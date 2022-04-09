import Filter from "../components/home/Filter";
import Stats from "../components/home/Stats";
// import Graph from "../components/home/Graph";

const Usage = () => {
  return (
    <div className='p-6'>
      <header className='max-w-7xl'>
        <h1 className='text-2xl font-semibold text-gray-900'>Usage Metric</h1>
      </header>
      <Filter />
      <Stats />
      {/* <Graph /> */}
    </div>
  );
};

export default Usage;
