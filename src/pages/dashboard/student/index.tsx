import MainLayout from "@/components/common/layouts/main/MainLayout";
import StudentScreen from "@/components/student/StudentScreen";
import { type NextPageWithLayout } from "@/types/page";
import { useSession } from "next-auth/react";

const StudentPage: NextPageWithLayout = () => {
  const { data: session } = useSession();

  return <StudentScreen session={session} />;
};

export default StudentPage;

StudentPage.getLayout = (page) => {
  return <MainLayout title="Student Dashboard">{page}</MainLayout>;
};
