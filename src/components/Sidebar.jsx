import ProfilePic from "../assets/Navbar/profile.png";
import BottomArrow from "../assets/Navbar/sidebarBottomArrow.png";
import Wallet from "../assets/Navbar/wallet.png";
import Home from "../assets/Sidebar_Logos/Home.png";
import Order from "../assets/Sidebar_Logos/orders.png";
import Product from "../assets/Sidebar_Logos/products.png";
import Marketing from "../assets/Sidebar_Logos/marketing.png";
import Payment from "../assets/Sidebar_Logos/payments.png";
import Analytics from "../assets/Sidebar_Logos/analytics.png";
import Delivery from "../assets/Sidebar_Logos/delivery.png";
const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed lg:sticky left-0 top-0 z-10 h-[100dvh] w-full overflow-hidden transition-all duration-300 lg:max-w-[224px] pointer-events-none opacity-0 lg:opacity-100 lg:pointer-events-auto"
      aria-label="Sidebar"
    >
      <div className="relative mr-auto transition-transform duration-300 ease-in-out flex flex-col max-w-[224px] px-2 py-4 h-[100dvh] gap-4 bg-[#1E2640] justify-between -translate-x-full lg:translate-x-0">
        <div className="w-full flex flex-col gap-6 items-center">
          <div className="flex gap-3 text-[#FFFFFF] items-center w-fit mx-auto">
            <div className=" bg-white w-[39px] h-[39px] m-[0.5px] rounded-[4px] relative">
              <img src={ProfilePic} alt="profilePic"></img>
            </div>
            <div className="flex flex-col gap-1 w-[108px] justify-center">
              <h3 className="font-medium text-[15px] leading-[22px]">
                Nishyan
              </h3>
              <a className="underline leading-[16px] text-[13px] font-extralight w-fit text-[#D2D4D9]">
                Visit Store
              </a>
            </div>
            <img className="w-[20px] h-[20px]" src={BottomArrow}></img>
          </div>
          <div className="w-full flex-col gap-4">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className=" px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10"
                >
                  <div className="relative w-[18px] h-[18px]">
                    <img
                      src={Home}
                      alt="Order"
                      loading="lazy"
                      decoding="async"
                      className="object-contain object-center"
                    ></img>
                  </div>
                  <p className="text-[14px] font-medium">Home</p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10"
                >
                  <div className="relative w-[18px] h-[18px]">
                    <img
                      src={Order}
                      alt="Order"
                      loading="lazy"
                      decoding="async"
                      className="object-contain object-center"
                    ></img>
                  </div>
                  <p className="text-[14px] font-medium">Order</p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10"
                >
                  <div className="relative w-[18px] h-[18px]">
                    <img
                      src={Product}
                      alt="Product"
                      loading="lazy"
                      decoding="async"
                      className="object-contain object-center"
                    ></img>
                  </div>
                  <p className="text-[14px] font-medium">Product</p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10"
                >
                  <div className="relative w-[18px] h-[18px]">
                    <img
                      src={Payment}
                      alt="Payment"
                      loading="lazy"
                      decoding="async"
                      className="object-contain object-center"
                    ></img>
                  </div>
                  <p className="text-[14px] font-medium">Payment</p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10"
                >
                  <div className="relative w-[18px] h-[18px]">
                    <img
                      src={Marketing}
                      alt="Marketing"
                      loading="lazy"
                      decoding="async"
                      className="object-contain object-center"
                    ></img>
                  </div>
                  <p className="text-[14px] font-medium">Marketing</p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10"
                >
                  <div className="relative w-[18px] h-[18px]">
                    <img
                      src={Analytics}
                      alt="Analytics"
                      loading="lazy"
                      decoding="async"
                      className="object-contain object-center"
                    ></img>
                  </div>
                  <p className="text-[14px] font-medium">Analytics</p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10"
                >
                  <div className="relative w-[18px] h-[18px]">
                    <img
                      src={Delivery}
                      alt="Delivery"
                      loading="lazy"
                      decoding="async"
                      className="object-contain object-center"
                    ></img>
                  </div>
                  <p className="text-[14px] font-medium">Delivery</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-[6px] px-3 bg-[#353C53] mx-2 rounded">
          <div className="flex gap-3 items-center">
            <div className="w-9 h-9 bg-[#FFFFFF]/10 rounded p-[6px] flex justify-center items-center">
              <img
                alt="wallet_icon"
                loading="lazy"
                width="23.65"
                height="19.6"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src={Wallet}
              />
            </div>
            <div className="flex flex-col text-white gap-[2px]">
              <h3 className="text-[13px] text-[#FFFFFF] font-light">
                Available Credits
              </h3>
              <h6 className="text-base font-medium">224.10</h6>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
