import { CarListHeaderProps } from "../../../@types/carTypes";

const EmptyState:React.FC<CarListHeaderProps> = ({handleCreateCar}) => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p className="text-white text-4xl font-semibold mb-7">
          Your car list is empty.
        </p>
        <button
          onClick={handleCreateCar}
          className="px-6 py-2 bg-[#2BD17E] text-white font-medium rounded-md hover:bg-green-700"
        >
          Add a new car
        </button>
      </div>
    </>
  );
};

export default EmptyState;
