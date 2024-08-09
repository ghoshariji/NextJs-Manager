"use client";

import React from "react";

const Login = () => {
  return (
    <div>
      <form action="" >
        <h1>Login</h1>
        <input type="text" name="name" placeholder="Enter name" />
        <input type="password" name="password" placeholder="Enter password" />
        <input type="text" name="about" pattern="Enter About" />
        <input type="submit" value="SUbmit" />
      </form>
    </div>
  );
};

export default Login;
