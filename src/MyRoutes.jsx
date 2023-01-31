import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";
import Contacts from "./pages/contacts/Contacts";
import Invoices from "./pages/invoices/Invoices";
import Form from "./pages/form/Form";
import Calendar from "./pages/calendar/Calendar";
import FAQ from "./pages/faq/FAQ";
import Bar from "./pages/bar/Bar";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<Form />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/bar" element={<Bar />} />
    </Routes>
  );
};

export default MyRoutes;
