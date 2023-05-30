import MainLayout from "@/components/MainLayout";

export default function UploadProposal() {
  return (
    <MainLayout>
      <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
        <h2 className="text-2xl font-bold">Proposal</h2>
        <form className="mt-4">
          <div className="">
            <label htmlFor="attachment" className="block font-medium mb-2">
              Attachment
            </label>
            <input type="file" id="attachment" name="attachment" />
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
