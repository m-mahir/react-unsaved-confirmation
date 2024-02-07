import { FC } from "react";
import { useBlocker } from "react-router-dom";
import "./ConfirmationDialog.css";

interface CustomConfirmationDialogProps {
  when: boolean;
}

const NavConfirmationDialog: FC<CustomConfirmationDialogProps> = ({ when }) => {
  const { state, proceed, reset } = useBlocker(when);

  return (
    state === "blocked" && (
      <div className="modal-overlay">
        <div className="modal-dialog">
          <h2 className="modal-title">Discard Changes?</h2>
          <p className="modal-message">
            You have unsaved changes. Are you sure you want to leave?
          </p>
          <div className="modal-button-container">
            <button onClick={proceed} className="modal-button confirm-button">
              Confirm
            </button>
            <button onClick={reset} className="modal-button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default NavConfirmationDialog;
