"use client";

const ComingSoon = ({ imgUrl, title, subtitle, index }) => (
  <div className="mx-auto max-w-7xl" style={{ color: "white", minHeight: "100vh"}}>
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="mb-8 text-center">
        <img src="/icon_white.png" alt="N17R" className="w-20 mx-auto" />
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">nFactorial Incubator 2024</h2>
      </div>
      <div className="mt-2 text-xl text-center md:text-3xl">Coming soon</div>
    </div>
  </div>
);

export default ComingSoon;



