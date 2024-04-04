import { test, expect } from "@playwright/test";
// import * as dotenv from "dotenv";
import { loginUserNew } from "../pages/login.calls";
import { LoginPage } from "../pages/LoginPage";
// import { LoginPage } from "../pages/Login/LoginPage";
// import { DashboardPage } from "../pages/Dashboard/DashboardPage";
// import { loginUserNew, loginUserfailed } from "../pages/Login/login.calls";
// import { assertDashboardElementsVisible } from "../pages/Dashboard/dashboard.calls";

// Load environment variables from .env file
// dotenv.config();

test("Login Test", async ({ page }) => {
  // Navigate to the login page
  const loginPage = new LoginPage(page);
  await page.goto("https://nutrafunnels.com/login/");
  await loginPage.usernameFeild.fill("nfjawad@yopmail.com");
  await loginPage.passwordFeild.fill("nfjawad123");
  // Find and click the signin button using the provided locator
  await loginPage.signinbutton.click();

  // Verify successful login by checking if the dashboard element is visible
  const dashboardVisible = await page.getByRole("link", {
    name: "Nutrafunnels",
    exact: true,
  });
  expect(dashboardVisible).toBeTruthy();
});
