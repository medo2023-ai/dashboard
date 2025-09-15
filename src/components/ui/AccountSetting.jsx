import { useForm } from "react-hook-form";
import { Con } from "@/js/context";
import { Switch } from "@/components/ui/switch"
import { useContext,useEffect } from "react";

export default function AccountSetting() {
      const { users } = useContext(Con);
        const currentUser = users && users.length > 0 ? users[0] : null;
  const { register, handleSubmit,reset } = useForm({
    defaultValues: {
      name:"",
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

  const onSubmit = (data) => {
    console.log("Updated Account Settings:", data);
    // You can call API or update context here
  };

  return (
    <div className="p-6 bg-white shadow rounded-2xl   w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-left">
        Account Settings
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Name */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text" 
          disabled
            {...register("name")}
            className="rounded-lg border border-gray-300 p-2   focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            disabled
            {...register("email")}
            className="rounded-lg border border-gray-300 p-2   focus:outline-none"
          />
        </div>
        {/* Password */}
        <div className="flex flex-col w-full">
          <label className="font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
           disabled
            {...register("password")}
            className="rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        {/*switch*/}
        <div className=" flex items-center justify-between  rounded-lg">
            <label className="font-medium text-gray-700 mb-1 p-3">Two-factor<br/>Authentication</label>
            <Switch/>
        </div>
        {/* Save button full width */}
        <div className="col-span-1 md:col-span-2  text-left">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            change password
          </button>
        </div>
      </form>
    </div>
  );
}
