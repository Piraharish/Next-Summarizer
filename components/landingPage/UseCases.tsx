import {
  FaBookOpenReader,
  FaBuildingColumns,
  FaChalkboardUser,
  FaPencil,
  FaRegNewspaper,
  FaUserGraduate,
} from "react-icons/fa6";
import { UseCard } from "../UseCard";

const UseCases = () => {
  return (
    <section id="usecases">
      <div>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-extrabold mt-3 mb-4">
            Who is SUMAI for?
          </h2>
          <p className="text-lg text-muted-foreground">
            SUMAI is a summarizing tool designed for students, writers,
            teachers, institutions, journalists, and any internet user who needs
            to quickly understand the essence of lengthy content.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <UseCard
            icon={<FaBookOpenReader className="w-9 h-9" />}
            title="Anyone with access to the Internet"
            description="This is for anyone who just needs to get the gist of a long article. You can read this summary, then go read the original article if you want to."
          />
          <UseCard
            icon={<FaUserGraduate className="w-9 h-9" />}
            title="Students"
            description="This is for students studying for exams, who are overwhelmed by information overload. This tool will help them summarize information into a concise, easy to digest piece of text."
          />
          <UseCard
            icon={<FaPencil className="w-9 h-9" />}
            title="Writers"
            description="This is for anyone who writes frequently, and wants to quickly summarize their articles for easier writing and easier reading."
          />
          <UseCard
            icon={<FaChalkboardUser className="w-9 h-9" />}
            title="Teachers"
            description="This is for teachers who want to summarize a long document or chapter for their students."
          />
          <UseCard
            icon={<FaBuildingColumns className="w-9 h-9" />}
            title="Institutions"
            description="This is for corporations and institutions who want to condense a piece of content into a summary that is easy to digest for their employees/students."
          />
          <UseCard
            icon={<FaRegNewspaper className="w-9 h-9" />}
            title="Journalists"
            description="This is for journalists who need to summarize a long article for their newspaper or magazine."
          />
        </div>
      </div>
    </section>
  );
};

export default UseCases;
