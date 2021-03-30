import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import HistoryIcon from '@material-ui/icons/History';
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link: "/dashboard",
    },
        {
        title: "Wallet",
        icon: <AccountBalanceWalletIcon/>,
        link: "/wallet",
    },
        {
        title: "Trade",
        icon: <TrendingUpIcon/>,
        link: "/trade",
    },
        {
        title: "Trade History",
        icon: <HistoryIcon/>,
        link: "/history",
    },
        {
        title: "How to Trade",
        icon: <InfoIcon/>,
        link: "/how_to_trade",
    },
        {
        title: "Account Settings",
        icon: <SettingsIcon/>,
        link: "/settings",
    },
];