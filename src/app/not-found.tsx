// "use client"

// import { useEffect } from "react";

// export const Error: React.FunctionComponent = () => {
    
//     useEffect(() => {}, []);

//     return (
//         <div>
//             <p>naber la, site yok site :D</p>
//         </div>
//     );
// }

'use client'
 
import { Button } from "@/components/Button.component";

export default function Error() {
  return (
    <div className="text-white container mx-10 my-20">
      <h2>Since this is an experimental app, there are no other routes.</h2>
      <button className="bg-react-green w-auto py-2 px-12 rounded-md font-medium my-6">
        <a href="/">Go Home</a>
      </button>
      {/* <Button content="<a>Go Home</a>" /> */}
    </div>
  );
}
