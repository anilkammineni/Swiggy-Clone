import RestaurantItemsList from "./RestaurantItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const { title } = data;

  const downSymbol = "⬇️";
    const upSymbol = "⬆️";
    
    const handleClick = () => {
        setShowIndex();
    }

  return (
    <div>
      {/** Accordio Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between hover:cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({data.itemCards.length})
          </span>
          <span>{showItems ? upSymbol : downSymbol}</span>
        </div>

        {showItems && <RestaurantItemsList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
