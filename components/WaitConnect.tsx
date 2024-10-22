export const WaitConnect = () => {
  return (
    <section className="flex flex-col gap-5 pb-[58px] lg:py-20 lg:flex-row-reverse lg:items-center lg:gap-10">
      <div className="relative lg:flex-1">
        <video autoPlay loop muted>
          <source src="/videos/nft-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute left-0 top-0 w-full h-full bg-linearDark mix-blend-soft-light" />
        <div className="absolute left-0 top-0 w-full h-full shadow-inner" />
      </div>
      <div className="lg:flex-1">
        <h2 className="font-monument uppercase text-[30px] md:text-[36px] leading-[1.2] mb-[20px] lg:mb-6 lg:text-[42px]">
          Avocado NFT LIST
        </h2>
        <p className="w-fit font-satoshi-bold text-lg leading-[1.4] text-gradient mb-6 lg:text-[24px] lg:mb-12">
          Wallet is not connected. Please connect wallet by clicking Connect
          Wallet to see your NFT list.
        </p>
      </div>
    </section>
  );
};

export default WaitConnect;
