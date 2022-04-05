import { useState } from "react";
import { Modal } from "react-bootstrap";
import "./App.css";
import Cake from "./assets/img/cake.png";
import { EditIcon } from "./components/Icons";
import Tier from "./components/Tier";
import TimeFrame from "./components/TimeFrame";
import UseBalance from "./components/UseBalance";
function App() {
  const [showDetail, setShowDetail] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <main>
        <div className="container mt-5">
          <button onClick={handleShow} class="border-0 px-4 py-2">
            Show Modal
          </button>

          <Modal
            contentClassName="rio-calculator-modal-content"
            dialogClassName="rio-calculator-modal-dialog"
            centered
            show={show}
            onHide={handleClose}
          >
            <div className="modal-wrapper">
              <h4>ROI Calculator</h4>
              <div className="d-flex cake-usd-text  justify-content-end">
                <div className="d-flex align-items-center">
                  <img src={Cake} alt="" />
                  <span className="d-inline-block ms-2"> Cake </span>
                </div>
                <div className="d-flex ms-2 align-items-center">
                  <div>
                    <input type="checkbox" hidden="hidden" id="username" />
                    <label class="switch" for="username"></label>
                  </div>
                  <span className="d-inline-block ms-2"> USD </span>
                </div>
              </div>
              <div className="input-wrapper mt-3 d-flex justify-content-end">
                <span>2.10000 CAKE </span>
              </div>
              <UseBalance />
              <TimeFrame />
              <div className="accelerate mt-4">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="m-0">Enable Accelerated APY</h4>
                  <div>
                    <input type="checkbox" hidden="hidden" id="Accelerated " />
                    <label class="switch" for="Accelerated "></label>
                  </div>
                </div>
              </div>
              <Tier />
              <div className="current-rate mt-2 d-flex justify-content-end">
                <span>ROI at Current Rates</span>
              </div>
              <div className="input-wrapper mt-2 align-items-center d-flex justify-content-between">
                <EditIcon />
                <span>100.0 USD </span>
              </div>

              <div className="d-flex mt-2 justify-content-end">
                <span className="title">~ 3CAKE + 10 DON</span>
              </div>
              <div className="d-flex mt-2">
                <button className="flex-grow-1  apply-btn py-2 border-0 me-2">
                  Apply
                </button>
                <button
                  onClick={handleClose}
                  className="flex-grow-1 d-flex justify-content-center  cancel-btn py-2  ms-2"
                >
                  Cancel
                </button>
              </div>
              <div className="d-flex mt-3  justify-content-center">
                <span
                  onClick={() => setShowDetail(!showDetail)}
                  className="hide-text cursor-pointer"
                >
                  {showDetail ? "Hide" : "Show"} Details
                  <svg
                    width="12"
                    className="ms-1"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6566 1.64326L5.99996 7.29993L0.343299 1.64326L1.28597 0.699927L5.99996 5.41459L10.714 0.699927L11.6566 1.64326Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
              {showDetail && (
                <>
                  <div className="apy-wrapper d-flex align-items-center justify-content-between">
                    <span className="">APY</span>
                    <h3 className="">63.34%</h3>
                  </div>
                  <div className="list-wrapper">
                    <li>Calculated based on current rates.</li>
                    <li>
                      All fugures are estimates provided for your convenience
                      only, and by no means represent guaranted returns.
                    </li>
                  </div>
                </>
              )}
            </div>
          </Modal>
        </div>
      </main>
    </>
  );
}

export default App;
