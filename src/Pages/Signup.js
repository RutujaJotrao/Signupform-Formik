import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import SigninForm from "../Components/SignUpForm"

const SignUp = ({ loginUser }) => {
  return (
    <>

            <Box sx={{ mt: 1 }}>
              <SigninForm />
            </Box>
    </>
  );
};

export default SignUp;
