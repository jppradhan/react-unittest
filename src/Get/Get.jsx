import React, { useEffect, useState } from "react";

const Get = props => {
  const { url } = props;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(r => r.json())
      .then(res => {
        setData(res);
        setLoading(false);
      });
  }, []);

  return loading ? <div>Loading...</div> : props.children(data);
};

export default Get;
