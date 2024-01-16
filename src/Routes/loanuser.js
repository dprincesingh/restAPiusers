import express from "express";
import {
  handlegetAllusers,
  handlegetusersbyId,
  handleCreateUser,
  handleDeletusersbyId,
  handleUpdateusersbyId,
} from "../Controllers/loanuser.js";

const router = express.Router();

router.route("/").get(handlegetAllusers).post(handleCreateUser);
router
  .route("/:id")
  .get(handlegetusersbyId)
  .patch(handleUpdateusersbyId)
  .delete(handleDeletusersbyId);

export default router;
