import React from "react";
import { Modal } from "react-native";

export default function ModalComp({ Visible, children }) {
  return (
    <Modal animationType="slide" transparent={true} visible={Visible}>
      {children}
    </Modal>
  );
}
