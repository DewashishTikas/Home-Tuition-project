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
  useEffect( () => {
    try {
      (async () => {
        const response = await fetch("http://localhost:8000/admin", {
          credentials: "include",
        });
        if (response.status !== 200) {
          console.log("Unauthorized access");
          navigate("/adminLogin");
        }
      })()
    } catch (err) {
      console.log(err);
    }
  },[]);
  useEffect( () => {
    (async () => {
    try {
      const response = await fetch("http://localhost:8000/user/vacancy");
      const { data } = await response.json();
     
      setVacancies(data);
    } catch (err) {
      console.log(err);
    }
    })();
  }, [post]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/admin/vacancy", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post }),
      });
      if (response.status === 403) {
        console.log("Unauthorized access");
        navigate("/adminLogin");
      }
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
      console.log(err);
    }
  }

  async function handleDelete(vacancyId) {
    try {
      const response = await fetch("http://localhost:8000/admin/vacancy", {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ vacancyId }),
      });
      if (response.status === 403) {
        console.log("Unauthorized access");
        navigate("/adminLogin");
      }
      const data = await response.json();
      if (response.status === 200)
        setMessage(data.message || "Vacancy Deleted Successfully");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <section className="w-4/5 mx-auto ">
      <h1 className="text-center text-4xl font-bold my-6">Add or Remove Post</h1>
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
