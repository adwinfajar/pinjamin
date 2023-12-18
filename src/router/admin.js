//Layout
import SidebarPinjamin from "../layouts/Sidebar.vue";
import AuthMiddleware from "@/middleware/auth.middleware.js";

import AdminPinjamin from "../views/admin/index.vue";

export default [
  {
    path: "/admin",
    name: "admin",
    component: AdminPinjamin,
    meta: {
      title: "Admin",
      layout: SidebarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
];
