"use server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { get } from "http";

const secretKey = process.env.SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

interface userSchema {
    Email: string;
    Password: string;
}



export async function login(formData: userSchema) {
  const object: { [key: string]: any } = {};
  Object.entries(formData).forEach(([key, value]) => { object[key] = value; });
  const json = JSON.stringify(object);

  const user = await fetch("http://localhost:5001/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: json,
  }).then((res) => res.json());

  if (user.error) {
    return user;
  }

  const session = user.token;

  cookies().set("session", session, { expires: new Date(user.expiresAt), httpOnly: true });
  redirect("/")
}

export async function logout() {
  cookies().set("session", "", { expires: new Date(0) });
//   redirect("/")
}

export async function getSession() {
    const session = cookies().get("session");
    if (!session) {
        return null;
    }

    const response = await fetch("http://localhost:5001/api/user/authcheck", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${session.value}`
        },
    }).then((res) => res.json());

    return await response;
}

export async function isAuthorized() {
    return await getSession() || { authorized: false };
}
