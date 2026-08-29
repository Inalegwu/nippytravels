"use client";

import { Dialog } from "@base-ui/react";
import { CloseCircleBoldIcon } from "@solar-icons/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Switch } from "./atoms";

type RootProps = {
  children: React.ReactNode;
};

type ActiveView = "about" | "form";

export default function Root(props: RootProps) {
  const router = useRouter();
  const pathname = usePathname();

  const dialogTriggerRef = React.useRef<HTMLButtonElement>(null);
  const searchParams = useSearchParams();
  const viewing = searchParams.get("viewing");
  const [activeView, setActiveView] = React.useState<ActiveView>("about");

  React.useEffect(() => {
    if (viewing === "about") {
      setActiveView("about");
      dialogTriggerRef.current?.click();
    }
    if (viewing === "form") {
      setActiveView("form");
      dialogTriggerRef.current?.click();
    }
  }, [viewing]);

  const closeDialog = React.useCallback(() => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.delete("viewing");
    const newUrl = currentParams.toString()
      ? `${pathname}?${currentParams.toString()}`
      : pathname;
    router.push(newUrl, { scroll: false });
  }, [pathname, router, searchParams]);

  return (
    <>
      {props.children}
      <Dialog.Root>
        <Dialog.Trigger ref={dialogTriggerRef} />
        <Dialog.Portal className="z-30">
          <Dialog.Backdrop className="fixed inset-0 min-h-dvh bg-black opacity-20 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute" />
          <Dialog.Popup className="fixed top-1/2 left-1/2 -mt-8 flex flex-col w-[90%] h-4/6 md:lg:xl:h-full md:lg:xl:w-4/6 overflow-hidden md:lg:xl:max-w-[calc(100vw-3rem)] md:lg:xl:max-h-[calc(90vh-3rem)] -translate-x-1/2 rounded-lg corner-squircle -translate-y-1/2 bg-neutral-50 text-neutral-950 border border-neutral-100 shadow shadow-black/20 transition-[scale,opacity] duration-100 ease-out data-ending-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:scale-[0.98] data-starting-style:opacity-0">
            <div className="overflow-y-auto flex-1 py-6 px-6 pt-12 pb-8 md:px-10">
              <Switch value={activeView}>
                {{
                  about: <AboutView />,
                  form: <FormView />,
                  default: () => null,
                }}
              </Switch>
            </div>
            <Dialog.Close
              onClick={closeDialog}
              className="flex fixed z-1 right-5 top-4 text-red-800 items-center justify-center"
            >
              <CloseCircleBoldIcon size={30} />
            </Dialog.Close>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

const AboutView = React.memo(() => {
  return (
    <div className="w-full h-full flex overflow-hidden">
      <div className="w-4/6 flex flex-col items-start text-sm text-neutral-600 justify-start text-start h-full border-r border-solid border-r-neutral-200 overflow-y-scroll overflow-x-hidden">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          recusandae! Consequuntur animi nostrum tempore quis quia, ipsam quas
          voluptates ut. Illum quo voluptates placeat molestiae porro natus
          facilis quae cumque!
        </p>
      </div>
      <div className="w-2/6 h-full flex flex-col items-center justify-center"></div>
    </div>
  );
});

// use react-hook-form and zod for this
const FormView = React.memo(() => {
  return (
    <div className="flex flex-col items-start justify-start gap-3">
      <h1 className="text-2xl text-blue-400 font-bold">Preliminary Form</h1>
      <input type="text" className="input" placeholder="First Name" />
    </div>
  );
});
