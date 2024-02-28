import { CollectionsOverview } from "../../components/collections-overview/collections-overview.components"
import { Routes, Route, useNavigate, useLocation, useParams } from "react-router-dom";
import { CategoryPage } from "../category/category.component";

export const ShopPage = () => {

  return (
    <div className="shop-page">
      <Routes>
        <Route index element={<CollectionsOverview />}/>
        <Route path="/:categoryId" element={<CategoryPage />}/>
        {/* <CollectionsOverview /> */}
      </Routes>
    </div>
  )
}