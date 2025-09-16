import { useForm } from "react-hook-form";
import { Con } from "@/js/context";
import { Switch } from "@/components/ui/switch";
import { useContext, useEffect } from "react";
import { Input } from "../ui/input";
import { DialogPassword } from "./dialogpassword";

export default function AccountSetting() {
  const { users } = useContext(Con);
  const currentUser = users && users.length > 0 ? users[0] : null;

  const { register, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (currentUser) {
      reset({
        name: currentUser.name,
        email: currentUser.email,
        password: currentUser.password,
      });
    }
  }, [currentUser, reset]);

  return (
    <div className="w-full   shadow-md rounded-lg bg-white dark:bg-gray-900 transition-colors duration-300 ">
      {/* Title */}
      <h2 className="capitalize px-4 py-3 font-semibold text-xl border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
        Account Settings
      </h2>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
        {/* Name */}
        <div className="flex flex-col w-full">
          <label className="capitalize font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Name
          </label>
          <Input
            type="text"
            {...register("name")}
            disabled
            className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col w-full">
          <label className="capitalize font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Email
          </label>
          <Input
            type="email"
            {...register("email")}
            disabled
            className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col w-full">
          <label className="capitalize font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Password
          </label>
          <Input
            type="password"
            {...register("password")}
            disabled
            className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
          />
        </div>

        {/* Two-Factor Authentication */}
        <div className="flex items-center justify-between sm:col-span-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <span className="font-medium text-gray-800 dark:text-gray-200">
            Two-Factor Authentication
          </span>
          <Switch />
        </div>

        {/* Dialog to change info */}
        <div className="flex items-center justify-start sm:col-span-2">
          <DialogPassword  className="dark:text-white"/>
        </div>
      </form>
    </div>
  );
}
