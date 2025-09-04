import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PpostJob = () => {

    const navigate = useNavigate()
    const {user} = useAuth()

  const FromHandel = (e) => {
    e.preventDefault();

    const form = e.target;

    const jobData = {
      title: form.title.value,
      location: form.location.value,
      jobType: form.jobType.value,
      category: form.category.value,
      applicationDeadline: form.applicationDeadline.value,
      company: form.company.value,
      status: form.status.value,
      hr_email: user?.email,
      hr_name: form.hr_name.value,
      url: form.url.value,
      description: form.description.value,
      requirements: [form.requirements.value], // array
      responsibilities: [form.responsibilities.value], // array
      salary: {
        min: form.minSalary.value,
        max: form.maxSalary.value,
      },
    };

    console.log(jobData);
    // এখানে axios দিয়ে backend এ পাঠাতে পারবে

    fetch(`http://localhost:3000/jobdata`, {
        method:'POST',
        headers:{ "Content-Type": "application/json", },
        body:JSON.stringify(jobData)
    })
    .then(res =>res.json())
    .then( reuslt => {
        if(reuslt){
            alert("Job post successfull")
        }
        navigate('/')
    })
  };

  return (
    <div>
      <div className=" bg-base-200 ">
        <div className="mx-auto w-[80%] ">
          <div className="card bg-base-100 w-[80%] mx-auto shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={FromHandel}>
                <fieldset className="fieldset">
                  <div className="flex">
                    <div className="mx-1 flex-1">
                      <label className="label">title</label>
                      <input name="title" type="text" className="input w-full" placeholder="title" />
                    </div>
                    <div className="mx-1 flex-1">
                      <label className="label">location</label>
                      <input name="location" type="text" className="input w-full" placeholder="location" />
                    </div>
                    <div className="mx-1 flex-1">
                      <label className="label">jobType</label>
                      <input name="jobType" type="text" className="input w-full" placeholder="Hybrid, full-time, remote" />
                    </div>
                  </div>

                  <div className="flex items-end w-full">
                    <div className="mx-1 flex-1 ">
                      <label className="label">category</label>
                      <input name="category" type="text" className="input w-full" placeholder="category" />
                    </div>
                    <div className="mx-1 flex-1">
                      <label className="label">applicationDeadline</label>
                      <input name="applicationDeadline" type="date" className="input w-full" />
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mx-1 flex-1">
                      <label className="label">company</label>
                      <input name="company" type="text" className="input w-full" placeholder="company" />
                    </div>
                    <div className="mx-1 flex-1">
                      <label className="label">status</label>
                      <input name="status" type="text" className="input w-full" placeholder="active" />
                    </div>
                  </div>

                  <div className="flex">
                   
                    <div className="mx-1 flex-1">
                      <label className="label">hr_name</label>
                      <input name="hr_name" type="text" className="input w-full" placeholder="hr_name" />
                    </div>
                    <div className="mx-1 flex-1">
                      <label className="label">Url link</label>
                      <input name="url" type="url" className="input w-full" placeholder="Must be valid URL" />
                    </div>
                  </div>

                  <div className="flex items-end">
                    <div className="mx-1 flex-1">
                      <fieldset className="fieldset">
                        <legend className="fieldset-legend">requirements</legend>
                        <select name="requirements" className="select w-full">
                          <option disabled>requirements</option>
                          <option>JavaScript</option>
                          <option>React</option>
                          <option>Node.js</option>
                          <option>MongoDB</option>
                        </select>
                      </fieldset>
                    </div>

                    <div className="mx-1 flex-1">
                      <fieldset className="fieldset">
                        <legend className="fieldset-legend">responsibilities</legend>
                        <select name="responsibilities" className="select w-full">
                          <option disabled>responsibilities</option>
                          <option>Oversee project execution</option>
                          <option>Manage team workflows</option>
                          <option>Ensure timely project delivery</option>
                        </select>
                      </fieldset>
                    </div>

                    <div className="mx-1 flex-1 ">
                      <fieldset className="fieldset">
                        <label className="label">Min Salary</label>
                        <input name="minSalary" type="text" className="input w-full" placeholder="min" />
                      </fieldset>
                    </div>
                    <div className="mx-1 flex-1">
                      <fieldset className="fieldset">
                        <label className="label font-bold">Max Salary</label>
                        <input name="maxSalary" type="text" className="input w-full" placeholder="Max" />
                      </fieldset>
                    </div>
                  </div>

                  <div>
                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">description</legend>
                      <textarea name="description" className="textarea h-24 w-full" placeholder="description"></textarea>
                    </fieldset>
                  </div>

                  <button type="submit" className="btn btn-neutral mt-4">Submit</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PpostJob;
