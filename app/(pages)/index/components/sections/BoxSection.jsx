import { MappedBoxes } from "@/components/UI/base/Box";

export default function BoxSection(){
    return (
         <section className="h-screen flex flex-col justify-center items-center bg-amber-900">
                <h2 className="text 5x1">Main page section 3</h2>
                <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 grid-row-2 gap-12">
                <MappedBoxes />
        
                {/* {boxData.map((box, index) => (
                  <Box 
                  key={box + index}
                  text={box} 
                  />
                ))} */}
              
                </div>
              </section>
    )
}