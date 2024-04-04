import { fetchAccountDetails } from "@/services/accountServices";
import AccountForm from "../components/AccountForm";

const Page = async ({ params }: { params: { actions: string[] } }) => {
  const { actions } = params;
  const [action, id] = actions;
  const accountDetails =
    action === "update" ? await fetchAccountDetails(+id) : null;

  return <AccountForm details={accountDetails?.data} />;
};

export default Page;
