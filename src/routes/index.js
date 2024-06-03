import { lazy } from 'react';

// Import components using lazy loading
const Dashboard = lazy(() => import('../pages/protected/Dashboard/Dashboard'));
const Orders = lazy(() => import('../pages/protected/Orders/Orders'));
const Stores = lazy(() => import('../pages/protected/Store/Stores/Stores'));
const Media = lazy(() => import('../pages/protected/Media/Media'))
const AddProducts = lazy(() => import('../pages/protected/Products/AddProducts/AddProducts'))
const StoreWalletTransaction = lazy(() => import('../pages/protected/Store/WalletTransaction/WalletTransaction'))
const ManageProducts = lazy(() => import('../pages/protected/Products/ManageProducts/ManageProducts'))
const ProductsOrder = lazy(() => import('../pages/protected/Products/ProductsOrder/ProductsOrder'))
const CategoriesBulkUploads = lazy(() => import('../pages/protected/Category/BulkUploads/BulkUploads'))
const ProductsBulkUploads = lazy(() => import('../pages/protected/Products/BulkUploads/BulkUploads'))
const Categories = lazy(() => import('../pages/protected/Category/Categories/Categories'))
const CategoryOrder = lazy(() => import('../pages/protected/Category/CategoryOrder/CategoryOrder'))
const Slider = lazy(() => import('../pages/protected/Slider/Slider'))
const ViewCustomers = lazy(() => import('../pages/protected/Customers/ViewCustomers/ViewCustomers'))
const Addresses = lazy(() => import('../pages/protected/Customers/Addresses/Addresses'))
const CustomerTransaction = lazy(() => import('../pages/protected/Customers/Transaction/Transaction'))
const CustomerWalletTransaction = lazy(() => import('../pages/protected/Customers/WalletTransaction/WalletTransaction'))
const Riders = lazy(() => import('../pages/protected/Rider/Riders/Riders'))
const FundTransfer = lazy(() => import('../pages/protected/Rider/FundTransfer/FundTransfer'))
const CashCollection = lazy(() => import('../pages/protected/Rider/CashCollection/CashCollection'))
const PaymentRequest = lazy(() => import('../pages/protected/PaymentRequest/PaymentRequest'))
const SystemSetting = lazy(() => import('../pages/protected/System/SystemSettings/SystemSettings'))
const SystemHealth = lazy(() => import('../pages/protected/System/SystemHealth/SystemHealth'))
const EmailSetting = lazy(() => import('../pages/protected/System/EmailSetting/EmailSetting'))
const PaymentMethods = lazy(() => import('../pages/protected/System/PaymentMethods/PaymentMethods'))
const NotificationSetting = lazy(() => import('../pages/protected/System/NotificationSetting/NotificationSetting'))
const ContactUs = lazy(() => import('../pages/protected/System/ContactUs/ContactUs'))
const AboutUs = lazy(() => import('../pages/protected/System/AboutUs/AboutUs'))
const AdministratorProfile = lazy(() => import('../pages/protected/AdministratorProfile/AdministratorProfile'))


// Define routes
const routes = [
    {
        path: '/dashboard', // the url
        component: Dashboard, // view rendered
        service: true,
    },
    {
        path: '/orders', // the url
        component: Orders, // view rendered
    },
    {
        path: '/stores', // the url
        component: Stores, // view rendered
    },
    {
        path: '/store-wallet-transaction', // the url
        component: StoreWalletTransaction, // view rendered
    },
    {
        path: '/media', // the url
        component: Media, // view rendered
    },
    {
        path: '/add-products', // the url
        component: AddProducts, // view rendered
    },
    {
        path: '/categories-bulk-uploads', // the url
        component: CategoriesBulkUploads, // view rendered
    },
    {
        path: '/products-bulk-uploads', // the url
        component: ProductsBulkUploads, // view rendered
    },
    {
        path: '/manage-products', // the url
        component: ManageProducts, // view rendered
    },
    {
        path: '/products-order', // the url
        component: ProductsOrder, // view rendered
    },
    {
        path: '/categories', // the url
        component: Categories, // view rendered
    },
    {
        path: '/category-order', // the url
        component: CategoryOrder, // view rendered
    },
    {
        path: '/slider', // the url
        component: Slider, // view rendered
    },
    {
        path: '/view-customers', // the url
        component: ViewCustomers, // view rendered
    },
    {
        path: '/addresses', // the url
        component: Addresses, // view rendered
    },
    {
        path: '/customer-transaction', // the url
        component: CustomerTransaction, // view rendered
    },
    {
        path: '/customer-wallet-transaction', // the url
        component: CustomerWalletTransaction, // view rendered
    },
    {
        path: '/riders', // the url
        component: Riders, // view rendered
    },
    {
        path: '/fund-transfer', // the url
        component: FundTransfer, // view rendered
    },
    {
        path: '/cash-collection', // the url
        component: CashCollection, // view rendered
    },
    {
        path: '/payment-request', // the url
        component: PaymentRequest, // view rendered
    },
    {
        path: '/system-settings', // the url
        component: SystemSetting, // view rendered
    },
    {
        path: '/system-health', // the url
        component: SystemHealth, // view rendered
    },
    {
        path: '/email-setting', // the url
        component: EmailSetting, // view rendered
    },
    {
        path: '/payment-methods', // the url
        component: PaymentMethods, // view rendered
    },
    {
        path: '/notification-setting', // the url
        component: NotificationSetting // view rendered
    },
    {
        path: '/contact-us', // the url
        component: ContactUs // view rendered
    },
    {
        path: '/about-us', // the url
        component: AboutUs // view rendered
    },
    {
        path: '/administrator-profile', // the url
        component: AdministratorProfile // view rendered
    },
    
]






// const routes = [
//     {
//         path: `/app/dashboard`,
//         element: <Dashboard />,
//         pageName: "Dashboard",
//         isProtected: true
//     },
//     {
//         path: '/app/library',
//         element: <Library />,
//         pageName: "Library",
//         isProtected: true
//     },
//     {
//         path: '/app/courses',
//         element: <Courses />,
//         pageName: "Courses",
//         isProtected: true
//     },
//     {
//         path: '/login-ch',
//         element: <h1>this is login</h1>,
//         pageName: "Courses",
//         isProtected: false
//     }
// ];

export default routes;
