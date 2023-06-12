import React from "react";
import john from "../../assets/hero-section/john.svg";
import mary from "../../assets/hero-section/mary.svg";
import cole from "../../assets/hero-section/cole.svg";
import susan from "../../assets/hero-section/susan.svg";

function BookAppointment() {
  const doctors = [
    {
      id: 1,
      name: "Dr. John Cole",
      img: john,
      speciality: "Cardiologist",
      hospital: "Apollo Hospital",
    },
    {
      id: 2,
      img: mary,
      name: "Meredith Grey",
      speciality: "General Surgeon",
      hospital: "John Hopkins Hospital",
    },
    {
      id: 3,
      img: cole,
      name: "Will Sloane",
      speciality: "Neurologist",
      hospital: "Stanford Hospital",
    },
    {
      id: 4,
      img: susan,
      name: "Dr. Susan Routledge",
      speciality: "Pediatrician",
      hospital: "Kincaid General Hospital",
    },
  ];
  return (
    <div className="flex items-start justify-between pr-[6.35vw] pl-[3.54vw] ">
      <div className="w-full">
        <h1 className="font-bold text-2xl text-[#08299B] mb-[8vh] ">
          QUALIFIED DOCTORS
        </h1>
        <div className="flex items-center flex-wrap gap-x-[9.69vw] gap-y-[8.89vh]  ">
          {doctors.map((doctor) => (
            <div
              className="flex items-center flex-col font-medium "
              key={doctor.id}
            >
              <img
                src={doctor.img}
                alt=""
                className="w-[9.53vw] h-[9.53vw] mb-[2.31vh] "
              />
              <h4 className="text-[#08299B] ">{doctor.name}</h4>
              <h5 className="text-sm text-[#837D7D] ">{doctor.speciality}</h5>
              <h6 className="text-sm text-[#837D7D] ">{doctor.hospital}</h6>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center flex-col w-full gap-[3.43vh] ">
        <h1 className="font-bold text-2xl text-[#08299B] ">
          Book an appointment
        </h1>
        <form
          action=""
          className="w-full flex items-center flex-col gap-[3.43vh]"
        >
          <input
            type="text"
            placeholder="Address"
            className="w-full bg-[#E0E4EC] h-[7.46vh] rounded-lg pl-[1.45vw] "
          />
          <select
            name=""
            id=""
            className="w-full bg-[#E0E4EC] h-[7.46vh] rounded-lg pl-[1.45vw] "
          >
            <option value="">Choose Hospital</option>
          </select>
          <select
            name=""
            id=""
            className="w-full bg-[#E0E4EC] h-[7.46vh] rounded-lg pl-[1.45vw] "
          >
            <option value="">Choose Department</option>
          </select>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-[#E0E4EC] h-[7.46vh] rounded-lg pl-[1.45vw] "
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-[#E0E4EC] h-[7.46vh] rounded-lg pl-[1.45vw] "
          />
          <input
            type="date"
            placeholder="Address"
            className="w-full bg-[#E0E4EC] h-[7.46vh] rounded-lg pl-[1.45vw] "
          />
          <input
            type="time"
            placeholder="Address"
            className="w-full bg-[#E0E4EC] h-[7.46vh] rounded-lg pl-[1.45vw] "
          />
          <button
            type="submit"
            className="bg-[#08299B] w-full h-[7.46vh] rounded-xl hover:bg-opacity-90 text-white "
          >
            Book Appointment Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;
