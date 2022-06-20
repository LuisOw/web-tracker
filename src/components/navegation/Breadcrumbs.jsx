import * as React from "react";
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";

const BasicBreadcrumbs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter((x) => x);

  return (
    <div role="presentation">
      <MUIBreadcrumbs aria-label="breadcrumb">
        {pathNames.map((name, index) => {
          if (index % 2 === 0) {
            const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathNames.length - 1;
            return isLast ? (
              <Typography>{name}</Typography>
            ) : (
              <Link onClick={() => navigate(routeTo)}>{name}</Link>
            );
          }
        })}
      </MUIBreadcrumbs>
    </div>
  );
};

export default BasicBreadcrumbs;
