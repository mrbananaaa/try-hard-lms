import MainLayout from "@/components/common/layouts/main/MainLayout";
import { type NextPageWithLayout } from "@/types/page";

const CoursePage: NextPageWithLayout = () => {
  return <div>CoursePage</div>;
};

export default CoursePage;

CoursePage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
