import { redirect } from "next/navigation";
import Loader from "@/components/common/Loader";
import UseAuth from "@/lib/useAuth";
import { headers } from "next/headers";
import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage.external";

export default async function Validator(params) {
  const [auth, user] = await UseAuth();
  // console.log(user);
  const headersList = headers();
  // headersList.forEach((value, key) => {
  //   console.log(key, value);
  // })
  const path = staticGenerationAsyncStorage?.getStore()?.urlPathname;
  const activePath = path ? path.replace(/\/\d+|\?_rsc=[a-zA-Z0-9]+/g, '') : "/";
  console.log(activePath);
  const rolesPagesMap = {
    // "ROLE_ADMIN": [
      // "/",
      // "/groups",
      // "/groups/edit",
      // "/groups/show",
      // "/players",
      // "/players/show",
      // "/lessons",
      // "/lessons/show",
      // "/lessons/edit",
      // "/grades",
      // "/grades/show",
      // "/grades/edit",
      // "/system"
    // ],
    "ROLE_ADMIN": "admin",
    "ROLE_COACH": [
      "/",
      "/groups",
      "/groups/edit",
      "/groups/show",
      "/players",
      "/players/show",
      "/lessons",
      "/lessons/show",
      "/lessons/edit",
      "/grades",
      "/grades/show",
      "/grades/edit",
      "/activities",
      "/activities/edit",
      "/activities/show",
      "/activities/new",
    ],
    "ROLE_PLAYER": [
      "/",
      "/groups/show",
      "/players/show",
      "/lessons",
      "/lessons/show",
      "/grades",
      "/grades/show",
      "/activities",
      "/activities/show",
    ],
    "ROLE_PLAYER": [
      "/",
      "/groups/show",
      "/players/show",
      "/lessons",
      "/lessons/show",
      "/grades",
      "/grades/show",
      "/activities",
      "/activities/show",
    ],
    "ROLE_USER": [
      "/"
    ]
  }
  // if(!auth) {
    // redirect("/main");
  // }
  // console.log(user.roles[0], rolesPagesMap[user.roles[0]], activePath, rolesPagesMap[user.roles[0]].includes(activePath));
  if(rolesPagesMap[user.roles[0]].includes(activePath) !== true && rolesPagesMap[user.roles[0]] !== "admin"){
    redirect( rolesPagesMap[user.roles[0]][0] ? rolesPagesMap[user.roles[0]][0] : "/main" );
  }

  return (
    <>
      {params.children}
    </>
  )
}