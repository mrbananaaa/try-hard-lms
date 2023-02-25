import MainLayout from "@/components/common/layouts/main/MainLayout";
import StudentScreen from "@/components/student/StudentScreen";
import { type NextPageWithLayout } from "@/types/page";

const StudentPage: NextPageWithLayout = () => {
  return <StudentScreen />;
};

export default StudentPage;

StudentPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
