import D from "./D";
import DReverse from "./DReverse";

const Loader = () => {
  return (
    <section className="h-full w-full flex items-center justify-center gap-[114px]">
      <div className="animate-move-right">
        <D />
      </div>
      <div className="animate-move-left">
      <DReverse />
      </div>
    </section>
  );
};

export default Loader;
