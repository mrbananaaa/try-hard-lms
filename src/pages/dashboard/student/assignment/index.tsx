import MainLayout from "@/components/common/layouts/main/MainLayout";
import { type NextPageWithLayout } from "@/types/page";

const AssignmentPage: NextPageWithLayout = () => {
  return <div>AssignmentPage</div>;
};

export default AssignmentPage;

AssignmentPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
