import { CollectionsOverview } from "../../components/collections-overview/collections-overview.components"
import { Routes, Route } from "react-router-dom";
import { CollectionPage } from "../collection/collection.component";

export const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route index element={<CollectionsOverview />}/>
        <Route path="/:collectionId" element={<CollectionPage />}/>
      </Routes>
    </div>
  )
}