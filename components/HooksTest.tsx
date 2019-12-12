import React from "react";
import moment from "moment";

function HooksTestContent() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    getCount();
  });

  const getCount = () => {
    const newDate = moment().unix();
    console.log(newDate);
    setCount(newDate);
  };

  return (
    <div>
      <p>{count}</p>
      <style jsx>{`
        p {
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
}

export default HooksTestContent;
