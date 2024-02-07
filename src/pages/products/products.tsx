import { Box } from "@mui/material";
import { MRT_ColumnDef, MaterialReactTable } from "material-react-table";
import { useMemo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from 'axios';

interface IProduct {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

function Products() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://localhost:7065/api/Product');
        console.log('data', response.data)
        setData(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const columns = useMemo<MRT_ColumnDef<IProduct>[]>(
    () => [
      {
        accessorKey: "name",
        header: t("product-name"),
      },
      {
        accessorKey: "quantity",
        header: t("Quantity"),
      },
      {
        accessorKey: "price",
        header: t("price"),
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

export default Products;
