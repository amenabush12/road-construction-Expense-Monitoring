import { Alert, Button, Select, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateProject from "./CreateProjects";
import { Link } from "react-router-dom";

export default function UpdatePost() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "",
    endDate: "",
    location: "",
    tasks: [
      {
        name: "",
        description: "",
        assignedTo: "",
        dueDate: "",
        status: "NotStarted",
      },
    ],
  });
  const [publishError, setPublishError] = useState(null);
  const { projectId } = useParams();

  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [availableManagers, setAvailableManagers] = useState([]);
  const [selectedManager, setSelectedManager] = useState(null);

  useEffect(() => {
    const getManagers = async () => {
      try {
        const res = await fetch("/api/user/getusers");
        const data = await res.json();
        if (res.ok) {
          const managers = data.users.filter((user) => user.isManager);
          setAvailableManagers(managers);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getManagers();
  }, []);

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const res = await fetch(
          `/api/project/getprojects?projectId=${projectId}`
        );
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
          return;
        }
        if (res.ok) {
          setPublishError(null);
          setFormData(data.projects[0]);
        }
      };

      fetchPost();
    } catch (error) {
      console.log(error.message);
    }
  }, [projectId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const validTasks = formData.tasks.filter(
      //   (task) => task.name.trim() !== ""
      // );
      const projectDataWithManager = {
        ...formData,
        manager: { _id: selectedManager },
      };

      console.log("Project Data:", projectDataWithManager);
      const res = await fetch(
        `/api/project/updateproject/${projectId}/${currentUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(projectDataWithManager),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/dashboard?tab=projects`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const handleTaskChange = (index, field, value) => {
  //   const updatedTasks = [...formData.tasks];
  //   updatedTasks[index][field] = value;
  //   setFormData({ ...formData, tasks: updatedTasks });
  // };

  // const addTask = () => {
  //   setFormData({
  //     ...formData,
  //     tasks: [
  //       ...formData.tasks,
  //       {
  //         name: "",
  //         description: "",
  //         status: "NotStarted",
  //       },
  //     ],
  //   });
  // };

  // const removeTask = (index) => {
  //   const updatedTasks = [...formData.tasks];
  //   updatedTasks.splice(index, 1);
  //   setFormData({ ...formData, tasks: updatedTasks });
  // };

  return (
    <div className="min-h-screen mt-20 lg:mr-44 text-white">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1 lg:mb-44 ">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Road Con
            </span>
            Monitor
          </Link>
          <p className="text-md mt-5">
            This is a road construction Expense Monitoring System for a
            contractor project. You can create project up with all fields .
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            
              <Label value="name" />
              <TextInput
                type="text"
                placeholder="name"
                required
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <Label value="description" />
              <TextInput
                type="text"
                placeholder="description"
                required
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
              <Label value="location" />
              <TextInput
                type="text"
                placeholder="location"
                required
                id="location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
              <Label value="start date" />
              <TextInput
                type="date"
                placeholder="start date"
                required
                id="endDate"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
              />
              <Label value="end date" />
              <TextInput
                type="date"
                placeholder="end date"
                required
                id="endDate"
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
              />
                <Label value="status" />
                <Select
                type="text"
                className="text-white"
                id="status"
                value={formData.status}
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    status: e.target.value
                  }))
                }
              >
              <option value="Pending">Pending</option>
              <option value="InProgress">InProgress</option>
              <option value="Completed">Completed</option>
            </Select>
            <Label value="manager" />
            <Select
              className="text-white"
              label="select manager"
              id="manager"
              value={selectedManager || ""}
              onChange={(e) => setSelectedManager(e.target.value)}
            >
              <option value="" disabled>
                Choose a Manager
              </option>
              {availableManagers.map((manager) => (
                <option key={manager._id} value={manager._id}>
                  {manager.username}
                </option>
              ))}
            </Select>
            <Button type="submit" gradientDuoTone="purpleToPink">
              Publish
            </Button>

            {publishError && <p className="text-red-500">{publishError}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
