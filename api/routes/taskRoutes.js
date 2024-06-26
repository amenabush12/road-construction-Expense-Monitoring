import express from "express";
import {
  createSubTask,
  createTask,
  dashboardStatistics,
  deleteRestoreTask,
  duplicateTask,
  getTask,
  getTasks,
  postTaskActivity,
  trashTask,
  updateTask,
  getNoticeData,
  handleChangeStage,
  deleteTask,
} from "../controllers/taskController.js";
// import { isAdminRoute, protectRoute } from "../middlewares/authMiddlewave.js";

const router = express.Router();

router.post("/create", createTask);
router.post("/duplicate/:id", duplicateTask);
router.post("/activity/:id", postTaskActivity);

router.get("/dashboard", dashboardStatistics);
router.get("/", getTasks);
router.get("/:id", getTask);
router.get("/notices", getNoticeData);

router.put("/create-subtask/:id",createSubTask);
router.put("/update/:id",  updateTask);
router.put("/:id",  trashTask);

router.delete(
  "/delete-restore/:id?",
  deleteRestoreTask
);
router.delete('/task/:id', deleteTask);
router.put('/tasks/:taskId/stage', handleChangeStage);

export default router;
