import { Box } from "@mui/material";
import { MRT_ColumnDef, MaterialReactTable } from "material-react-table";
import { useMemo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from 'axios';

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  mobileNumber: string;
}

function Users() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://localhost:7065/api/User');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const columns = useMemo<MRT_ColumnDef<IUser>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: t("firstName"),
      },
      {
        accessorKey: "lastName",
        header: t("lastName"),
      },
      {
        accessorKey: "age",
        header: t("age"),
      },
      {
        accessorKey: "mobileNumber",
        header: t("mobileNumber"),
      },
    ],
    [t]
  );

  return (
    <Box>
      <MaterialReactTable
        columns={columns}
        data={data}
        enablePagination={false}
        muiTableBodyCellProps={{
          sx: {
            textAlign: i18n.language === "ar" ? "start" : "start",
          },
        }}
      />
    </Box>
  );
}

export default Users;
