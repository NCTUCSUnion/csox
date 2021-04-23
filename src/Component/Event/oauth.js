import React from 'react';
import { ModalHeader, ModalContent, ModalConfirm } from './style';
import { API_URL } from '../../constant';

export default () => {
    const gotoOAuth = () => {
        if (window.localStorage)
            window.localStorage.setItem('new_oauth_notified', 'true');
        window.location.href = (`${API_URL}/login`);
    }
    return (
        <div style={{ lineHeight: 'initial' }}>
            <ModalHeader>NYCU OAuth 轉移通知</ModalHeader>
            <ModalContent>
                <p>考古題系統已更新為使用NYCU OAuth驗證身分</p>
                <p>往後請使用新的NYCU單一入口帳號登入！</p>
                <ModalConfirm onClick={gotoOAuth}>我瞭解了</ModalConfirm>
            </ModalContent>
        </div>
    )
};
