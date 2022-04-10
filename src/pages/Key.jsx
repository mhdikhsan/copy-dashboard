import List from "../components/key/List";
import Registration from "../components/key/Registration";

const Key = () => {
  return (
    <div className='p-6'>
      <header className='max-w-7xl'>
        <h1 className='text-2xl font-semibold text-gray-900'>Key Management</h1>
      </header>
      <Registration />
      <List />
    </div>
  );
};

export default Key;
