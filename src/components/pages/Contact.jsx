import { Element } from "react-scroll";

function Contact() {
  return (
    <Element name="contact">
      <section className="w-full h-full bg-[#0C1328] text-white px-[20px] ">
        <div className="text-center">
          <h2 className="font-script font-bold text-white text-[40px] ">
            Contact Me
          </h2>
        </div>
        <form
          //   onSubmit={handleSubmit}
          className="max-w-lg mx-auto mt-[84px] pb-[84px] bg-[#0C1328] rounded-lg"
        >
          {/* Name & Email */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              //   value={formData.name}
              //   onChange={handleChange}
              className="w-full font-script font-medium  text-[14px] p-3 rounded-md border border-gray-500 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              //   value={formData.email}
              //   onChange={handleChange}
              className="w-full font-script font-medium  text-[14px] p-3 rounded-md border border-gray-500 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Box */}
          <div className="relative mt-[54px]">
            <textarea
              name="message"
              placeholder="Message"
              //   value={formData.message}
              //   onChange={handleChange}
              className="w-full font-script font-medium  text-[14px] h-40 p-4 rounded-md border border-gray-500 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="absolute font-open-sans font-bold  text-[17px] bottom-3 right-3 bg-[#00DC82] text-black  px-4 py-2 rounded-md"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </Element>
  );
}

export default Contact;
