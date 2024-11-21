import * as fs from "node:fs/promises";
import path from "node:path";

const projectPath = path.resolve("db", "project.json");

export async function projectList() {
  const project = await fs.readFile(projectPath, "utf-8");
  return JSON.parse(project);
}
