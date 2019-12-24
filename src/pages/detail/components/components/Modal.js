import React from 'react';
import { Modal } from 'antd';


export const LocalModal = (style, title, visible, onOk, onCancel, okText, cancelText, okButtonProps, cancelButtonProps, text) => {
    return ( 
        <Modal
        style={style}
        title={title}
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        okText={okText}
        cancelText={cancelText}
        okButtonProps={okButtonProps}
        cancelButtonProps={cancelButtonProps}
        >
        {text}
    </Modal>
    );
}