import AuthGuard from "@/app/components/AuthGuard";
import UpdateCar from "@/app/components/forms/UpdateCarForm";
const Page: React.FC = () => {
  return (
    <>
      <AuthGuard>
        <UpdateCar />
      </AuthGuard>
    </>
  );
};

export default Page;
