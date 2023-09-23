import React, { useEffect, useState } from "react";
import RegisterImageMobile from "../../../assets/images/registerImageMobile.png";
import Lady from "../../../assets/icons/lady.png";
import Guy from "../../../assets/icons/guy.png";
import axios from "axios";
import { Button } from "@nextui-org/react";

const RegisterForm = (props) => {
  const [registerForm, setRegisterForm] = useState({
    email: "",
    phoneNumber: "",
    teamName: "",
    groupSize: "",
    projectTopic: "",
    category: "",
  });
  const [inputChecker, setInputChecker] = useState(false);

  const registerFormDetails = {
    email: registerForm.email,
    phone_number: registerForm.phoneNumber,
    team_name: registerForm.teamName,
    group_size: registerForm.groupSize,
    project_topic: registerForm.projectTopic,
    category: registerForm.category,
  };
  const registrationUrl = `${
    import.meta.env.VITE_BASE_API_URL + "/hackathon/registration"
  }`;
  const categoriesUrl = `${
    import.meta.env.VITE_BASE_API_URL + "/hackathon/categories-list"
  }`;

  const [categoryList, setCategoryList] = useState([]);

  //A function to get the data for the category list
  useEffect(() => {
    axios
      .get(categoriesUrl)
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //A function to submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the mutate function to trigger the mutation
    if (
      registerForm.email === "" ||
      registerForm.category === "" ||
      registerForm.groupSize === "" ||
      registerForm.projectTopic === "" ||
      registerForm.teamName === "" ||
      registerForm.phoneNumber === ""
    ) {
      setInputChecker(true);
    } else if (
      registerForm.email !== "" ||
      registerForm.category !== "" ||
      registerForm.groupSize !== "" ||
      registerForm.projectTopic !== "" ||
      registerForm.teamName !== "" ||
      registerForm.phoneNumber !== ""
    ) {
      setInputChecker(false);
      try {
        axios
          .post(registrationUrl, registerFormDetails)
          .then(
            setRegisterForm({
              ...registerForm,
              email: "",
              phoneNumber: "",
              teamName: "",
              groupSize: "",
              projectTopic: "",
              category: "",
            }),
            //this would set the props that was passed to RegisterForm to true in other to open the popup
            props.setIsSubmitted(!props.isSubmitted)
          )
          .catch();
      } catch (error) {
        console.log(error);
      }
    }
  };

  //Form input fields onChange function
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setRegisterForm((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  return (
    <div className="min-w-full min-h-full formBackground p-[4%] flex flex-col gap-8 relative">
      <form className="w-full h-fit flex flex-col gap-10">
        <h2 className="font-clash-display text-[20px] max-w-[200px] md:w-full font-semibold text-strong-pink">
          Register
        </h2>
        <div className="w-full flex lg:hidden justify-center items-center ">
          <img src={RegisterImageMobile} alt="A man sitting on a seat" />
        </div>
        <div>
          <div className="flex items-end gap-2 relative">
            <p className="font-montserrat text-xs lg:text-sm">
              Be part of this movement!
            </p>
            <div className="w-[101px] h-[1px] border-b-1 border-dashed border-strong-pink"></div>
            <div className="flex items-center absolute right-[20%] lg:right-[45%]">
              <img src={Lady} alt="A man sitting on a seat" />
              <img src={Guy} alt="A man sitting on a seat" />
            </div>
          </div>
          <p className="font-montserrat text-xl lg:text-2xl">
            CREATE YOUR ACCOUNT
          </p>
        </div>
        <div className="flex flex-col gap-[15px] lg:gap-[29px]">
          <div className="w-full h-fit flex flex-col lg:flex-row items-center justify-between gap-[15px] lg:gap-0">
            <div className="w-full lg:w-[47%] flex flex-col gap-[11px]">
              <label htmlFor="teamName">Team's name</label>
              <input
                placeholder="Enter the name of your group"
                type="text"
                name="teamName"
                value={registerForm.teamName}
                onChange={handleChange}
                className="h-[47px] p-[11px] w-full border-1 outline-none input lg:text-xs"
              />
              {inputChecker === true && registerForm.teamName === "" && (
                <p className="text-[red] text-xs mt-2">
                  Please fill in your team's name
                </p>
              )}
            </div>
            <div className="w-full lg:w-[47%] flex flex-col gap-[11px]">
              <label htmlFor="phone">Phone</label>
              <input
                placeholder="Enter your phone number"
                type="number"
                name="phoneNumber"
                value={registerForm.phoneNumber}
                onChange={handleChange}
                className="h-[47px] p-[11px] w-full border-1 outline-none input lg:text-xs"
              />
              {inputChecker === true && registerForm.phoneNumber === "" && (
                <p className="text-[red] text-xs mt-2">
                  Please fill in your phone number
                </p>
              )}
            </div>
          </div>
          <div className="w-full h-fit flex flex-col lg:flex-row items-center justify-between gap-[15px] lg:gap-0">
            <div className="w-full lg:w-[47%] flex flex-col gap-[11px]">
              <label htmlFor="teamName">Email</label>
              <input
                placeholder="Enter your email address"
                type="email"
                name="email"
                value={registerForm.email}
                onChange={handleChange}
                className="h-[47px] p-[11px] w-full border-1 outline-none input lg:text-xs"
              />
              {inputChecker === true && registerForm.email === "" && (
                <p className="text-[red] text-xs mt-2">
                  Please fill in your email
                </p>
              )}
            </div>
            <div className="w-full lg:w-[47%] flex flex-col gap-[11px]">
              <label htmlFor="phone">Project Topic</label>
              <input
                placeholder="What is your group project topic"
                type="text"
                name="projectTopic"
                value={registerForm.projectTopic}
                onChange={handleChange}
                className="h-[47px] p-[11px] w-full border-1 outline-none input lg:text-xs"
              />
              {inputChecker === true && registerForm.projectTopic === "" && (
                <p className="text-[red] text-xs mt-2">
                  Please fill in your project topic
                </p>
              )}
            </div>
          </div>
          <div className="w-full h-fit flex flex-row items-center justify-between">
            <div className="w-[64%] lg:w-[47%] flex flex-col gap-[11px]">
              <label htmlFor="teamName">Category</label>
              <select
                name="category"
                onChange={handleChange}
                className="h-[47px] p-[11px] w-full border-1 outline-none input lg:text-xs"
              >
                <option value="">Select your category</option>
                {categoryList.map((item) => {
                  return (
                    <option value={item?.id} className="text-strong-pink">
                      {item?.name}
                    </option>
                  );
                })}
              </select>
              {inputChecker === true && registerForm.category === "" && (
                <p className="text-[red] text-xs mt-2">
                  Please fill in your category
                </p>
              )}
            </div>
            <div className="w-[28%] lg:w-[47%] flex flex-col gap-[11px]">
              <label htmlFor="phone">Group Size</label>
              <select
                name="groupSize"
                onChange={handleChange}
                className="h-[47px] p-[11px] w-full border-1 outline-none input lg:text-xs"
              >
                <option value="">select</option>
                <option  className="text-strong-pink" value="1">1</option>
                <option  className="text-strong-pink" value="2">2</option>
                <option  className="text-strong-pink" value="3">3</option>
                <option  className="text-strong-pink" value="4">4</option>
                <option  className="text-strong-pink" value="5">5</option>
                <option  className="text-strong-pink" value="6">6</option>
                <option  className="text-strong-pink" value="7">7</option>
                <option  className="text-strong-pink" value="8">8</option>
                <option  className="text-strong-pink" value="9">9</option>
                <option  className="text-strong-pink" value="10">10</option>
              </select>
              {inputChecker === true && registerForm.groupSize === "" && (
                <p className="text-[red] text-xs mt-2">
                  Please fill in your category
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full h-fit flex flex-col gap-4">
          <p className="text-xs text-strong-pink italic">
            Please review your registration details before submitting
          </p>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="bg-transparent h-[14px]"
            />
            <p className="text-[10px] lg:text-xs">
              I agreed with the event terms and conditions and privacy policy
            </p>
          </div>
        </div>
        <div className="w-full hidden lg:flex justify-center items-center">
          <Button
            type="button"
            onClick={handleSubmit}
            radius="small"
            className={`btn text-white shadow-lg w-full`}
          >
            <p className="font-montserrat">Register Now</p>
          </Button>
        </div>
        <div className="w-full flex lg:hidden justify-center items-center">
          <Button
            type="button"
            onClick={handleSubmit}
            radius="small"
            className={`btn text-white shadow-lg w-[172px]`}
          >
            <p className="font-montserrat">Submit</p>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
