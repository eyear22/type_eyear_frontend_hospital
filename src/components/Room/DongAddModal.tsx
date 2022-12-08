import styled from "styled-components";
import AddModal from "../common/AddModal";

type DongAddModalType = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const DongAddModal: React.FC<DongAddModalType> = ({ open, setOpen }) => {
  return (
    <>
      <AddModal title="병동추가" open={open} setOpen={setOpen}>
        ss
      </AddModal>
    </>
  );
};

export default DongAddModal;
