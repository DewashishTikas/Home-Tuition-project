import { useContext, useEffect, useState } from "react";
import InputComp from "./InputComp";
import { Radio } from "./Radio";
import UploadFile from "./UploadFile";
import { Link, useNavigate } from "react-router";
import sph from "../assets/images/sph.png";
import { FormVacancyContext } from "../../contexts/formVacanciesContext";

export default function Form() {
  const navigate = useNavigate();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobileAlternative, setMobileAlternative] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [category, setCategory] = useState("");
  const [domicile, setDomicile] = useState("");
  const [address, setAddress] = useState("");
  const [referenceName, setReferenceName] = useState("");
  const [question, setAnyQuestion] = useState("");
  const [marksheet, setMarksheet] = useState(null);
  const [resume, setResume] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [sign, setSign] = useState(null);
  const [selectedVacancy] = useContext(FormVacancyContext);

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!selectedVacancy) {
      navigate("/vacancies");
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("Selected Vacancy", selectedVacancy);

    try {
      const response = await fetch("/formSubmit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.status === 200) {
        setSubmitted(true);
      } else {
        console.log("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <section className="mb-5 pb-5 max-w-[800px] mx-auto px-10 sm:px-30 pt-10 bg-gray-100 ">
      <div>
        <img src={sph} alt="SPH" className="w-52 mx-auto" />
      </div>
      <p className="text-xl text-justify">
        Join us and be part of a team where innovation and growth thrive!" or
        "Ready to make a real impact. We are looking for passionate individuals
        to join our team.
      </p>

      <form
        method="POST"
        className="space-y-7"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div>
          <InputComp type={"text"} value={name} setValue={setName}>
            Name*
          </InputComp>
        </div>
        <div>
          <InputComp type={"text"} value={fatherName} setValue={setFatherName}>
            Father's Name*
          </InputComp>
        </div>
        <div>
          <InputComp type={"text"} value={motherName} setValue={setMotherName}>
            Mother's Name*
          </InputComp>
        </div>
        <div>
          <InputComp type={"date"} value={dob} setValue={setDob}>
            Date of Birth*
          </InputComp>
        </div>
        <div>
          <InputComp type={"tel"} value={mobile} setValue={setMobile}>
            Mobile Number*
          </InputComp>
        </div>
        <div>
          <InputComp
            type={"tel"}
            value={mobileAlternative}
            setValue={setMobileAlternative}
            notrequired="true"
          >
            Mobile Number (Alternative)
          </InputComp>
        </div>
        <div>
          <InputComp type={"email"} value={email} setValue={setEmail}>
            Email*
          </InputComp>
        </div>

        <div>
          <Radio
            options={["10th", "12th", "Graduation", "Other"]}
            col={4}
            title={"Qualification"}
            value={qualification}
            setValue={setQualification}
          />
        </div>

        <div>
          <Radio
            options={["UR", "OBC", "SC", "ST", "EWS"]}
            col={5}
            title={"Category"}
            value={category}
            setValue={setCategory}
          />
        </div>
        <div>
          <Radio
            options={["Yes", "No"]}
            col={2}
            title={"MP Domicile"}
            value={domicile}
            setValue={setDomicile}
          />
        </div>
        <div>
          <InputComp type={"text"} value={address} setValue={setAddress}>
            Address*
          </InputComp>
        </div>
        <div>
          <InputComp
            type={"text"}
            value={referenceName}
            setValue={setReferenceName}
            notrequired={"true"}
          >
            Reference Name
          </InputComp>
        </div>
        <UploadFile
          name={"Attach Original Marksheet"}
          value={marksheet}
          setValue={setMarksheet}
        />
        <UploadFile name={"Resume"} value={resume} setValue={setResume} />
        <UploadFile name={"Photo"} value={photo} setValue={setPhoto} />
        <UploadFile name={"Signature"} value={sign} setValue={setSign} />
        <div>
          <InputComp
            notrequired={"true"}
            type={"text"}
            value={question}
            setValue={setAnyQuestion}
          >
            Any Question
          </InputComp>
        </div>
        <div className="space-x-2 flex items-center ">
          {" "}
          <input
            id="terms"
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="accent-blue-600 w-4 h-4 "
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-700 ">
            I agree to all the terms and conditions and if I create any problem
            in the work, SPH UNIVERSE will have no role in it and action will be
            taken.
          </label>
        </div>
        <Link to="/terms&conditons">Read Terms and Condition</Link>
        <button
          tabIndex={-1}
          className={`bg-red-500 py-2 px-7 text-white rounded flex items-center justify-center my-5 mx-auto ${
            submitted ? "bg-green-500 pointer-events-none" : ""
          }`}
        >
          {submitted ? "Submitted Successfully" : "Submit"}
        </button>
      </form>
    </section>
  );
}
