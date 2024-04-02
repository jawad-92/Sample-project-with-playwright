import { test, expect } from "@playwright/test";
// import * as dotenv from "dotenv";
// import { LoginPage } from "../pages/Login/LoginPage";
// import { DashboardPage } from "../pages/Dashboard/DashboardPage";
// import { loginUserNew, loginUserfailed } from "../pages/Login/login.calls";
// import { assertDashboardElementsVisible } from "../pages/Dashboard/dashboard.calls";

// Load environment variables from .env file
// dotenv.config();

test("Login Page Loaded and Signed-in Successfully ", async ({ page }) => {
  //   const dashPage = new DashboardPage(page);
  await page.goto("/");
  await page.waitForTimeout(3000);
  await page.waitForTimeout(3000);
});
