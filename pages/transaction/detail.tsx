import React from "react";
import Sidebar from "../../components/organism/sidebar";
import TransactionDetailContent from "../../components/organism/transactionDetailContent";

export default function TransactionDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      {/* <Sidebar activeMenu="transaction" /> */}
      <TransactionDetailContent />
    </section>
  );
}
