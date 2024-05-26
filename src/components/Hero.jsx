const Hero = () => {
  return (
    <div className="h-[calc(100vh-92px)] flex flex-col justify-between">
      <div className="h-3/4 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-normal text-grey">iPhone 15 Pro</h2>
        <video className="w-4/5" src="./assets/videos/hero.mp4" autoPlay></video>
      </div>
      <div className="h-1/5 flex flex-col items-center gap-8">
        <button className="h-10 w-20 rounded-full bg-blue border-blue border-2 hover:bg-black hover:text-blue">Buy</button>
        <p className="text-xl">From $199/month or $999</p>
      </div>
    </div>
  );
};
export default Hero;
