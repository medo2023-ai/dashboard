import Aside from "./aside";
import AccountSetting from "./AccountSetting";
import ProfileSetting from "./profilesetting";
export default function Setting(){
     return (
          <main className="w-full p-3 rounded-md  ">
            <h2 className="capitalize text-left font-semibold text-2xl dark:text-white">settings</h2>
           <AccountSetting/>
           <ProfileSetting/>
          </main>
      );
}