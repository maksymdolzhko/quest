import { Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useCookies } from "next-client-cookies";
import { logout } from "@/api/db/auth";
import Link from "next/link";
import router from "next/router";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import {i18nConfig} from "../../../i18nConfig";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function LoginDropdown() {
  const cookies = useCookies();
  const isAuth = cookies.get("isAuth");
  const router = useRouter();
  const pathname = usePathname();
  
  const handleChangeLocale = (newLocale: string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    // document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // if (
    //   currentLocale === i18nConfig.defaultLocale &&
    //   !i18nConfig.prefixDefault
    // ) {
    //   console.log('newLocale1 ::::::', "/", newLocale,'/', pathname,'/',)
    //   // router.push("/" + newLocale + pathname);
    // } else {
    //   console.log('newLocale2 ::::::', `/${currentLocale}`, `/${newLocale}`)
    //   // router.push(
    //   //   pathname.replace(`/${currentLocale}`, `/${newLocale}`)
    //   // );
    // }

    router.refresh();
  }
  const handlerLogout = async () => {
    // const user = await logout();
    // if(user){
    //   router.push("/ua");
    // }

    cookies.remove("isAuth");
    cookies.remove("user");
    router.push("/");
    router.refresh();
   }
 
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                onClick={()=>handleChangeLocale('en')}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  EN
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                onClick={()=>handleChangeLocale('ua')}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  UA
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      onClick={handlerLogout}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
            {isAuth && (
              <form action={handlerLogout}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </form>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}