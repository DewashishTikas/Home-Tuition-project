import React, { useEffect, useState } from "react";
import InputComp from "./InputComp";
import deleteIcon from "../assets/images/deleteicon.svg";
import Button from "./Button";
import { useNavigate } from "react-router";

const AdminPost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState();
  const [message, setMessage] = useState("");
  const [vancancies, setVacancies] = useState([]);
  useEffect(async () => {
    try {
      const response = await fetch("/profile");
      if (response.status !== 200) {
        console.log("Unauthorized access");
        navigate("/adminLogin");
        return;
      }
    } catch (err) {
      console.log(object);
    }
  });
  useEffect(async () => {
    (async () => {
    try {
      const response = await fetch("");
      const data = response.json();
      setVacancies(data);
    } catch (err) {
      console.log(object);
    }
    })();
  }, [post]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post }),
      });
      setTimeout(() => {
        setMessage("");
      }, 5000);
      const data = await response.json();
      if (response.status === 200) {
        setMessage(data.message || "Post Added");
      } else {
        setMessage(data.error || "Something went wrong");
      }
    } catch (err) {
      console.log(object);
    }
  }

  async function handleDelete(vancancyId) {
   try {
     const response = await fetch("", {
       method: "Delete",
       headers: {
         "Content-Type": "application/json",
       },
       body: { vancancyId },
     });
     const data = response.json();
     if (response.status === 200)
       setMessage(data.message || "Vacancy Deleted Successfully");
   } catch (err) {
     console.log(object);
   }
  }

  return (
    <>
      <section className="w-4/5 mx-auto ">
        <form
          className="my-10"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <InputComp value={post} setValue={setPost} type={"text"}>
            Enter Post
          </InputComp>
          <Button css="my-5">Add</Button>
        </form>
        {message && <p>{message}</p>}
        <div className="mt-10">
          <h1 className="text-2xl my-3">Vacancies</h1>
          {vancancies.map((vacancy) => {
            return (
              <>
                <div className="flex justify-between text-lg" key={vacancy.id}>
                  <p>{vacancy.name}</p>
                  <button
                    onClick={(e) => {
                      handleDelete(vacancy.id);
                    }}
                  >
                    <img src={deleteIcon} className="h-10 w-10" alt="" />
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AdminPost;
