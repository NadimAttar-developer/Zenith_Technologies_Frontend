import Barchart from 'components/Barchart'
import Chart from 'components/Chart'

function D3() {

    const myInlineStyle = {
        textAlign: 'center',
        display: 'flex',
        gap: '20px'
      };

  return (
   <div style={myInlineStyle}>
       <Barchart />
       <Chart />
   </div>
  );
}

export default D3;
