import { auth } from "@/auth";
import LogoutButton from "@/components/LogoutButton";
import Image from "next/image";

// import { getServerSession } from "next-auth/next"

async function Profile() {
  const session = await auth();
  return (
    <div className="flex items-center justify-center min-h-[90vh]">
      <div className="p-5  shadow-2xl rounded-md min-w-[30%] max-w-[50%] flex gap-5 flex-col items-center">
        {session?.user?.image ? (
          <Image
            width={100}
            height={100}
            alt={session?.user?.name || ""}
            src={session?.user?.image || ""}
            className="w-20 h-20 rounded-full border border-yellow-500 shadow-md"
          />
        ) : (
          <div className="w-20 h-20 rounded-full border border-yellow-500 shadow-md bg-green-600 flex items-center justify-center">
            {session?.user?.name?.charAt(0).toUpperCase()}
            {session?.user?.name?.split(" ")[1]?.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="text-center text-sm">
          <p>{session?.user?.name}</p>
          <p>{session?.user?.email}</p>
        </div>
        <LogoutButton />
      </div>
    </div>
  );
}

export default Profile;
