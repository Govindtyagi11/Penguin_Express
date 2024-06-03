import { RiPagesLine } from "react-icons/ri";
import { MdHelp } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaThLarge } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaStore } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { FaCubes } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaIcons } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaWrench } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";


const SideBarRoute = [
  {
    path: "/app/dashboard",
    icon: <FaThLarge />,
    name: "Dashboard",
  },
  {
    path: "/app/orders",
    icon: <FaCartShopping />,
    name: "Orders",
  },
  {
    icon: <FaStore />,
    name: "Stores",
    toggleArrowButton: true,
    submenu: [
      {
        path: "/app/stores",
        icon: <FaStore />,
        name: "Stores",
      },
      {
        path: "/app/store-wallet-transaction",
        icon: <FaWallet />,
        name: "Wallet Transaction",
      },
    ],
  },
  {
    icon: <FaCubes />,
    name: "Products",
    toggleArrowButton: true,
    submenu: [
      {
        path: "/app/add-products",
        icon: <FaPlusSquare />,
        name: "Add Products",
      },
      {
        path: "/app/products-bulk-uploads",
        icon: <FaUpload />,
        name: "Bulk Uploads",
      },
      {
        path: "/app/manage-products",
        icon: <FaBoxes />,
        name: "Manage Products",
      },
      {
        path: "/app/products-order",
        icon: <FaBars />,
        name: "Products Order",
      },
    ],
  },
  {
    icon: <FaBullseye />,
    name: "Categories",
    toggleArrowButton: true,
    submenu: [
      {
        path: "/app/categories",
        icon: <FaBullseye />,
        name: "Categories",
      },
      {
        path: "/app/categories-bulk-uploads",
        icon: <FaUpload />,
        name: "Bulk Uploads",
      },
      {
        path: "/app/category-order",
        icon: <FaBars />,
        name: "Category Order",
      },
    ],
  },
  {
    path: "/app/media",
    icon: <FaIcons />,
    name: "Media",
  },
  {
    path: "/app/slider",
    icon: <FaImage />,
    name: "Sliders",
  },
  {
    icon: <FaUser  />,
    name: "Customer",
    toggleArrowButton: true,
    submenu: [
      {
        path: "/app/view-customers",
        icon: <FaUsers  />,
        name: "View Customers",
      },
      {
        path: "/app/addresses",
        icon: <FaRegAddressBook  />,
        name: "Addresses ",
      },
      {
        path: "/app/customer-transaction",
        icon: <FaMoneyBillWaveAlt   />,
        name: "Transactions ",
      },
      {
        path: "/app/customer-wallet-transaction",
        icon: <FaWallet />,
        name: "Wallet Transactions ",
      },
      
    ],
  },
  {
    icon: <FaMotorcycle  />,
    name: "Riders",
    toggleArrowButton: true,
    submenu: [
      {
        path: "/app/riders",
        icon: <FaMotorcycle  />,
        name: "Riders",
      },
      {
        path: "/app/fund-transfer",
        icon: <FaIndianRupeeSign  />,
        name: "Fund Transfer",
      },
      {
        path: "/app/cash-collection",
        icon: <FaMoneyBillWaveAlt  />,
        name: "Cash Collection",
      },
            
    ],
  },
  {
    path: "/app/payment-request",
    icon: <FaMoneyBillWave />,
    name: "Payment Request",
  },
  {
    icon: <FaWrench  />,
    name: "System",
    toggleArrowButton: true,
    submenu: [
      {
        path: "/app/system-settings",
        icon: <FaStore  />,
        name: "System Settings",
      },
      {
        path: "/app/system-health",
        icon: <FaHeartbeat  />,
        name: "System Health",
      },
      {
        path: "/app/email-setting",
        icon: <FaEnvelopeOpenText  />,
        name: "Email Setting",
      },
      {
        path: "/app/payment-methods",
        icon: <FaRupeeSign   />,
        name: "Payment Methods",
      },
      {
        path: "/app/notification-setting",
        icon: <FaBell />,
        name: "Notification Setting",
      },
      {
        path: "/app/contact-us",
        icon: <FaPhoneAlt />,
        name: "Contact Us",
      },
      {
        path: "/app/about-us",
        icon: <FaInfoCircle />,
        name: "About Us",
      },
      
            
    ],
  },
];

export default SideBarRoute;