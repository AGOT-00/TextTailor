import React from "react";

function Contact() {
  return (
    <section className="w-full h-full" id="Contact">
      <div
        className="h-full"
        style={{
          backgroundColor: "#D2ECF8",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center ">
          <h1 className="text-5xl text-bold mb-8">Contact us</h1>
          <div className="flex flex-row mb-8">
            <fieldset className="flex flex-col">
              <label>Your Name : </label>
              <input type="text" className="ml-8 mr-8 h-8 rounded "></input>
              <label>Email : </label>
              <input
                type="text"
                className="ml-8 mr-8 h-8 rounded w-3/4 mt-8"
              ></input>
              <div></div>
            </fieldset>
          </div>
          <div className="flex flex-row mt-8">
            <input
              type="text"
              className="w-72 h-32 ml-8 mr-8 w-3/4 rounded"
            ></input>
          </div>
          {/* <p className="text-3xl pl-16 pr-16">
          Our Enthusiasts Web DEV Team is a group of skilled and passionate
          developers who are eager to integrate the latest AI-based technologies
          into our web development projects. We strive to create innovative and
          intelligent web solutions that can truly make a difference. Whether
          it's a small-scale website or a large-scale application, we approach
          each task with enthusiasm and a commitment to excellence. If you're
          looking for a team of web developers who are not afraid to take risks
          and who are eager to experiment with the latest AI-based techniques,
          then look no further than Enthusiasts Web DEV Team.
        </p> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
