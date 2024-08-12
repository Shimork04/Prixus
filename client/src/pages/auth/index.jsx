import { Button } from "@/components/ui/button";
import React from "react";

const Auth = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center font-roboto">
      <div className="h-[80vh] bg-slate-50 border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
              <h1
                className="text-5xl font-bold md:text-5.5xl font-montserrat"
              >
                {" "}
                Welcome to Prixus
              </h1>
              {/* this image is right-hand side image for the main page or auth page */}
              <img src="" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;









// import { Button } from "@/components/ui/button";
// import React from "react";

// const Auth = () => {
//   return (
//     <div className="h-[100vh] w-[100vw] flex items-center justify-center font-roboto">
//       <div className="h-[80vh] bg-slate-50 border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
//         <div className="flex flex-col gap-10 items-center justify-center">
//           <div className="flex items-center justify-center flex-col">
//             <div className="flex items-center justify-center">
//               <h1
//                 className="text-5xl font-bold md:text-5.5xl font-montserrat"
//                 >
//                 {" "}
//                 Welcome to Prixus
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;
