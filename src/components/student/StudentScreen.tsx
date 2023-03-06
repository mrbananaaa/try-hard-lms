import { type Session } from "next-auth";
import { type FC } from "react";
import SectionTitle from "../common/text/SectionTitle";
import EventCard from "./EventCard";
import Header from "./Header";
import WeeklyAssignment from "./WeeklyAssignment";
import WeeklyInfo from "./WeeklyInfo";
import WeeklyStats from "./WeeklyStats";

interface IStudentScreen {
  session: Session | null;
}

const StudentScreen: FC<IStudentScreen> = ({ session }) => {
  return (
    <div className="">
      {/* header */}
      <Header userInfo={session} />

      {/* content */}
      <div className="mt-10 flex flex-col lg:flex-row lg:space-x-3">
        {/* left-section */}
        <div className="lg:flex-[7]">
          {/* weekly stats */}
          <section className="flex flex-wrap justify-center gap-3 md:flex-nowrap md:gap-y-0">
            <WeeklyStats title="GPA" score="3.4" color="black" />
            <WeeklyStats title="Course" score="7" color="green" />
            <WeeklyStats title="Assignment" score="5" color="orange" />
            <WeeklyStats title="Submitted" score="2" color="yellow" />
          </section>

          {/* weekly assignments */}
          <section>
            <SectionTitle
              title="Weekly Assignment!"
              subtitle="Task you must complete this week, do or die!"
            />

            <div className="flex flex-col space-y-3">
              {(
                [
                  [
                    "Framer Motion",
                    "Create a responsive website with reactjs-ts and animate it using framer motion library and try to deploy it on vercel.",
                    "26/07",
                    true,
                  ],
                  [
                    "React Form Hooks",
                    "Create an social media auth website with react-form-hooks library and validate it using zod library",
                    "28/07",
                    false,
                  ],
                  [
                    "Docker",
                    "Create a simple NextJs page and try to deploy it with docker using multi staging deployment!",
                    "29/07",
                    false,
                  ],
                  [
                    "Tailwind Css",
                    "Create a beautiful react website with Tailwindcss",
                    "29/07",
                    false,
                  ],
                ] as const
              ).map(([title, description, date, oneDay]) => (
                <WeeklyAssignment
                  key={title}
                  title={title}
                  description={description}
                  date={date}
                  oneDay={oneDay}
                />
              ))}
            </div>
          </section>
        </div>

        {/* right-section */}
        <div className="pt-10 lg:flex-[3] lg:pt-0">
          {/* weekly info */}
          <WeeklyInfo />

          {/* upcoming event */}
          <section className="pt-2">
            <SectionTitle
              title="Upcoming Event"
              subtitle="Meeting you need to join"
            />

            <div className="flex flex-nowrap space-x-3 overflow-x-scroll pb-4 scrollbar lg:max-w-[21rem]">
              {(
                [
                  ["React Native", "Jul 25 at 09:50 PM", true],
                  ["Tailwindcss", "Jul 25 at 09:50 PM", false],
                  ["Nextjs", "Jul 25 at 09:50 PM", false],
                ] as const
              ).map(([title, date, ongoing]) => (
                <EventCard
                  key={date}
                  title={title}
                  date={date}
                  ongoing={ongoing}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StudentScreen;
