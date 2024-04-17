import { Form, redirect, useNavigation, Link } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/login", data);
    toast.success("Logged in Successfully");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const LoginPage = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-secondary">
      <div className="form_container p-5 rounded bg-white">
        <Form method="post">
          <h3 className="text-center">Log In</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              className="form-control"
              defaultValue="ralph.sabalo@gmail.com"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              className="form-control"
              defaultValue="password"
            />
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </div>
          <p className="text-center mt-2">
            Don't have an account yet?{" "}
            <Link to="/register" className="ms-2">
              Register
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
