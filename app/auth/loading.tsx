import { FadeLoader } from "react-spinners";

const loading = () => {
  return (
    <section className="h-page flex items-center justify-center">
      <FadeLoader color="#6d28d9" />
    </section>
  );
};

export default loading;
