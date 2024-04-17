import { FormRow,FormRowSelect } from '../components';
import { useOutletContext } from 'react-router-dom';
import { Form, useNavigation, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/DashboardFormPage';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  


  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registered Successfully");
    return redirect("/dashboard/database");
  } catch (error) {
    const showErrorMessages= ()=>{
        const errors = error?.response?.data?.errorMessages
        const errors1 = error?.response?.data?.msg

        if(!errors1){
        for (let i = 0; i < errors.length; i++) {
            toast.error(errors[i]);
          }
      } else {
        toast.error(errors1)
      }
    }
    showErrorMessages()
    return error;
  }
};




const Database = () => {
  const { user } =useOutletContext();
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  const oneDay = 1000 * 60 * 60 *24

  return <Wrapper>
    <Form method="post" className="form">
      <h4 className="form-title">Add User</h4>
      <div className="form-center">
        <FormRow type='text' name='firstName'labelText="First Name" defaultValue={"Ralph"} />
        <FormRow type='text' labelText='Last Name' name="lastName" defaultValue={"Talplacido"}/><br/>
        <FormRow type='email' labelText='Email' name="email" defaultValue={"ralph.sabalo@gmail.com"}/>
        <FormRow type='password' labelText='Password' name="password"defaultValue={"password"}/><br/>

        {/* <FormRowSelect labelText='job status' name='jobStatus' defaultValue={USER_ROLES.USER} list={Object.values(USER_ROLE)} /> */}

        {/* <FormRowSelect labelText='job type' name='jobType' defaultValue={USER_SORT_BY.ASCENDING} list={Object.values(USER_SORT_BY)} /> */}

        <button type="submit" className="btn btn-block form-btn" disabled={isSubmitting}>
          {isSubmitting?'submitting':'submit'}
        </button>
      </div>
    </Form>
  </Wrapper>
};

export default Database;
