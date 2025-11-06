import AddAssetForm from "../../../components/AddAssetForm";

export const metadata = {
  title: "Add New Asset | Ziprus Chemicals",
  description: "Record new company property or asset into Ziprus database.",
};

export default function AssetsPage() {
  return (
   <main className="pt-40">
      <AddAssetForm />
   </main>
  ) ;
}
