import { Suspense } from "react";
import TransactionForm from "../components/TransactionForm";

const Page = () => {
  return (
    <Suspense fallback="Loading...">
      <TransactionForm />
    </Suspense>
  );
};

export default Page;
