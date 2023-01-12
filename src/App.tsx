import "./App.css";
import TopLayout from "./assets/bg-pattern-top.svg";
import BottomLayout from "./assets/bg-pattern-bottom.svg";
import CardLay from "./assets/bg-pattern-card.svg";
import ProfileImg from "./assets/image-victor.jpg";

function App() {
	return (
		<div className="bg-DarkCyan min-h-screen max-h-fit relative overflow-hidden flex justify-center items-center font-KumbhSans">
			<img className="absolute  bottom-[70%] right-[50%] sm:bottom-[50%]" src={TopLayout} alt="" />
			<img className="absolute  top-[70%] left-1/2 sm:top-1/2" src={BottomLayout} alt="" />
			<main className="bg-white rounded-xl text-center max-w-sm z-10">
				<img className="rounded-t-xl" src={CardLay} alt="" />
				<div className="-translate-y-14 px-6 -mb-8 border-b-[1px]  border-gray-300">
					<img className="rounded-full border-4 border-white mx-auto" src={ProfileImg} alt="" />
					<h1 className="font-bold text-VeryDarkUnsaturatedBlue py-4 text-xl">
						Victor Crest <span className="text-DarkGrayishBlue font-normal ml-2">26</span>
					</h1>
					<p className=" text-DarkGrayishBlue pb-6">London</p>
				</div>
				<ul className="flex justify-around pb-6">
					<li className="text-center">
						<p className="font-bold text-xl">80K </p>
						<span className="text-sm text-DarkGrayishBlue">Followers</span>
					</li>
					<li className="text-center">
						<p className="font-bold text-xl">803K</p>
						<span className="text-sm text-DarkGrayishBlue">Likes</span>
					</li>
					<li className="text-center">
						<p className="font-bold text-xl">1.4K</p>
						<span className="text-sm text-DarkGrayishBlue">Photos</span>
					</li>
				</ul>
			</main>
		</div>
	);
}

export default App;
