import React from "react";
import { Table, Modal, Tooltip } from "antd";
import "antd/dist/reset.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../backend/slice/fetchProducts";
import DragColumn from "react-drag-listview";
import { useTheme } from "@emotion/react";
import { EyeOutlined } from "@ant-design/icons";
import { babyBlue, white } from "../color-main/color";

export default function DashBoardPage() {
  const theme = useTheme();

  const { data, isLoading } = useSelector((state) => state.fetchProducts);
  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  //  columns لازم تكون قبل useState
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Details",
      render: (_, record) => (
        <Tooltip title="عرض التفاصيل">
          <EyeOutlined
            style={{
              fontSize: "18px",
              cursor: "pointer",
              color: babyBlue,
              transition: "0.3s",
            }}
            onClick={(e) => {
              e.stopPropagation(); 
              setSelectedProduct(record);
              setIsModalOpen(true);
            }}
            onMouseEnter={(e) => (e.target.style.color = babyBlue)}
            onMouseLeave={(e) => (e.target.style.color = babyBlue)}
          />
        </Tooltip>
      ),
    },
  ];

  const [cols, setCols] = React.useState(columns);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const dragProps = {
    onDragEnd(fromIndex, toIndex) {
      const newCols = [...cols];
      const item = newCols.splice(fromIndex, 1)[0];
      newCols.splice(toIndex, 0, item);
      setCols(newCols);
    },
  };

  return (
    <>
      <DragColumn {...dragProps}>
        <Table
          columns={cols}
          dataSource={data}
          loading={isLoading}
          rowKey="id"
          scroll={{ y: 400 }}

          style={{
            backgroundColor: theme.palette.background.default,
          }}

         
          onRow={(record) => ({
            onClick: () => {
              setSelectedProduct(record);
              setIsModalOpen(true);
            },
            style: {
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.secondary,
              cursor: "pointer",
            },
          })}

          components={{
            header: {
              cell: (props) => (
                <th
                  {...props}
                  style={{
                    backgroundColor: theme.palette.primary.button,
                    color:white,
                  }}
                />
              ),
            },
          }}
        />
      </DragColumn>

      <Modal
  open={isModalOpen}
  onCancel={() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }}
  footer={null}
  centered
>
  {selectedProduct && (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      {/*  Header */}
      <div
        style={{
          backgroundColor: theme.palette.primary.button, 
          color: "#fff",
          padding: "16px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        {selectedProduct.title}
      </div>

      {/*  Content */}
      <div
        style={{
          padding: "16px",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        <p style={{ marginBottom: "10px" }}>
          <strong>Description:</strong> {selectedProduct.description}
        </p>

        <p style={{ marginBottom: "10px" }}>
          <strong>Price:</strong>{" "}
          <span style={{ color: "#52c41a", fontWeight: "bold" }}>
            ${selectedProduct.price}
          </span>
        </p>

        <p>
          <strong>Category:</strong>{" "}
          <span
            style={{
              background: theme.palette.primary.button,
              color: white,
              padding: "3px 10px",
              borderRadius: "8px",
              fontSize: "12px",
            }}
          >
            {selectedProduct.category}
          </span>
        </p>
      </div>
    </div>
  )}
</Modal>
    </>
  );
}