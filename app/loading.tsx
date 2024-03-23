import { FadeLoader } from "react-spinners";

const loading = () => {
  return (
    <section className="h-[calc(100vh-5rem)] flex items-center justify-center">
      <FadeLoader color="#6d28d9" />
    </section>
  );
};

export default loading;
