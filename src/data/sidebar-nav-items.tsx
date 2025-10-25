import * as React from "react";
import {
  Profile,
  Faq,
  Human,
  Setting,
  ReportOutline,
  Payment,
  BusinessProductSupplier,
  RecruitmentManagement,
  Service,
  Cube,
  Help,
  Support,
  TrainingClass,
} from "../assets/svg/index";

// eslint-disable-next-line react-refresh/only-export-components
export default function() {
  return [
    {
      title: "Home",
      to: "/marketplace",
      icon: <Profile/>,
      htmlAfter: ""
    },

    {
      title: "Analytics",
      to: "/dashboard/analytics/overall",
      icon: <Service/>,
      htmlAfter: ""
    },
    {
      title: "Manage Orders",
      icon: <Cube/>,
      to: "/order/manage/pendingcod",
    },
    {
      title: "Manage NDR",
      icon: <ReportOutline/>,
      to: "/manage-ndr/faileddelivery",
    },
    {
      title: "Supplier Re-Routing",
      icon: <BusinessProductSupplier/>,
      to: "/supplier-rerouting",
    },
    {
      title: "Manage Products",
      icon: <Setting/>,
      to: "/manage-products/pushedToShopify",
    },
    {
      title: "Source a Product",
      icon: <Human/>,
      to: "/source-product",
    },
    {
      title: "RTO Intelligence",
      icon: <Help/>,
      to: "/errors",
    },
    {
      title: "Reports",
      icon: <ReportOutline/>,
      to: "/reports",
    },
    {
      title: "Payment",
      icon: <Payment/>,
      to: "/payment",
    },
    {
      title: "Gst Invoice",
      icon: <ReportOutline/>,
      to: "/payment",
    },
    {
      title: "Value Added Services",
      icon: <ReportOutline/>,
      to: "/value-added-services",
    },
    {
      title: "Clouts",
      icon: <TrainingClass/>,
      to: "/clouts",
    },
    {
      title: "Supports",
      icon: <Support/>,
      to: "/supports",
    },
    {
      title: "Help",
      icon: <Help/>,
      to: "/help",
    }
  ];
}