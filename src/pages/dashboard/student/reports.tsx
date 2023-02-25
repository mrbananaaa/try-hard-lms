import MainLayout from "@/components/common/layouts/main/MainLayout";
import { type NextPageWithLayout } from "@/types/page";

const ReportsPage: NextPageWithLayout = () => {
  return <div>ReportsPage</div>;
};

export default ReportsPage;

ReportsPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
