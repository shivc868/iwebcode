import { useState } from "react";
import { Modal } from "react-bootstrap";
import "./App.css";
import Cake from "./assets/img/cake.png";
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
              <div className="accelerate mt-3">
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
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5801 4.54668L17.6667 0.613349C17.4081 0.356059 17.0582 0.211624 16.6934 0.211624C16.3286 0.211624 15.9787 0.356059 15.7201 0.613349L1.84674 14.4667L0.580068 19.9333C0.536373 20.1332 0.537871 20.3403 0.584453 20.5394C0.631035 20.7386 0.721524 20.9249 0.849311 21.0846C0.977097 21.2444 1.13895 21.3735 1.32305 21.4627C1.50715 21.5519 1.70885 21.5988 1.9134 21.6C2.00871 21.6096 2.10476 21.6096 2.20007 21.6L7.72674 20.3333L21.5801 6.49335C21.8374 6.23475 21.9818 5.8848 21.9818 5.52002C21.9818 5.15523 21.8374 4.80528 21.5801 4.54668ZM7.06007 19.1334L1.88007 20.22L3.06007 15.14L13.4401 4.80002L17.4401 8.80002L7.06007 19.1334ZM18.3334 7.83335L14.3334 3.83335L16.6534 1.52668L20.5867 5.52668L18.3334 7.83335Z"
                    fill="#A8A8A8"
                  />
                </svg>
                <span>100.0 USD </span>
              </div>

              <div className="d-flex mt-2 justify-content-end">
                <span className="title">~ 3CAKE + 10 DON</span>
              </div>
              <div className="d-flex mt-2">
                <button className="flex-grow-1  apply-btn py-2 border-0 me-2">
                  Apply
                </button>
                <button className="flex-grow-1 d-flex justify-content-center  cancel-btn py-2  ms-2">
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
