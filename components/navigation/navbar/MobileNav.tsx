import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const MobileNav = () => {
  //! Ab SheetTrigger khud <button> render nahi karega. Instead, ye tumhare diye gaye child component ko hi trigger bana dega.

  //TODO: prop mein sirf "isMobileNav" likhne se uski value true mani jaegi, ise ={true} consider kia jata h
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          height={36}
          width={36}
          alt="Menu"
          className="sm:hidden invert-colors"
        />
      </SheetTrigger>
      <SheetContent
        className="background-light900_dark200 no-border px-4 py-10"
        side="left"
      >
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/site-logo.svg"
            width={23}
            height={23}
            alt="Logo"
          />
          <p className="h2-bold font-absans text-dark-100  dark:text-light-900">
            Dev <span className="text-primary-500">Flow</span>
          </p>
        </Link>
        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-2 pt-2">
              <NavLinks isMobileNav/>
            </section>
          </SheetClose>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="small-medium btn-secondary flex items-center min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient font-bold font-absans text-xl">Login</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="small-medium btn-tertiary flex items-center min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className=" font-semibold font-absans text-light-800 text-xl">Sign Up</span>
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
