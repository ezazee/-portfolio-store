import React from "react";
import Sidebar from "../../components/organism/sidebar";
import TransactionContent from "../../components/organism/transactionContent";

export default function Transaction() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transaction" />
      <TransactionContent />
    </section>
  );
}
