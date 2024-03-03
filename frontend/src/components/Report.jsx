import { Col, Row } from "reactstrap";
import SalesChart from "./dashboard/SalesChart";
import Feeds from "./dashboard/Feeds";
import TopCards from "./dashboard/TopCards";
import { useIsAuthenticated } from "@azure/msal-react";

const Report = () => {

  const isAuthenticated = useIsAuthenticated();
  return (

    isAuthenticated ? (
      <div className="mt-3">
        {/***Top Cards***/}
        <Row>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-success text-success"
              title="Profit"
              subtitle="รายได้ต่อปี"
              earning="150,000"
              icon="bi bi-wallet"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-danger text-danger"
              title="Refunds"
              subtitle="รายได้ต่อเดือน"
              earning="90,000"
              icon="bi bi-coin"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-warning text-warning"
              title="Member"
              subtitle="สมาชิก"
              earning="256"
              icon="bi bi-person-add"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-info text-info" 
              title="New member"
              subtitle="สมาชิกใหม่"
              earning="10"
              icon="bi bi-people"
            />
          </Col>
        </Row>
        {/***Sales & Feed***/}
        <Row className="mt-3">
          <Col sm="6" lg="6" xl="7" xxl="8">
            <SalesChart />
          </Col>
          <Col sm="6" lg="6" xl="5" xxl="4">
            <Feeds />
          </Col>
        </Row>
      </div>
    ) : (
      <div className='text-center mt-5'><h3>กรุณา Login เพื่อเข้าสู่ระบบ</h3></div>
    )
  );
  

};

export default Report;
