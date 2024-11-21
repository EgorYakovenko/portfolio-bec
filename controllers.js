import { projectList } from "./services.js";

export const getAllProject = async (req, res) => {
  const result = await projectList();
  res.json(result);
};
