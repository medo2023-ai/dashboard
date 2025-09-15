import Aside from "./aside";
import AccountSetting from "./AccountSetting";
import ProfileSetting from "./profilesetting";
export default function Setting(){
     return (
        <div className="flex min-h-screen w-full">
          {/* Sidebar */}
          <Aside/>
          <main className="w-full p-3 rounded-md  ">
            <h2 className="capitalize text-left font-semibold text-2xl">settings</h2>
           <AccountSetting/>
           <ProfileSetting/>
          </main>
        </div>
      );
}