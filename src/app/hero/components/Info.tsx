const Info = ({ title = "Toms Enģelis" }) => {
  return (
    <>
      <div data-id="hoverable" className="font-bold relative text-6xl z-10">
        {title}
      </div>
      <div className="italic relative text-xl z-10 mt-4">
        Full-Stack Web Developer / Engineer
      </div>
      <div>
        <button className="mt-8 text-white font-bold text-xl bg-gradient-to-r from-[#283365] from-50% to-[#ff9100] inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:from-red-400 hover:to-yellow-500 h-10 px-4 py-2">
          Contact me
        </button>
      </div>
    </>
  );
};

export default Info;
