import * as React from "react";
import { Button, Menu, MenuItem, ListItemText } from "@mui/material";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher({ size = "small", light = false }) {
    const { t } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const current = (i18n.resolvedLanguage || "uk").toLowerCase();

    const handleOpen = (e) => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const change = (lng) => () => {
        i18n.changeLanguage(lng);
        handleClose();
    };

    return (
        <>
            <Button
                onClick={handleOpen}
                size={size}
                variant="outlined"
                sx={{
                    textTransform: "uppercase",
                    minWidth: 56,
                    color: light ? "white" : "inherit",
                    borderColor: light ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.23)",
                    "&:hover": {
                        borderColor: light ? "white" : "rgba(0, 0, 0, 0.87)",
                        backgroundColor: light ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.04)",
                    },
                }}
            >
                {current}
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {["uk", "ru", "en"].map((lng) => (
                    <MenuItem key={lng} selected={lng === current} onClick={change(lng)}>
                        <ListItemText>{t(`languages.${lng}`)}</ListItemText>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}