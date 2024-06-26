import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashboardComp from "../components/DashboardComp";
import Expenses from "../components/Expenses";
import CreateProject from "./CreateProjects";
import Tasks from "../components/Tasks";
import CreateTask from "./CreateTask";
import DashProjectManager from "../components/DashProjectManager";
import Income from "../components/Income";
import ApproveSupplier from "../components/ApproveSupplier";
import DashpproveSupplier from "../components/DashpproveSupplier";
import DashMyApplication from "../components/DashMyApplication";
import DashFinance from "../components/DashFinance";
import DashTasks from "../components/DashTasks";
import Notification from "../components/Notification";
import PostActivity from "./PostActivity";
import DashboardManager from "../components/DashboardManger";
import CardBuy from "./CardBuy";
import Report from "../components/Report";
import ProjectReport from "../components/ProjectReport";
import PaymentComponent from "./PaymentComponent";
import MyPayment from "../components/MyPayment";
import NotifiContructor from "../components/NotifiConstructor";
import ApprovePayment from "../components/ApprovePayment";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === "profile" && <DashProfile />}
      {/* posts... */}
      {tab === "projects" && <DashPosts />}
      {/* users */}
      {tab === "users" && <DashUsers />}
      {/* dashboard comp */}
      {tab === "dash" && <DashboardComp />}
      {tab === "create-expense" && <Expenses />}
      {tab === "create-budget" && <Income />}
      {tab === "create-proejct" && <CreateProject />}
      {tab === "create-task" && <CreateTask />}
      {tab === "tasks" && <Tasks />}
      {tab === "project" && <DashProjectManager />}
      {tab === "approve" && <ApproveSupplier />}
      {tab === "approve-supplier" && <DashpproveSupplier />}
      {tab === "myapplication" && <DashMyApplication />}
      {tab === "audit" && <DashFinance />}
      {tab === "task" && <DashTasks />}
      {tab === "post_activity" && <PostActivity />}
      {tab === "dashs" && <DashboardManager />}
      {tab === "buy" && <CardBuy />}
      {tab === "report" && <Report/>}
      {tab === "see_report" && <ProjectReport/>}
      {tab === "payment" && <PaymentComponent/>}
      {tab === "mypayment" && <MyPayment/>}
      {tab === "notifconstructor" && <NotifiContructor/>}
      {tab === "approve-payment" && <ApprovePayment/>}
    </div>
  );
}
