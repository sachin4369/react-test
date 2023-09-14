import BottomSection from "./component/bottom/page";
import LeftSection from "./component/left/page";
import MidSection from "./component/mid/page";
import RightSection from "./component/right/page";


export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-20 justify-between items-start relative">
        <LeftSection />
        <MidSection />
        <RightSection />
      </div>
      <BottomSection />

    </>
  )
}
