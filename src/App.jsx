import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ScrollTop from "./components/scrollTop/ScrollTop";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const NoPage = lazy(() => import("./pages/noPage/NoPage"));
const ProductInfo = lazy(() => import("./pages/productInfo/ProductInfo"));
const CartPage = lazy(() => import("./pages/cart/CartPage"));
const AllProduct = lazy(() => import("./pages/allProduct/AllProduct"));
const Signup = lazy(() => import("./pages/registration/Signup"));
const Login = lazy(() => import("./pages/registration/Login"));
const UserDashboard = lazy(() => import("./pages/user/UserDashboard"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AddProductPage = lazy(() => import("./pages/admin/AddProductPage"));
const UpdateProductPage = lazy(() => import("./pages/admin/UpdateProductPage"));
const CategoryPage = lazy(() => import("./pages/category/CategoryPage"));

const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Suspense
          fallback={
            <div className="flex min-h-[50vh] items-center justify-center text-stone" role="status">
              Loading page...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/allproduct" element={<AllProduct />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/category/:categoryname" element={<CategoryPage />} />
            <Route
              path="/user-dashboard"
              element={
                <ProtectedRouteForUser>
                  <UserDashboard />
                </ProtectedRouteForUser>
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRouteForAdmin>
                  <AdminDashboard />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/addproduct"
              element={
                <ProtectedRouteForAdmin>
                  <AddProductPage />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/updateproduct/:id"
              element={
                <ProtectedRouteForAdmin>
                  <UpdateProductPage />
                </ProtectedRouteForAdmin>
              }
            />
          </Routes>
        </Suspense>
        <Toaster />
      </Router>
    </MyState>
  );
}

export default App;
