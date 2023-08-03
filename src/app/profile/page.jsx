"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const { data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!data?.user) {
      router.push("/login");
    }
  }, []);
  return (
    <div>
      {data?.user && (
        <div className="flex items-center h-screen w-full justify-center">
          <div className="max-w-xs">
            <div className="bg-white shadow-xl rounded-lg py-3">
              <div className="photo-wrapper p-2">
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src={data?.user?.image}
                  alt="John Doe"
                />
              </div>
              <div className="p-2">
                <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                  {data?.user?.name}
                </h3>
                <div className="text-center text-gray-400 text-xs font-semibold">
                  <p>Web Developer</p>
                </div>
                <table className="text-xs my-3">
                  <tbody>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Email
                      </td>
                      <td className="px-2 py-2">{data?.user?.email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
