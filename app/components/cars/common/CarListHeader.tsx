import { CarListHeaderProps } from "../../../@types/carTypes";
import LogoutIcon from "../../../assets/svgs/logoutIcon";
import { toast } from "react-toastify";
const CarListHeader: React.FC<CarListHeaderProps> = ({
  handleCreateCar,
  logout,
}) => {
  const handleLogout = () => {
    if (logout) {
      logout();
      toast.success("Logged out successfully");
    } else {
      toast.error("Failed to log out");
    }
  };
  return (
    <>
      <div className="flex text-white justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">My Cars</h1>
          <div
            onClick={handleCreateCar}
            className="px-2 text-md border rounded-full cursor-pointer"
          >
            +
          </div>
        </div>
        <div className="flex items-center gap-x-1" onClick={handleLogout}>
          <button className="text-xs text-white">Logout</button>
          <LogoutIcon />
        </div>
      </div>
    </>
  );
};

export default CarListHeader;
