import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function ProfileSetting() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      avatar: "",
      company: "OpenAI Technologies",
      position: "Frontend Developer",
      phone: "+20 123 456 789",
    },
  });

  const [avatarPreview, setAvatarPreview] = useState(null);

  useEffect(() => {
    reset({
      company: "OpenAI Technologies",
      position: "Frontend Developer",
      phone: "+20 123 456 789",
    });
  }, [reset]);

  const onSubmit = (data) => {
    console.log("Profile updated:", data);
    toast.success("Profile updated successfully!");
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 sm:p-8 transition-colors duration-300">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
        Profile Settings
      </h2>

    <form
  onSubmit={handleSubmit(onSubmit)}
  className="grid grid-cols-1 md:grid-cols-2 gap-6"
>
  {/* Avatar Upload */}
  <div className="flex flex-col items-center gap-4 col-span-1 md:col-span-2">
    <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 shadow-md">
      {avatarPreview ? (
        <img
          src={avatarPreview}
          alt="Avatar Preview"
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff"
          alt="Default Avatar"
          className="w-full h-full object-cover"
        />
      )}
    </div>
    <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition">
      Upload Avatar
      <input
        type="file"
        accept="image/*"
        onChange={handleAvatarChange}
        className="hidden"
        {...register("avatar")}
      />
    </label>
  </div>

  {/* Company */}
  <div className="flex flex-col w-full">
    <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
      Company
    </label>
    <Input
      type="text"
      {...register("company")}
      placeholder="Enter company name"
      className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
    />
  </div>

  {/* Position */}
  <div className="flex flex-col w-full">
    <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
      Position
    </label>
    <Input
      type="text"
      {...register("position")}
      placeholder="Enter job position"
      className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
    />
  </div>

  {/* Phone */}
  <div className="flex flex-col w-full">
    <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
      Phone
    </label>
    <Input
      type="tel"
      {...register("phone")}
      placeholder="+20 123 456 789"
      className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
    />
  </div>

  {/* Save Button */}
  <div className="col-span-1 md:col-span-2 flex justify-end mt-4">
    <Button
      type="submit"
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
    >
      Save Changes
    </Button>
  </div>
</form>

    </div>
  );
}
