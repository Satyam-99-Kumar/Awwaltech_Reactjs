import { useState } from "react";
import style from "./CareerDetailsDesc.module.scss";

function CareerDetailForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [company, setCompany] = useState("");
  const [ctc, setCtc] = useState("");
  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log(resume);
  }

  return (
    <div className={style.dform}>
      <h2>Apply Form</h2>
      <p>
        Wish to connect with us? We will be happy to hear from you. Fill this
        form so we can learn more about your requirements.
      </p>

      <form>
        <div className={style.inputGroup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.inputGroup}>
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className={style.inputGroup}>
          <input
            type="text"
            placeholder="Current Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            placeholder="Current CTC"
            value={ctc}
            onChange={(e) => setCtc(e.target.value)}
          />
        </div>
        <div className={style.fullLength}>
          <input
            type="text"
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div className={style.fullLength}>
          <textarea
            placeholder="Message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={style.btnGroup}>
          <div className={style.applyBtn}>
            <button onClick={submitForm}>Apply</button>
          </div>
          <div className={style.uploadBtn}>
            <input type="file" id="actual-btn" value={resume} onChange={(e) => setResume(e.target.value)} />
            <label for="actual-btn">
              { 
                resume.length > 0 
                ? resume.length > 100
                  ? `....${resume.substr(resume.length - 100)}`
                  : resume
                : "Upload resume" 
              }
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CareerDetailForm;
