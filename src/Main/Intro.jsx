import React from "react";

function Intro() {
  return (
    <section className="w-full h-full" id="Home">
      <div
        className="h-full"
        style={{
          backgroundColor: "#ECF0EF",
        }}
      >
        <div className="flex flex-col items-center justify-end h-1/2">
          <h1 className="text-5xl font-serif">TextTailor</h1>
          <p className="text-2xl font-serif">A Website Content Optimizer</p>
        </div>

        <div className="flex flex-col items-center justify-end h-1/2">
          <button className="border-none focus:border-none bg-gray-300 hover:bg-gray-400 rounded-2xl p-4 mb-12">
            <p className="text-4xl">Get Started</p>
            {/* <ion-icon name="arrow-down-outline" style={{height:"50px",width:"50px"}}></ion-icon> */}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Intro;
