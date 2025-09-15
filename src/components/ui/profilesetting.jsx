import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfileSetting() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: "Mohamed Bahaa",
      jobTitle: "Frontend Developer",
      bio: "Passionate about React and UI/UX design.",
    },
  });

  const [profileImage, setProfileImage] = useState(null);

  const onSubmit = (data) => {
   
  };

  // upload image
  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  // remove image
  const handleRemovePhoto = () => {
    setProfileImage(null);
  };

  return (
    <div className="p-6 bg-white shadow rounded-2xl ">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-left">
        Profile Settings
      </h2>

      {/* Profile Photo */}
      <div className="flex items-center gap-6 mb-8">
        <Avatar className="w-32 h-32">
          {profileImage ? (
            <AvatarImage src={profileImage} alt="Profile" />
          ) : (
            <AvatarFallback>MB</AvatarFallback>
          )}
        </Avatar>

        <div className="space-y-2">
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileChange}
            className="hidden"
            id="profile-upload"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => document.getElementById("profile-upload").click()}
          >
            Change Photo
          </Button>
          {profileImage && (
            <Button
              type="button"
              variant="destructive"
              onClick={handleRemovePhoto}
            >
              Remove Photo
            </Button>
          )}
        </div>
      </div>

      {/* Profile Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Full Name */}
        <div className="flex flex-col">
          <Label className="mb-1">Full Name</Label>
          <input
            type="text"
            {...register("fullName")}
            className="rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Job Title */}
        <div className="flex flex-col">
          <Label className="mb-1">Job Title</Label>
          <input
            type="text"
            {...register("jobTitle")}
            className="rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Bio (full width) */}
        <div className="flex flex-col col-span-1 md:col-span-2">
          <Label className="mb-1">company info</Label>
          <textarea
            rows={3}
            {...register("bio")}
            className="rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          />
        </div>

        {/* Submit */}
        <div className="col-span-1 md:col-span-2 flex justify-end">
          <Button type="submit">Save Profile</Button>
        </div>
      </form>
    </div>
  );
}
