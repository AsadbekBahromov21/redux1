import { useFetch } from "../../hooks/useFetch";
import Products from "../../companents/product/products";
import { Pagination } from "antd";
import React, { useState } from "react";

const Home = () => {
  const [skip, setSkip] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, loading } = useFetch(
    "/products",
    {
      limit,
      skip: (skip - 1) * limit,
    },
    [skip, limit]
  );
  const handlChange = (current, pageSize) => {
    setLimit(pageSize);
    setSkip(current);
  };
  return (
    <div>
      {<Products data={data?.products} loading={loading} />}
      <Pagination
        current={skip}
        onChange={handlChange}
        className="mt-5"
        align="center"
        defaultCurrent={1}
        defaultPageSize={limit}
        total={data?.total}
      />
    </div>
  );
};

export default Home;
