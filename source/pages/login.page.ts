import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly Loginheading: Locator;
  readonly Username: Locator;
  //   readonly welcome: Locator;
  readonly usernameLabel: Locator;
  readonly passwordLabel: Locator;
  //   readonly email: Locator;
  readonly password: Locator;
  readonly loginbutton: Locator;
  //   readonly loginText: Locator;
  //   readonly signUpButton: Locator;
  //   readonly forgetPassButton: Locator;
  //   readonly invalidEmailText: Locator;
  //   readonly invalidLoginAlert: Locator;
  // const emailis = "riz@getMaxListeners.xom";
  constructor(page: Page) {
    this.page = page;
    this.Loginheading = page.getByRole("heading", { name: "Login" });
    this.usernameLabel = page.getByText("Username", { exact: true });
    this.passwordLabel = page.getByText("Password", { exact: true });
    this.Username = page.getByPlaceholder("username");
    this.password = page.getByPlaceholder("password");
    this.loginbutton = page.getByRole("button", { name: "Login" });
    // this.signUpButton = page.getByRole("link", { name: "Sign Up" });
    // this.loginText = page.getByRole("heading", { name: "Log In" });
    // this.forgetPassButton = page.getByRole("link", {
    //   name: "Forgot password?",
    // });
    // this.welcome = page.getByRole("heading", { name: "Welcome Back" });
    // this.emailLabel = page.getByRole("heading", { name: "Email" });
    // this.passwordLabel = page.getByRole("heading", { name: "Password" });
    // this.invalidEmailText = page.getByText("Invalid Email");
    // this.invalidLoginAlert = page.getByRole("alert");
    // this.email = page.getByLabel("Email");
    // this.password = page.getByLabel("Password", { exact: true });
    // this.login = page.getByRole("button", { name: "LOG IN" });
  }
  // Method to set the email input field
  // Method to set the email input field
  async setEmail(emailValue: string) {
    if (emailValue) {
      await this.email.fill(emailValue);
    }
  }

  // Method to set the password input field
  async setPassword(passwordValue: string) {
    if (passwordValue) {
      await this.password.fill(passwordValue);
    }
  }
}
