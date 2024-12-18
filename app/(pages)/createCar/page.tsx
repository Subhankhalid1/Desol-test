import AuthGuard from "@/app/components/AuthGuard";
import CreateCar from "@/app/components/forms/CreateCarForm";
const Page: React.FC = () => {
  return (
    <>
      <AuthGuard>
        <CreateCar />
      </AuthGuard>
    </>
  );
};

export default Page;
