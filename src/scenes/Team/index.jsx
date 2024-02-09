import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t } = useTranslation();
  const navigate = useNavigate()
  const rows = [
    {
      id: "1",
      name: "jasmin ",
      email: "jasmin@gmail.com",
      phone: "01922",
      access: "admin",
    },
    {
      id: "2",
      name: "jasmin ",
      email: "jasmin@gmail.com",
      phone: "01922",
      access: "admin",
    },
    {
      id: "3",
      name: "jasmin ",
      email: "jasmin@gmail.com",
      phone: "01922",
      access: "admin",
    },
    {
      id: "4",
      name: "jasmin ",
      email: "jasmin@gmail.com",
      phone: "01922",
      access: "admin",
    },
    {
      id: "5",
      name: "jasmin ",
      email: "jasmin@gmail.com",
      phone: "01922",
      access: "admin",
    },
  ];
  const columns = [
    { field: "id", headerName: "الرقم" },
    {
      field: "name",
      headerName: "الاسم",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "phone",
      headerName: "رقم الهاتف ",
      flex: 1,
    },
    {
      field: "email",
      headerName: "الإيميل",
      flex: 1,
    },

    {
      field: "access",
      headerName: "المسمى الوظيفي ",
      flex: 1,
    },
  ];
  return (
    <Box>
      <Header
        title={`${t("team")}`}
        subtitle={`${t("Managing team member")}`}
      />
      <Box>
        <Button
          sx={{ fontSize: "20px", color: colors.greenAccent[500] }}
          variant={colors.greenAccent[500]}
          onClick={()=>navigate('/add_user')}
        >
          إضافة مستخدم
        </Button>
      </Box>{" "}
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          sx={{ fontSize: "1rem" }}
        />
      </Box>
    </Box>
  );
};
export default Team;
