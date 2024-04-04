import { expect } from "@playwright/test";
import { LoginPage } from "./LoginPage";

export async function loginUserNew(
  page: any,
  username: string,
  password: string
) {
  const loginPage = new LoginPage(page);

  await page.goto("/");
  await page.waitForTimeout(10000);
  await expect(loginPage.usernameLabel).toBeVisible();
  await expect(loginPage.passwordLabel).toBeVisible();
  await loginPage.Username.click();
  await loginPage.Username.fill("Admin");
  await loginPage.password.click();
  await loginPage.password.fill("admin123");
  await loginPage.loginbutton.click();
}
