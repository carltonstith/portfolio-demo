// import { Button } from "@/components/ui/button"
// import Toggle from "../toggle/page";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="transition-all duration-300">
    {children}
    </div>
    // <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
    //   <div className="max-w-3xl text-center space-y-10 space-x-2">
    //     <Button>Button 1</Button>
    //     <Button variant="secondary">Button 2</Button>
    //    {/* <Toggle /> */}
      //  {/* {children}
     // </div>
    //</div> */}


    // <div className="wrapper">
    //   <div className="wrapper-container">
    //     {children}
    //   </div>
    // </div>
  );
}