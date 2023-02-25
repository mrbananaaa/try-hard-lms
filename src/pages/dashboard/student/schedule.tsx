import MainLayout from "@/components/common/layouts/main/MainLayout";
import { type NextPageWithLayout } from "@/types/page";

const SchedulePage: NextPageWithLayout = () => {
  return <div>SchedulePage</div>;
};

export default SchedulePage;

SchedulePage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
